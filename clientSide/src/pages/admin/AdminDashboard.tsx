// import React from 'react';
// import Slidebar from './Slidebar';


// const AdminDashboard: React.FC = () => {
//   return (
//     <div className="border-red-950  flex flex-row h-screen w-full bg-gray-100"  id='Dashbaord'>
//       {/* Sidebar */}
//       <div className="w-1/9 bg-white shadow-lg">
//         <Slidebar />
//       </div>

//       {/* Main Content */}
  
//     </div>
//   );
// };

// export default AdminDashboard;










// AdminDashboard.tsx
import React from "react";
import Sidebar from "../admin/Slidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100 pt-16">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 ml-56 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
