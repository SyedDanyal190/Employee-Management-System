

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Employee = {
  id: string;
  name: string;
  email: string;
  employeeId : string,
  department: string;
  gender: string;
  imageUrl: string;
};



const AdminEmployeeView: React.FC = () => {

  const { id } = useParams(); // get employee id from URL
  const [employeeData, setEmployeeData] = useState<any>(null);

const token = localStorage.getItem("token");

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/admin/getemployeeView/${id}`,{
        
  headers: {
    Authorization: `Bearer ${token}`,
  }
      });
      if (response.status === 200) {
        setEmployeeData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching employee data", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, [id]);

  if (!employeeData) return <div className="p-6">Loading...</div>;


  return (
    <div className="space-y-6">
    {/* {employeeData.map((emp, index) => {
    const {
      _id,
      name,
     employeeId,
      email,
      department,
      gender,
      image,
    } = emp; */}

{(() => {
  const {
    _id,
    name,
    employeeId,
    email,
    department,
    gender,
    image,
  } = employeeData;

  return (
    <div
      key={_id}
      className="flex items-center bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto"
    >
      {/* Left: Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 mr-6">
        <img
          src={image || "https://via.placeholder.com/128.png?text=Emp"}
          alt="Employee"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Details */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Employee ID:</span> {employeeId}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Department:</span> {department}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Gender:</span> {gender}
        </p>
      </div>
    </div>
  );
})()}

  
    </div>
  );
};

export default AdminEmployeeView;
