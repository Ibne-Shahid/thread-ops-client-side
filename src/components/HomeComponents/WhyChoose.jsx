import React from "react";
import { motion } from 'motion/react'

const WhyChoose = () => {
    return (
        <div className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <motion.h1 className="text-4xl md:text-5xl font-extrabold text-gray-900" initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ThreadOps?</span>
                    </motion.h1>
                    <p className="mt-4 text-gray-500 text-lg">
                        A powerful garment management platform designed for speed, accuracy & growth.
                    </p>
                </div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}>

                    <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition bg-base-200">
                        <div className="text-blue-600 text-4xl mb-4">
                            📊
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Real-Time Monitoring</h3>
                        <p className="mt-2 text-gray-500">
                            Track production, orders, and inventory with up-to-the-minute accuracy.
                        </p>
                    </div>

                    <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition bg-base-200">
                        <div className="text-blue-600 text-4xl mb-4">
                            ⚡
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Lightning Fast Workflow</h3>
                        <p className="mt-2 text-gray-500">
                            Reduce manual errors and speed up your entire garment operation.
                        </p>
                    </div>

                    <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition bg-base-200">
                        <div className="text-blue-600 text-4xl mb-4">
                            🔐
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Secure & Reliable</h3>
                        <p className="mt-2 text-gray-500">
                            Enterprise-grade data protection with 99.9% uptime guarantee.
                        </p>
                    </div>

                    <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition bg-base-200">
                        <div className="text-blue-600 text-4xl mb-4">
                            🏭
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Built for Factories</h3>
                        <p className="mt-2 text-gray-500">
                            Designed specifically for garment manufacturers & production teams.
                        </p>
                    </div>

                    <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition bg-base-200">
                        <div className="text-blue-600 text-4xl mb-4">
                            🤝
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Easy Team Collaboration</h3>
                        <p className="mt-2 text-gray-500">
                            Seamlessly connect managers, QC teams, merchandisers & workers.
                        </p>
                    </div>

                    <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition bg-base-200">
                        <div className="text-blue-600 text-4xl mb-4">
                            📈
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Insights That Matter</h3>
                        <p className="mt-2 text-gray-500">
                            Powerful analytics to help you make faster, smarter decisions.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default WhyChoose;
