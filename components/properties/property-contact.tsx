"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

interface PropertyContactProps {
    agent: {
        name: string
        phone: string
        email: string
        image: string
    }
}

export function PropertyContact({ agent }: PropertyContactProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 sticky top-4"
        >
            <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover rounded-full"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                <p className="text-gray-600">Real Estate Agent</p>
            </div>

            <div className="space-y-4 mb-6 w-full">
                <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors text-center mx-auto"
                >
                    <Phone className="w-5 h-5" />
                    <span>{agent.phone}</span>
                </a>
                <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors text-center mx-auto"
                >
                    <Mail className="w-5 h-5" />
                    <span>{agent.email}</span>
                </a>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    )
} 