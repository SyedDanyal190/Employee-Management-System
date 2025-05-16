import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'; // Uncomment if you're using React Router

import { useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toast
import { jwtDecode }  from "jwt-decode";




const LogIn: React.FC = () => {
  interface LogInFormType {
    email: string;
    password: string;
  }

  const [loginForm, setLoginForm] = useState<LogInFormType>({
    email: '',
    password: '',
  });


const navigate = useNavigate();


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:4000/logInUsers", loginForm);
//       if (response.status === 200) {
//         const { token } = response.data;
//         localStorage.setItem("token", token);
//        toast.success("User login successfully");
//         console.log("Login successful");
//       }
//     } catch (error: any) {
//           toast.error("Error occurred during LogIn submission!"); // Error toast
//       console.error("Error during login:", error.response?.data || error.message);



//     setLoginForm({
//       email: '',
//       password: '',
//     });
//   };
// };



const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:4000/logInUsers", loginForm);
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      toast.success("User login successfully");

      const decoded: any = jwtDecode(token); // type `any` for quick testing
      console.log("Decoded token:", decoded);

      // Redirect based on role
      if (decoded.role === "admin") {
        navigate("/adminDashboard");
      } else if (decoded.role === "user") {
        navigate("/userDashboard");
      }

      // Optionally reset form
      setLoginForm({ email: '', password: '' });
    }
  } catch (error: any) {
    toast.error("Error occurred during LogIn submission!");
    console.error("Error during login:", error.response?.data || error.message);

    setLoginForm({
      email: '',
      password: '',
    });
  }
};



const token = localStorage.getItem('token');
if (token) {
  try {

const decoded = jwtDecode(token); 
    console.log("User role:", decoded); // "admin" or "user"
  } catch (error) {
    console.error("Invalid token:", error);
  }
}

  return (
    <>

       <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
           <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={handleChange}
                  value={loginForm.email}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={loginForm.password}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Added Sign In link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account yet?{' '}
            {/* If you're using React Router: */}
            {/* <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">Sign In</Link> */}
            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      {/* </div> */}
       <ToastContainer />
       </div>
   
  
    </>
  );
};

export default LogIn;
