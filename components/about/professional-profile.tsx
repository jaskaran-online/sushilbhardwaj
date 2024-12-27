"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ProfessionalProfile() {
    const achievements = [
        'Over 20 years of real estate experience',
        'Top 1% of realtors in the region',
        'Certified Luxury Home Marketing Specialist',
        'Over $500M in successful transactions'
    ]

    return (
        <section className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <Image
                        src="/images/profile.jpg"
                        alt="Sushil Bhardwaj"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Sushil Bhardwaj</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        With over two decades of experience in luxury real estate, I specialize in helping clients
                        find their perfect dream home. My commitment to excellence and personalized service has
                        earned me a reputation as one of the most trusted names in real estate.
                    </p>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Highlights</h2>
                        <ul className="space-y-3">
                            {achievements.map((achievement, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center text-gray-700"
                                >
                                    <span className="h-2 w-2 bg-[#E74C3C] rounded-full mr-3" />
                                    {achievement}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    )
} 