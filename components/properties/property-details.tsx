"use client"

import { motion } from 'framer-motion'
import { Bed, Bath, Square, MapPin } from 'lucide-react'
import type { Property } from '@/lib/supabase'

interface PropertyDetailsProps {
    property: Property
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
    // Format price to currency string
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(property.price)

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
                        <span>{property.location_address}, {property.city}</span>
                    </div>
                </div>
                <div className="text-2xl font-bold text-primary">{formattedPrice}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                    <Bed className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                    <Bath className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center">
                    <Square className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{property.square_feet} sqft</span>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {property.year_built && (
                <div className="mt-4 pt-4 border-t">
                    <h2 className="text-xl font-semibold mb-2">Additional Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-gray-600">Year Built:</span>
                            <span className="ml-2 font-medium">{property.year_built}</span>
                        </div>
                        {property.lot_size && (
                            <div>
                                <span className="text-gray-600">Lot Size:</span>
                                <span className="ml-2 font-medium">{property.lot_size} sqft</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    )
} 