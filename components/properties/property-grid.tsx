"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Property {
    id: number
    title: string
    price: number
    location: string
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    amenities: string[]
    isFavorite: boolean
}

const sampleProperties: Property[] = [
    {
        id: 1,
        title: 'Modern Luxury Villa',
        price: 2500000,
        location: 'Beverly Hills, CA',
        image: '/images/properties/villa-1.jpg',
        bedrooms: 5,
        bathrooms: 4,
        area: 4500,
        amenities: ['Swimming Pool', 'Garden', 'Garage'],
        isFavorite: false
    },
    {
        id: 2,
        title: 'Downtown Penthouse',
        price: 1800000,
        location: 'Los Angeles, CA',
        image: '/images/properties/penthouse-1.jpg',
        bedrooms: 3,
        bathrooms: 2,
        area: 2800,
        amenities: ['Balcony', 'Gym', 'Security'],
        isFavorite: false
    },
    // Add more sample properties as needed
]

export function PropertyGrid() {
    const [properties, setProperties] = useState<Property[]>(sampleProperties)
    const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest')

    const toggleFavorite = (propertyId: number) => {
        setProperties(prev =>
            prev.map(property =>
                property.id === propertyId
                    ? { ...property, isFavorite: !property.isFavorite }
                    : property
            )
        )
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(price)
    }

    const sortProperties = (properties: Property[]) => {
        switch (sortBy) {
            case 'price-asc':
                return [...properties].sort((a, b) => a.price - b.price)
            case 'price-desc':
                return [...properties].sort((a, b) => b.price - a.price)
            case 'newest':
            default:
                return properties
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    {properties.length} Properties Found
                </h2>
                <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as typeof sortBy)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                >
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortProperties(properties).map((property, index) => (
                    <motion.div
                        key={property.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="relative h-64">
                            <Image
                                src={property.image}
                                alt={property.title}
                                fill
                                className="object-cover"
                            />
                            <button
                                onClick={() => toggleFavorite(property.id)}
                                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                <svg
                                    className={`w-6 h-6 ${property.isFavorite ? 'text-red-500' : 'text-gray-400'
                                        }`}
                                    fill={property.isFavorite ? 'currentColor' : 'none'}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                            <p className="text-2xl font-bold text-[#2C3E50] mb-4">
                                {formatPrice(property.price)}
                            </p>
                            <p className="text-gray-600 mb-4">{property.location}</p>
                            <div className="flex justify-between text-gray-600 mb-4">
                                <span>{property.bedrooms} Beds</span>
                                <span>{property.bathrooms} Baths</span>
                                <span>{property.area} sq ft</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {property.amenities.map(amenity => (
                                    <span
                                        key={amenity}
                                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                    >
                                        {amenity}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
} 