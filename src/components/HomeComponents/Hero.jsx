import React from 'react'
import { motion } from 'motion/react' // Correct import for motion/react

const Hero = () => {
  return (
    <div className="relative w-full md:h-[50vh] lg:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-8 space-y-6">
        
        {/* Animated Heading */}
        <motion.h1
          className="text-xl md:text-4xl font-extrabold tracking-tight uppercase md:mt-24"
          initial={{ opacity: 0, y: -50 }} // Start from above and invisible
          animate={{ opacity: 1, y: 0 }}   // End at normal position with full opacity
          transition={{ duration: 1 }}
        >
          Effortless Garment Management at Your Fingertips
        </motion.h1>
        
        {/* Animated Paragraph */}
        <motion.p
          className="md:text-xl max-w-lg"
          initial={{ opacity: 0, y: 20 }} // Start from below and invisible
          animate={{ opacity: 1, y: 0 }}   // End at normal position with full opacity
          transition={{ duration: 1, delay: 0.3 }}
        >
          Streamline your garment production and inventory management with our advanced platform.
        </motion.p>

        {/* Animated Button Container */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 30 }} // Start from below and invisible
          animate={{ opacity: 1, y: 0 }}   // End at normal position with full opacity
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#get-started"
            className="btn btn-primary text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-warning-focus transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="#sell"
            className="btn btn-secondary text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-primary-focus transition-all duration-300"
          >
            View Collection
          </a>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Hero
