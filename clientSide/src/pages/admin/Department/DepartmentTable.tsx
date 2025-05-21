import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

interface   DepartmentData  {
    _id : string,
   name : string
}



const DepartmentTable: React.FC = () => {



const  [deptData  , setDeptData ]  =  useState<DepartmentData[]>([])
 
const[search , setSearch] = useState<string>(''); 

const  navigate   =  useNavigate(); 


const  fetchingDeptData  =  async()=>{
      try {

    const response  =  await axios.get("http://localhost:4000/admin/getdepartment");
    console.log("Getting Department ssDataa", response.data);    
        setDeptData(response.data.data);
      } catch (error) {
          console.error("Error  occuring in  submitting data");
      }
}


useEffect(()=>{
  fetchingDeptData()
},[])

const handleDelete = async (id: string) => {
  try {
    await axios.delete(`http://localhost:4000/admin/deletedepatment/${id}`);
    
    setDeptData((prev) => prev.filter((depart) => depart._id !== id));

    toast.success("Department deleted successfully");
  } catch (error) {
    console.error("Data has not been deleted");
    toast.error("Failed to delete department");
  }
};





const handleSearch =  deptData.filter((emp) =>  {
  const nameMatch = emp.name.toLowerCase().includes(search.toLowerCase());
   return  nameMatch;
})         



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
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"   onClick={()=>navigate(`/adminDashboard/department/addDepartment`)}>
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
            {handleSearch.map((dept, index) => (
              <tr  key={dept._id}   className="hover:bg-gray-50">
                <td className="px-6 py-3 border">{index + 1}</td>
                <td className="px-6 py-3 border">{dept.name}</td>
                <td className="px-6 py-3 border space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600" 
                  
                  // onClick={(()=> navigate(`/editDepartmentForm/${dept._id}`) )} >
                onClick={() => navigate(`/adminDashboard/department/editDepartmentForm/${dept._id}`)}>

                  Edit
                  </button>
                  <button className="bg-red-500  ml-3 text-white px-3 py-1 rounded text-sm hover:bg-red-600"  onClick={()=>handleDelete(dept._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <ToastContainer />
    </div>
  );
};

export default DepartmentTable;










// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// type Employee = {
//   id: string;
//   name: string;
//   email: string;
//   employeeId : string,
//   department: string;
//   gender: string;
//   imageUrl: string;
// };



// const AdminEmployeeView: React.FC = () => {

//   const { id } = useParams(); // get employee id from URL
//   const [employeeData, setEmployeeData] = useState<any>(null);

//   const fetchEmployeeData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/admin/getemployee/${id}`);
//       if (response.status === 200) {
//         setEmployeeData(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching employee data", error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployeeData();
//   }, [id]);

//   if (!employeeData) return <div className="p-6">Loading...</div>;


//   return (
//     <div className="space-y-6">
//     {employeeData.map((emp, index) => {
//     const {
//       _id,
//       name,
//      employeeId,
//       email,
//       department,
//       gender,
//       image,
//     } = emp;
//         return (
//         <div
//           key={_id}
//           className="flex items-center bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto"
//         >
//           {/* Left: Image */}
//           <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 mr-6">
//                  <img
//             src={
//               image ||
//               "https://via.placeholder.com/40x40.png?text=Emp"
//             }
//             alt="Employee"
//             className="w-10 h-10 rounded-full"
//           />
//           </div>

//           {/* Right: Details */}
//           <div className="space-y-2">
//             <h2 className="text-xl font-bold text-gray-800">{name}</h2>
//             <p className="text-gray-600">
//               <span className="font-semibold">Email:</span> {email}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-semibold">Employee ID:</span> {employeeId}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-semibold">Department:</span> {department}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-semibold">Gender:</span> {gender}
//             </p>
//           </div>
//         </div>
//            );
//   })}
//     </div>
//   );
// };

// export default AdminEmployeeView;
