



import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom'; // Optional: if using React Router
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toast

interface SignUpFormType {
  Name: string;
  email: string;
  password: string;
  role: string;
}

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpFormType>({
    Name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Form has been submitted successfully', signUpForm);

    try {
      const response = await axios.post("http://localhost:4000/registerUsers", signUpForm);
      if (response.status === 200) {
        toast.success("User successfully registered!"); // Success toast
        console.log("User had been successfully registered", response.data);
      }
    } catch (error) {
      toast.error("Error occurred during form submission!"); // Error toast
      console.error("Error occurred during form submission", error);
    }

    setSignUpForm({
      Name: '',

      email: '',
      password: '',
      role: 'user',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="Name"
              name="Name"
              type="text"
              required
              value={signUpForm.Name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={signUpForm.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={signUpForm.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/logIn" className="font-medium text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>

      {/* Add ToastContainer at the root */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
