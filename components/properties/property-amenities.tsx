"use client"

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PropertyAmenitiesProps {
    amenities: string[]
}

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                    <motion.div
                        key={amenity}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
} 