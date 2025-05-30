import React from 'react';

const SalaryHistoryTable: React.FC = () => {
  const salaryData = [
    {
      id: 1,
      empId: 'EMP001',
      salary: 50000,
      allowance: 5000,
      deduction: 2000,
      payDate: '2024-05-01',
    },
    {
      id: 2,
      empId: 'EMP002',
      salary: 60000,
      allowance: 6000,
      deduction: 3000,
      payDate: '2024-05-01',
    },
    {
      id: 3,
      empId: 'EMP003',
      salary: 55000,
      allowance: 5500,
      deduction: 1500,
      payDate: '2024-05-01',
    },
  ];

  // Calculate total = salary + allowance - deduction
  const formatCurrency = (num: number) =>
    `$${num.toLocaleString('en-IN')}`;

  return (
    <div className="p-6 bg-white rounded shadow mt-6">

    <div className="flex justify-center items-center mt-2 mb-4">
        <h1 className="text-3xl font-bold">Salary History</h1>
      </div>


      {/* Header with title and search */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-xl font-semibold text-gray-800"></h1>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 w-64 max-w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-2 border">S.No.</th>
              <th className="px-4 py-2 border">Emp ID</th>
              <th className="px-4 py-2 border">Salary</th>
              <th className="px-4 py-2 border">Allowance</th>
              <th className="px-4 py-2 border">Deduction</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Pay Date</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((item, index) => {
              const total = item.salary + item.allowance - item.deduction;
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{item.empId}</td>
                  <td className="px-4 py-2 border">{formatCurrency(item.salary)}</td>
                  <td className="px-4 py-2 border">{formatCurrency(item.allowance)}</td>
                  <td className="px-4 py-2 border">{formatCurrency(item.deduction)}</td>
                  <td className="px-4 py-2 border font-semibold">{formatCurrency(total)}</td>
                  <td className="px-4 py-2 border">{item.payDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryHistoryTable;
