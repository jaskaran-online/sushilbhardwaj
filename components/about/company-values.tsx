"use client"

import { motion } from 'framer-motion'
import { Award, CheckCircleIcon, Lightbulb, Shield, Users } from 'lucide-react'

const values = [
    {
        title: 'Integrity',
        description: 'We conduct our business with the highest standards of professional behavior and ethics.',
        icon: <Shield className="h-10 w-10 mx-auto text-white" />
    },
    {
        title: 'Excellence',
        description: 'We strive to exceed expectations and deliver outstanding results for our clients.',
        icon: <Award className="h-10 w-10 mx-auto text-white" />
    },
    {
        title: 'Innovation',
        description: 'We embrace new technologies and ideas to provide cutting-edge real estate solutions.',
        icon: <Lightbulb className="h-10 w-10 mx-auto text-white" />
    },
    {
        title: 'Client-Focused',
        description: 'Your dreams and goals are at the center of everything we do.',
        icon: <Users className="h-10 w-10 mx-auto text-white" />
    }
]

export function CompanyValues() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our mission is to help every client find their perfect home while providing exceptional
                        service and expertise throughout the entire real estate journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="h-20 w-20 bg-[#2C3E50] rounded-full flex items-center justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 