import { motion } from 'framer-motion'
import { useState } from 'react'

interface SearchFilters {
    priceRange: [number, number]
    propertyType: string
    bedrooms: number
    bathrooms: number
    location: string
    minArea: number
    amenities: string[]
}

const propertyTypes = ['Any', 'House', 'Apartment', 'Condo', 'Villa', 'Townhouse']
const amenitiesList = [
    'Swimming Pool',
    'Garden',
    'Garage',
    'Gym',
    'Security System',
    'Air Conditioning',
    'Heating',
    'Balcony'
]

export function PropertySearch() {
    const [filters, setFilters] = useState<SearchFilters>({
        priceRange: [0, 10000000],
        propertyType: 'Any',
        bedrooms: 0,
        bathrooms: 0,
        location: '',
        minArea: 0,
        amenities: []
    })

    const handleFilterChange = (
        key: keyof SearchFilters,
        value: SearchFilters[keyof SearchFilters]
    ) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const handleAmenityToggle = (amenity: string) => {
        setFilters(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }))
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                    <div className="flex items-center space-x-2">
                        <input
                            type="number"
                            value={filters.priceRange[0]}
                            onChange={e =>
                                handleFilterChange('priceRange', [
                                    Number(e.target.value),
                                    filters.priceRange[1]
                                ])
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                            placeholder="Min"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            value={filters.priceRange[1]}
                            onChange={e =>
                                handleFilterChange('priceRange', [
                                    filters.priceRange[0],
                                    Number(e.target.value)
                                ])
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                            placeholder="Max"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select
                        value={filters.propertyType}
                        onChange={e => handleFilterChange('propertyType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                    >
                        {propertyTypes.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <select
                        value={filters.bedrooms}
                        onChange={e => handleFilterChange('bedrooms', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                    >
                        <option value={0}>Any</option>
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>
                                {num}+
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                    <select
                        value={filters.bathrooms}
                        onChange={e => handleFilterChange('bathrooms', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                    >
                        <option value={0}>Any</option>
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>
                                {num}+
                            </option>
                        ))}
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                        type="text"
                        value={filters.location}
                        onChange={e => handleFilterChange('location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        placeholder="Enter location"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Minimum Area (sq ft)
                    </label>
                    <input
                        type="number"
                        value={filters.minArea}
                        onChange={e => handleFilterChange('minArea', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        placeholder="Min area"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {amenitiesList.map(amenity => (
                        <label
                            key={amenity}
                            className="flex items-center space-x-2 text-sm cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={filters.amenities.includes(amenity)}
                                onChange={() => handleAmenityToggle(amenity)}
                                className="rounded border-gray-300 text-[#2C3E50] focus:ring-[#2C3E50]"
                            />
                            <span>{amenity}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    onClick={() => {
                        // Handle search
                        console.log('Search with filters:', filters)
                    }}
                    className="bg-[#2C3E50] text-white px-6 py-2 rounded-md hover:bg-[#2C3E50]/90 transition-colors"
                >
                    Search Properties
                </button>
            </div>
        </motion.div>
    )
} 