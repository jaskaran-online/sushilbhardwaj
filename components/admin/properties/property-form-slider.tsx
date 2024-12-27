"use client"

import { useState } from 'react'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Property, PropertyStatus, PropertyType } from '@/lib/supabase'

interface PropertyFormSliderProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: Partial<Property>) => Promise<void>
    property?: Property
}

export default function PropertyFormSlider({ isOpen, onClose, onSubmit, property }: PropertyFormSliderProps) {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<Partial<Property>>({
        defaultValues: property || {}
    })

    const onFormSubmit = async (data: Partial<Property>) => {
        try {
            setIsLoading(true)
            await onSubmit(data)
            onClose()
        } catch (error) {
            console.error('Error submitting property:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'
                    }`}
                onClick={onClose}
            />

            {/* Slider */}
            <div className={`absolute top-0 right-0 h-full w-full max-w-2xl bg-white shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold">
                        {property ? 'Edit Property' : 'Add New Property'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onFormSubmit)} className="p-6 overflow-y-auto h-[calc(100%-80px)]">
                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                {...register('title', { required: 'Title is required' })}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter property title"
                            />
                            {errors.title && (
                                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                {...register('description', { required: 'Description is required' })}
                                rows={4}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter property description"
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                            )}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="number"
                                {...register('price', { required: 'Price is required', min: 0 })}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter price"
                            />
                            {errors.price && (
                                <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                            )}
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                {...register('location_address', { required: 'Address is required' })}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter address"
                            />
                            {errors.location_address && (
                                <p className="mt-1 text-sm text-red-600">{errors.location_address.message}</p>
                            )}
                        </div>

                        {/* City, State, Postal Code */}
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    type="text"
                                    {...register('city', { required: 'City is required' })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    placeholder="Enter city"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">State</label>
                                <input
                                    type="text"
                                    {...register('state', { required: 'State is required' })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    placeholder="Enter state"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                                <input
                                    type="text"
                                    {...register('postal_code', { required: 'Postal code is required' })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    placeholder="Enter postal code"
                                />
                            </div>
                        </div>

                        {/* Property Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Property Type</label>
                            <select
                                {...register('property_type', { required: 'Property type is required' })}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            >
                                <option value="">Select type</option>
                                <option value="HOUSE">House</option>
                                <option value="APARTMENT">Apartment</option>
                                <option value="CONDO">Condo</option>
                                <option value="TOWNHOUSE">Townhouse</option>
                                <option value="LAND">Land</option>
                            </select>
                            {errors.property_type && (
                                <p className="mt-1 text-sm text-red-600">{errors.property_type.message}</p>
                            )}
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <select
                                {...register('status', { required: 'Status is required' })}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            >
                                <option value="">Select status</option>
                                <option value="FOR_SALE">For Sale</option>
                                <option value="FOR_RENT">For Rent</option>
                                <option value="SOLD">Sold</option>
                                <option value="RENTED">Rented</option>
                            </select>
                            {errors.status && (
                                <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
                            )}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                                <input
                                    type="number"
                                    {...register('bedrooms', { required: 'Bedrooms is required', min: 0 })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    placeholder="Number of bedrooms"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                                <input
                                    type="number"
                                    {...register('bathrooms', { required: 'Bathrooms is required', min: 0 })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    placeholder="Number of bathrooms"
                                />
                            </div>
                        </div>

                        {/* Square Footage */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Square Feet</label>
                            <input
                                type="number"
                                {...register('square_feet', { required: 'Square feet is required', min: 0 })}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter square feet"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 disabled:opacity-50"
                            >
                                {isLoading ? 'Saving...' : property ? 'Update Property' : 'Create Property'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
} 