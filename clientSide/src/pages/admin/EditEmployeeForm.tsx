import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toast


interface EmployeeForm {
 name: string;
  gender: string;
  designation: string;
  department: string;
  role: string;
  salary: string;
}

const EditEmployeeForm: React.FC = () => {
  const { id } = useParams(); // 👈 get ID from route
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState<EmployeeForm>({
   name: '',
    gender: '',
    designation: '',
    department: '',
    role: '',
    salary: '',
  });

  // 👉 Fetch employee data when component mounts
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        console.log("Editing employee ID:", id);

       const response = await axios.get(`http://localhost:4000/admin/getemployeeView/${id}`);
        setEditForm(response.data.data);
      } catch (error) {
        toast.error('Failed to load employee data');
      }
    };

    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // 👉 Send updated form data with PATCH (or PUT if replacing all fields)
   await axios.put(`http://localhost:4000/admin/editemployeeForm/${id}`, editForm);

 toast.success('Employee updated successfully', {
  autoClose: 1500
});
    setTimeout(() => {
  navigate('/adminDashboard/employees');
}, 1500); // wait 1 second to show toast
    } catch (error) {
      toast.error('Failed to update employee');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-md rounded p-8 mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Employee</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   
 


        {/* Employee Name */}
        <div>
          <label className="block mb-1 font-medium">Employee Name </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={editForm.name}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            onChange={handleChange}
            value={editForm.gender}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="block mb-1 font-medium">Department</label>
          <input
            type="text"
            name="department"
            onChange={handleChange}
            value={editForm.department}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
    {/* Designation */}
        <div>
          <label className="block mb-1 font-medium">Designation</label>
          <input
            type="text"
            name="designation"
            onChange={handleChange}
            value={editForm.designation}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

       

        {/* Role */}
        <div>
          <label className="block mb-1 font-medium">Role</label>
          <input
            type="text"
            name="role"
            onChange={handleChange}
            value={editForm.role}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

    
 {/* Salary */}
        <div>
          <label className="block mb-1 font-medium">Salary</label>
          <input
            type="number"
            name="salary"
            onChange={handleChange}
            value={editForm.salary}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>



      </div>

      {/* Submit Button */}
<div className="mt-8 text-center">
  <button
    type="submit"
    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full text-lg"
  >
    Update Employee Form 
  </button>
</div>


    <ToastContainer />

    </form>
  );
}

export default EditEmployeeForm