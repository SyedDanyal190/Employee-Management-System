import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toast


interface formData {
  name: string;
  email: string;
  employeeId: string;
  gender: string;
  department: string;
  salary: string;
  role: string;
  designation: string;
  password: string;
  picture: File | null;
}

const EmployeeForm : React.FC = () => {

  const [formData, setFormData] = useState<formData>({
    name: '',
    email: '',
    employeeId: '',
    gender: '',
    department: '',
    salary: '',
    role: '',
    designation: '',
    password: '',
    picture: null,
  });


const [pictureFile, setPictureFile] = useState<File | null>(null);



   const token = localStorage.getItem("token");



const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setPictureFile(file);
  }
};


 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = e.target as HTMLInputElement;
   console.log(`Name  is  ${name} and value is  ${value}`)

     setFormData((prev)=>({
       ...prev,
       [name ]: value,
     }))

  };

const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
// try {
//     const response =  await  axios.post("http://localhost:4000/admin/employee",formData);
//     console.log("form of employee ",formData);
//     if(response.status === 200){
//        toast.success("Empoyee Form had  been  successFully  edit");    
//            console.log("User had been successfully registered", response.data);
//     }  
// } catch (error) {
//       console.error("Error  occur during empoyee form");
// }



try {
  const formPayload = new FormData();

for (const key in formData) {
  formPayload.append(key, formData[key]);
}

// Append file manually
if (pictureFile) {
  formPayload.append("picture", pictureFile);
}

await axios.post("http://localhost:4000/admin/employee", formPayload, {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

 toast.success("Employee form has been successfully submitted");

} catch (error) {
      console.error("Error  occur during empoyee form");
}



setFormData({
    name: '',
    email: '',
    employeeId: '',
    gender: '',
    department: '',
    salary: '',
    role: '',
    designation: '',
    password: '',
   picture: null,  // fixed typo here, previously was 'pic'
    });

    setPictureFile(null);  // reset picture

};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-md rounded p-8 mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Employee Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Employee ID */}
        <div>
          <label className="block mb-1 font-medium">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            onChange={handleChange}
            value={formData.employeeId}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
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
            value={formData.department}
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
            value={formData.salary}
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
            value={formData.role}
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
            value={formData.designation}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Upload Picture */}
      <div>
          <label className="block mb-1 font-medium">Upload Picture</label>
          <input
            type="file"
            name="picture"
            accept="image/*"
           onChange={handleFileChange}
            className="w-full border border-gray-300 p-2 rounded bg-white"
          />
        </div> 





      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>

    <ToastContainer />

    </form>
  );
};

export default EmployeeForm;
