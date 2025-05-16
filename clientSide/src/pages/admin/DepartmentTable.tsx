import React from 'react';

const DepartmentTable: React.FC = () => {
  const departments = [
    { id: 1, name: 'Human Resources' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' },
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Manage Department
      </h1>

      {/* Top Row: Search & Add */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add New Department
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              <th className="px-6 py-3 border">S.No.</th>
              <th className="px-6 py-3 border">Department</th>
              <th className="px-6 py-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr key={dept.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 border">{index + 1}</td>
                <td className="px-6 py-3 border">{dept.name}</td>
                <td className="px-6 py-3 border space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                    Delete
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

export default DepartmentTable;
