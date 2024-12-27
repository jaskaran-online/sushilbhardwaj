"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Luxury Villa in Beverly Hills',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80',
        description: 'Sold for $12.5M - A stunning 6-bedroom modern villa'
    },
    {
        id: 2,
        title: 'Downtown Penthouse',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        description: 'Sold for $8.2M - 360° city views'
    },
    {
        id: 3,
        title: 'Beachfront Property',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
        description: 'Sold for $15.7M - Private beach access'
    },
    {
        id: 4,
        title: 'Modern Family Home',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        description: 'Sold for $4.5M - Smart home technology'
    },
    {
        id: 5,
        title: 'Historic Mansion',
        image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80',
        description: 'Sold for $18.9M - Fully restored 1920s estate'
    },
    {
        id: 6,
        title: 'Urban Loft',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
        description: 'Sold for $3.2M - Industrial chic design'
    }
]

export function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Success Stories</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Take a look at some of our most prestigious properties and successful transactions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-sm">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-white z-10 bg-black/50 rounded-full p-2"
                                onClick={() => setSelectedProject(null)}
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {projects.find(p => p.id === selectedProject) && (
                                <div>
                                    <div className="relative h-96">
                                        <Image
                                            src={projects.find(p => p.id === selectedProject)!.image}
                                            alt={projects.find(p => p.id === selectedProject)!.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">
                                            {projects.find(p => p.id === selectedProject)!.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {projects.find(p => p.id === selectedProject)!.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
} 