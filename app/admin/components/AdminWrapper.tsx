// "use client";
// import React from "react";
// import { AdminSidebar } from "./AdminSidebar";
// import { AdminHeader } from "./AdminHeader";

// interface AdminWrapperProps {
//   children: React.ReactNode;
// }

// export function AdminWrapper({ children }: AdminWrapperProps) {
//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Header fixed at top */}
//       <header className="w-full sticky top-0 z-30">
//         <AdminHeader />
//       </header>

//       {/* Sidebar + content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar fixed width */}
//         <aside className="w-64 border-r border-border">
//           <AdminSidebar />
//         </aside>

//         {/* Main content grows and scrolls */}
//         <main className="flex-1 p-8 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
