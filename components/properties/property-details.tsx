"use client"

import { motion } from 'framer-motion'
import { Bed, Bath, Square, MapPin } from 'lucide-react'

interface PropertyDetailsProps {
    property: {
        title: string
        price: string
        location: string
        description: string
        beds: number
        baths: number
        sqft: number
    }
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                    <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.location}</span>
                    </div>
                </div>
                <div className="text-2xl font-bold text-primary">{property.price}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                    <Bed className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center">
                    <Bath className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center">
                    <Square className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{property.sqft} sqft</span>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>
        </motion.div>
    )
} 