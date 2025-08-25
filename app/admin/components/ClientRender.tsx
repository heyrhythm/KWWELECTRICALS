// "use client";

// import { usePathname } from "next/navigation";
// import MainLayout from "../../../components/MainLayout";

// export default function ClientRender({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const showMainLayout = !pathname.startsWith("/admin");

//   if (showMainLayout) {
//     return <MainLayout>{children}</MainLayout>;
//   }
//   return <>{children}</>;
// }
