
// AdminDashboard.tsx
import React from "react";
import SidebarUser from "./SlidebarUser";
import { Outlet } from "react-router-dom";

const UserDashboard: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100 pt-16">
      {/* Sidebar */}
      <SidebarUser />

      {/* Main content */}
      <main className="flex-1 p-6 ml-56 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;
