import React from 'react';

const LeaveTable: React.FC = () => {
  const leaveData = [
    {
      id: 1,
      empId: 'EMP001',
      name: 'John Doe',
      type: 'Sick Leave',
      department: 'IT',
      days: 3,
      status: 'Pending',
    },
    {
      id: 2,
      empId: 'EMP002',
      name: 'Jane Smith',
      type: 'Casual Leave',
      department: 'HR',
      days: 2,
      status: 'Approved',
    },
    {
      id: 3,
      empId: 'EMP003',
      name: 'Mark Lee',
      type: 'Annual Leave',
      department: 'Finance',
      days: 5,
      status: 'Rejected',
    },
  ];

  return (
    <div className="p-6 bg-white rounded shadow mt-6">

      <div className="flex justify-center items-center mt-2 mb-4">
        <h1 className="text-3xl font-bold">Manage  Leaves</h1>
      </div>

      {/* Top section: Search + Filter Buttons */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 w-1/4 min-w-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="space-x-2">
          <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Pending
          </button>
          <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
            Approved
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Rejected
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-2 border">S.No.</th>
              <th className="px-4 py-2 border">Emp ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Leave Type</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Days</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.empId}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.type}</td>
                <td className="px-4 py-2 border">{item.department}</td>
                <td className="px-4 py-2 border">{item.days}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      item.status === 'Pending'
                        ? 'bg-yellow-500'
                        : item.status === 'Approved'
                        ? 'bg-green-600'
                        : 'bg-red-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveTable;
