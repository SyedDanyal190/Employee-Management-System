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

const SidebarUser : React.FC = () => {
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
            <Link to="/userDashboard/dashboardHome" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/userDashboard/profile" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaUsers />  My Profile 
            </Link>
          </li>
     
          <li>
            <Link to="/userDashboard/leaves" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaCalendarAlt /> Leaves
            </Link>
          </li>
          <li>
            <Link to="/userDashboard/salary" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaMoneyCheckAlt /> Salary
            </Link>
          </li>
          <li>
            <Link to="/userDashboard/settings" className=" hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarUser;
