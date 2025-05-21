import axios from 'axios';
import React, { ChangeEvent, FormEvent, HTMLElementType, HtmlHTMLAttributes, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



interface Dept {
    name  :string,
}



const EditDepartmentForm : React.FC = () => {


const { id} =  useParams();
const  navigate =  useNavigate();

const [editForm , setEditForm] =  useState<Dept>({
     name :"",  
     })

// useEffect(()=>{
//     fetchingFormData()   
// },[id])



// const fetchingFormData  =  async()=>{
//     try {
//       const response  =  await  axios.get(`http://localhost:4000/admin/getdepartment/${id}`);
//         setEditForm(response.data.data);  
//     } catch (error) {
//         console.error("Error of  gwtting department data");
//     }
// }



useEffect(() => {
  if (id) {
    fetchingFormData();
  }
}, [id]);

const fetchingFormData = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/admin/getdepartment/${id}`);
    setEditForm(response.data.data);
  } catch (error) {
    console.error("Error of getting department data");
  }
};




const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   const { name  , value} =  e.target;

   setEditForm((prev)=>({
     ...prev,
     [name] : value
   }))
}


const handleSubmit  = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
      try {
        
        const response =  await  axios.put(`http://localhost:4000/admin/editdepartment/${id}`,editForm);
          setEditForm(response.data.data);
        toast.success("Department form  updated  successFully")
   setTimeout(()=>{
        navigate('/adminDashboard/departments');
   },1000)
      } catch (error) {
        console.error("Error  Occur  ")
        toast.error("Failed to  updated  department form");
    }

}





 return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-md rounded p-8 mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Edit  Department </h2>




     
        {/* Department Name */}
        <div>
          <label className="block mb-1 font-medium">Department</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={editForm.name}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
    
    


      {/* Submit Button */}
<div className="mt-8 text-center">
  <button
    type="submit"
    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full text-lg"
  >
    Update DepartmentForm Form 
  </button>
</div>


    <ToastContainer />

    </form>
  );
}

export default EditDepartmentForm