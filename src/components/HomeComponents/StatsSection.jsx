import React from "react";
import { motion } from 'motion/react'

const StatsSection = () => {
    const stats = [
        { id: 1, value: "200+", label: "Factories Onboarded" },
        { id: 2, value: "50,000+", label: "Garments Tracked" },
        { id: 3, value: "99.9%", label: "Uptime Guarantee" },
        { id: 4, value: "4.9/5", label: "Customer Satisfaction" },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Trusted by Garment Leaders Worldwide
                </motion.h1>
                <p className="text-gray-500 text-lg mb-14">
                    Join hundreds of factories optimizing their garment production with ThreadOps.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat) => (
                        <motion.div key={stat.id} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition" initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</h3>
                            <p className="text-gray-500 text-sm md:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
