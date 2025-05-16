// // Sidebar.tsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`h-[calc(100vh-4rem)] bg-gray-800 text-white w-56 p-6
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           z-50 fixed top-16 left-0
//         `}
//       >
//         <ul className="space-y-4">
//           <li><Link to="/admin" className="block hover:bg-gray-700 p-2 rounded">Dashboard</Link></li>
//           <li><Link to="/admin/employees" className="block hover:bg-gray-700 p-2 rounded">Employees</Link></li>
//           <li><Link to="/admin/departments" className="block hover:bg-gray-700 p-2 rounded">Department</Link></li>
//           <li><Link to="/admin/leaves" className="block hover:bg-gray-700 p-2 rounded">Leaves</Link></li>
//           <li><Link to="/admin/settings" className="block hover:bg-gray-700 p-2 rounded">Settings</Link></li>
//           <li><Link to="/admin/salary" className="block hover:bg-gray-700 p-2 rounded">Salary</Link></li>
//         </ul>
//       </div>


//     </>
//   );
// };

// export default Sidebar;














// // Sidebar.tsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`
//           h-[calc(100vh-4rem)] bg-gray-800 text-white w-56 p-6
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           z-50 fixed top-16 left-0
//         `}
//       >
//         <ul className="space-y-4">
//           <li>
//             <Link to="/adminDashboard/dashboardHome" className="block hover:bg-gray-700 p-2 rounded">
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/adminDashboard/employees" className="block hover:bg-gray-700 p-2 rounded">
//               Employees
//             </Link>
//           </li>
//           <li>
//             <Link to="/adminDashboard/departments" className="block hover:bg-gray-700 p-2 rounded">
//               Department
//             </Link>
//           </li>
//           <li>
//             <Link to="/adminDashboard/leaves" className="block hover:bg-gray-700 p-2 rounded">
//               Leaves
//             </Link>
//           </li>
     
//           <li>
//             <Link to="/adminDashboard/salary" className="block hover:bg-gray-700 p-2 rounded">
//               Salary
//             </Link>
//           </li>
//                <li>
//             <Link to="/adminDashboard/settings" className="block hover:bg-gray-700 p-2 rounded">
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;















// Sidebar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaCog,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          h-[calc(100vh-4rem)] bg-gray-800 text-white w-56 p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          z-50 fixed top-16 left-0
        `}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/adminDashboard/dashboardHome" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/adminDashboard/employees" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaUsers /> Employees
            </Link>
          </li>
          <li>
            <Link to="/adminDashboard/departments" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaBuilding /> Department
            </Link>
          </li>
          <li>
            <Link to="/adminDashboard/leaves" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaCalendarAlt /> Leaves
            </Link>
          </li>
          <li>
            <Link to="/adminDashboard/salary" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaMoneyCheckAlt /> Salary
            </Link>
          </li>
          <li>
            <Link to="/adminDashboard/settings" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaCog /> Settings
            </Link>
          </li>
          <li>
               <Link to="/adminDashboard/employeeForm" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaCog /> EmpoyeeForm
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
