




import React from 'react';
import {
  FaUser,
  FaBuilding,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaClipboardList,
  FaTimesCircle,
  FaHourglassHalf,
} from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 w-full overflow-y-auto">

    <div className="flex items-center  mb-4">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>

      {/* Top Cards */}
      <div className="flex flex-wrap gap-6 mb-10">
        {/* Total Employees */}
        <div className="flex items-center bg-white rounded shadow p-4 flex-1 min-w-[16rem]">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaUser className="text-blue-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Total Employees</div>
            <div className="text-xl font-bold text-gray-800">104</div>
          </div>
        </div>

        {/* Total Departments */}
        <div className="flex items-center bg-white rounded shadow p-4 flex-1 min-w-[16rem]">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <FaBuilding className="text-green-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Total Departments</div>
            <div className="text-xl font-bold text-gray-800">8</div>
          </div>
        </div>

        {/* Monthly Pay */}
        <div className="flex items-center bg-white rounded shadow p-4 flex-1 min-w-[16rem]">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <FaMoneyBillWave className="text-yellow-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Monthly Pay</div>
            <div className="text-xl font-bold text-gray-800">$120,000</div>
          </div>
        </div>
      </div>

      {/* Leave Section Header */}
      <div className="flex justify-center items-center mt-2 mb-4">
        <h1 className="text-3xl font-bold">Leave Details</h1>
      </div>

      {/* Leave Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leave Applied */}
        <div className="flex items-center bg-white rounded shadow p-4 w-full">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaClipboardList className="text-blue-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Leaves Applied</div>
            <div className="text-xl font-bold text-gray-800">22</div>
          </div>
        </div>

        {/* Leave Approved */}
        <div className="flex items-center bg-white rounded shadow p-4 w-full">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <FaClipboardCheck className="text-green-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Leaves Approved</div>
            <div className="text-xl font-bold text-gray-800">15</div>
          </div>
        </div>

        {/* Leave Rejected */}
        <div className="flex items-center bg-white rounded shadow p-4 w-full">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <FaTimesCircle className="text-red-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Leaves Rejected</div>
            <div className="text-xl font-bold text-gray-800">4</div>
          </div>
        </div>

        {/* Leave Pending */}
        <div className="flex items-center bg-white rounded shadow p-4 w-full">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <FaHourglassHalf className="text-yellow-600" size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Leaves Pending</div>
            <div className="text-xl font-bold text-gray-800">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
