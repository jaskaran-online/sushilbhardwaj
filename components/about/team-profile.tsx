"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
    {
        name: 'Sarah Johnson',
        role: 'Senior Real Estate Agent',
        image: '/images/team/sarah.jpg',
        specialization: 'Luxury Properties',
        experience: '12 years'
    },
    {
        name: 'Michael Chen',
        role: 'Property Consultant',
        image: '/images/team/michael.jpg',
        specialization: 'Commercial Real Estate',
        experience: '8 years'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Interior Design Specialist',
        image: '/images/team/emily.jpg',
        specialization: 'Home Staging',
        experience: '10 years'
    },
    {
        name: 'David Kim',
        role: 'Market Analyst',
        image: '/images/team/david.jpg',
        specialization: 'Investment Properties',
        experience: '15 years'
    }
]

export function TeamProfile() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our experienced team of real estate professionals is dedicated to helping you achieve
                        your property goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-80 w-full overflow-hidden rounded-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-200">{member.role}</p>
                                <div className="mt-2 text-sm">
                                    <p>Specialization: {member.specialization}</p>
                                    <p>Experience: {member.experience}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 