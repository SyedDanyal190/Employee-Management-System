import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toast

interface DepartForm {
  name: string,
  description:string,
}

const AddDepartment: React.FC = () => {

  const [departForm, setdepartForm] = useState<DepartForm>({
    name: '',
   description: '',
  });



const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  
    const { name, value} = e.target as HTMLInputElement;
   console.log(`Name  is  ${name} and value is  ${value}`)

     setdepartForm((prev)=>({
       ...prev,
       [name ]: value,
     }))

  };


const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
try {
    const response =  await  axios.post("http://localhost:4000/admin/addepartment",departForm);
    if(response.status === 200){
       toast.success("Department added  successFully ");    
           console.log("Department added  successfully ", response.data);
    

          }
     setdepartForm({
      name :"",
      description:"",
     })     
          
} catch (error) {
      console.error("Error  occur during Department adding");
}
}




  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-md rounded p-8 mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Department  Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={departForm.name}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        
        {/* Description */}
    <div>
  <label className="block mb-1 font-medium">Description</label>
  <textarea
    name="description"
 onChange={handleChange}
    value={departForm.description}
    rows={5} // You can adjust the height with this
    className="w-full border border-gray-300 p-2 rounded resize-y"
  />
</div>

       
      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full text-lg"  
        >
          Submit
        </button>
      </div>
</div>
    <ToastContainer />

    </form>
  );
}

export default AddDepartment