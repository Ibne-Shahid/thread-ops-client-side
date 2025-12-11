import React from 'react'
import { motion } from 'motion/react' 
import { Link } from 'react-router'
import useAuth from '../../Hooks/useAuth'

const Hero = () => {
  const {firebaseUser} = useAuth()
  return (
    <div className="relative w-full md:h-[50vh] lg:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-8 space-y-6">
        
       
        <motion.h1
          className="text-xl md:text-4xl font-extrabold tracking-tight uppercase md:mt-24"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 1 }}
        >
          Effortless Garment Management at Your Fingertips
        </motion.h1>
        
       
        <motion.p
          className="md:text-xl max-w-lg"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 1, delay: 0.3 }}
        >
          Streamline your garment production and inventory management with our advanced platform.
        </motion.p>

       
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to={!firebaseUser ? "/login" : "/dashboard"}
            className="btn btn-primary text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-warning-focus transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/all-products"
            className="btn btn-secondary text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-primary-focus transition-all duration-300"
          >
            View Collection
          </Link>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Hero
