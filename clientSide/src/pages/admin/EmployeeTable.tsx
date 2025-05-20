import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeTable: React.FC = () => {

const  [employeeData , setEmployeeData] =  useState([]);

const navigate = useNavigate();

const  FetchEmpoyeeData = async()=>{
    try {
     const response  = await axios.get("http://localhost:4000/admin/getemployee");
         if(response.status === 200){
               console.log("resposneDataaaaaa",response.data.data);
               setEmployeeData(response.data.data);
         }     
    } catch (error) {
        console.error("Error  occur  during form data");
    }
};


useEffect(()=>{
      FetchEmpoyeeData();

},[])




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
              <th className="px-6 py-3 border">Designation</th>
              <th className="px-6 py-3 border">Department</th>
              <th className="px-6 py-3 border">Actions</th>
            </tr>
          </thead>
     <tbody>
  {employeeData.map((emp, index) => {
    const {
      _id,
      name,
      designation,
      department,
      image,
    } = emp;

    return (
      <tr key={_id} className="hover:bg-gray-50">
        <td className="px-6 py-3 border">{index + 1}</td>
        <td className="px-6 py-3 border">
          <img
            src={
              image ||
              "https://via.placeholder.com/40x40.png?text=Emp"
            }
            alt="Employee"
            className="w-10 h-10 rounded-full"
          />
        </td>
        <td className="px-6 py-3 border">{name}</td>
        <td className="px-6 py-3 border">{designation}</td>
        <td className="px-6 py-3 border">{department}</td>
        <td className="px-6 py-3 border space-x-2">
          {/* <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            View
          </button> */}

          <button
  onClick={() => navigate(`/adminDashboard/employee/${_id}`)}
  className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
>
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
    );
  })}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;




