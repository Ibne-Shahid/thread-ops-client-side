import React from 'react'
import { FaChartLine, FaTasks, FaUpload, FaUsers } from "react-icons/fa";
import { motion } from 'motion/react'

const HowItWorks = () => {
    return (
        <div className="py-16 px-10">
            <div className="text-center mb-12">
                <motion.h1 className="text-4xl text-center font-bold mb-10" initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>How ThreadOps Works</motion.h1>
                <motion.p initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }} className="text-lg text-gray-500 mt-4">A simple 4-step process to streamline your garment management needs</motion.p>
            </div>

            <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}>

                <div className="card w-full shadow-lg rounded-lg p-6">
                    <div className="card-body text-center">
                        <div className="text-4xl mx-auto text-secondary mb-4">
                            <FaUsers />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-300">Sign Up & Login</h3>
                        <p className="text-gray-600 mt-2">Easily create an account or log in to your existing account.</p>
                    </div>
                </div>

                <div className="card w-full shadow-lg rounded-lg p-6">
                    <div className="card-body text-center">
                        <div className="text-4xl mx-auto text-secondary mb-4">
                            <FaUpload />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-300">Upload Garment Details</h3>
                        <p className="text-gray-600 mt-2">Add new garment information easily, from fabrics to designs.</p>
                    </div>
                </div>

                <div className="card w-full shadow-lg rounded-lg p-6">
                    <div className="card-body text-center">
                        <div className="text-4xl mx-auto text-secondary mb-4">
                            <FaTasks />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-300">Manage Orders</h3>
                        <p className="text-gray-600 mt-2">Track your garment orders and stay on top of deadlines.</p>
                    </div>
                </div>

                <div className="card w-full shadow-lg rounded-lg p-6">
                    <div className="card-body text-center">
                        <div className="text-4xl mx-auto text-secondary mb-4">
                            <FaChartLine />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-300">Track & Analyze</h3>
                        <p className="text-gray-600 mt-2">Analyze garment performance with real-time data insights.</p>
                    </div>
                </div>

            </motion.div>
        </div >
    )
}

export default HowItWorks;
