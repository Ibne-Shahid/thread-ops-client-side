import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router'
import useAuth from '../../Hooks/useAuth'
import { toast } from 'react-toastify'
import useAxiosSecure from '../../Hooks/useAxiosSecure'

const Login = () => {

  const { register, handleSubmit } = useForm()
  const { signInUser, googleSignIn, setFirebaseUser } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then(result => {
        const user = result.user
        toast.success(`Login Successful. Welcome ${user?.displayName}`)
        navigate(`${location.state ? location.state : "/"}`, { replace: true })
      })
      .catch(err => {
        const errorMessage = err.message

        toast.error(errorMessage)
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
        const user = result.user

        const saveUser = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "buyer",
          status: "pending",
        };

        await axiosSecure.post("/users", saveUser);

        setFirebaseUser(user)
        toast.success(`Login Successful. Welcome ${user?.displayName}`)
        navigate(`${location.state ? location.state : "/"}`, { replace: true })
      })
      .catch((err) => {
        const errorMessage = err.message

        toast.error(errorMessage)
      })
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <p className='mb-2'>Forget Password?</p>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md cursor-pointer"
          >
            Log In
          </button>
          <p className='my-2 text-center'>Or</p>

        </form>
        <button onClick={handleGoogleSignIn} className="btn w-full bg-secondary text-black border-[#e5e5e5] rounded-md cursor-pointer">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#6BB4FF"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account? <Link state={location.state ? location.state : "/"} to="/register" className="text-primary hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
