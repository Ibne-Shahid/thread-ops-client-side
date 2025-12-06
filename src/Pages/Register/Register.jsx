import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const Register = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { registerUser, updateUser, setUser } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleRegistration = (data) => {

    if (!data.photoURL) {
      data.photoURL = "https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
    }
    registerUser(data.email, data.password)
      .then(result => {
        const user = result.user
        updateUser({ displayName: data.displayName, photoURL: data.photoURL })
          .then(() => {
            setUser({ ...user, displayName: data.displayName, photoURL: data.photoURL })
          })
          .catch((error) => {
            setUser(user)
          })
        reset()
        toast.success('Registration Successful!')
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch(err => {
        const errorMessage = err.message

        toast.error(errorMessage)
      })
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register("displayName", { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder='Enter your name'
            />
            {errors.displayName?.type === "required" && (<p role='alert' className='text-red-500'>Name is Required</p>)}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder='Enter your email'
            />
            {errors.email?.type === "required" && (<p role='alert' className='text-red-500'>Email is Required</p>)}
          </div>

          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
            <input
              type="url"
              {...register("photoURL")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder='Enter your Photo URL'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              {...register('role')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              defaultValue="buyer"
            >
              <option value="buyer">Buyer</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <input
              {...register('status')}
              type="text"
              value="Pending"
              disabled
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  message: "Password must contain both uppercase and lowercase letters"
                }
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Create a strong password"
            />
            {errors.password && <p role='alert' className='text-red-500'>{errors.password.message}</p>}

          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md"
          >
            Register
          </button>
          <p className='my-2 text-center'>Or</p>
          <button className="btn w-full bg-secondary text-black border-[#e5e5e5] rounded-md">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#6BB4FF"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
