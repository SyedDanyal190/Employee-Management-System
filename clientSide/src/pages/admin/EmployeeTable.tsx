import React from 'react';

const EmployeeTable: React.FC = () => {
  const employees = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name   :'Yousaf', 
      dob: '1990-01-01',
      department: 'HR',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/11780220/pexels-photo-11780220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       name  :"Ahmed",
      dob: '1985-05-10',
      department: 'IT',
    },
    // Add more dummy data here if needed
  ];

  return (
    <div className="p-6 bg-white rounded shadow">

<div className="flex justify-center items-center mt-2 mb-4">
  <h1 className="text-3xl font-bold">Manage  Empoyees</h1>
</div>


      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add New Employee
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              <th className="px-6 py-3 border">S.No.</th>
              <th className="px-6 py-3 border">Image</th>
              <th className='px-6 py-3 border'>Name</th>
              <th className="px-6 py-3 border">DOB</th>
              <th className="px-6 py-3 border">Department</th>
              <th className="px-6 py-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 border">{index + 1}</td>
                <td className="px-6 py-3 border">
                  <img src={emp.image} alt="Employee" className="w-10 h-10 rounded-full" />
                </td>
                <td className="px-6 py-3 border">{emp.name}</td>
                <td className="px-6 py-3 border">{emp.dob}</td>
                <td className="px-6 py-3 border">{emp.department}</td>
                <td className="px-6 py-3 border space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                    View
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm hover:bg-purple-600">
                    Salary
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                    Leave
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

export default EmployeeTable;




