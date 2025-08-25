// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import { prisma } from "lib/db";
import bcrypt from "bcryptjs";

export const runtime = "nodejs"; // Prisma needs Node runtime (not Edge)

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, phone: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const { phone, password } = (await req.json()) as {
      phone?: string;
      password?: string;
    };

    if (!phone || !password) {
      return NextResponse.json(
        { error: "phone and password are required" },
        { status: 400 }
      );
    }

    // Very basic phone check (adjust to your rules)
    if (!/^\d{10,15}$/.test(phone)) {
      return NextResponse.json(
        { error: "phone must be 10-15 digits" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: { phone, passwordHash },
      select: { id: true, phone: true, createdAt: true },
    });

    return NextResponse.json(user, { status: 201 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // Unique constraint
    if (err?.code === "P2002") {
      return NextResponse.json(
        { error: "phone already exists" },
        { status: 409 }
      );
    }
    console.error(err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
