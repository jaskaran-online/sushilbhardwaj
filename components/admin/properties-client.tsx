"use client"

import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { Property } from '@/lib/supabase'
import PropertyFormSlider from './properties/property-form-slider'

export default function AdminPropertiesClient() {
    const [properties, setProperties] = useState<Property[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [selectedProperty, setSelectedProperty] = useState<Property | undefined>(undefined)

    // Fetch properties
    useEffect(() => {
        fetchProperties()
    }, [])

    async function fetchProperties() {
        try {
            setIsLoading(true)
            const { data, error } = await supabase
                .from('properties')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            setProperties(data || [])
        } catch (error) {
            console.error('Error fetching properties:', error)
            setError('Failed to load properties')
        } finally {
            setIsLoading(false)
        }
    }

    // Create property
    async function handleCreateProperty(data: Partial<Property>) {
        try {
            const { error } = await supabase
                .from('properties')
                .insert([data])

            if (error) throw error
            fetchProperties()
        } catch (error) {
            console.error('Error creating property:', error)
            throw error
        }
    }

    // Update property
    async function handleUpdateProperty(data: Partial<Property>) {
        if (!selectedProperty?.id) return

        try {
            const { error } = await supabase
                .from('properties')
                .update(data)
                .eq('id', selectedProperty.id)

            if (error) throw error
            fetchProperties()
        } catch (error) {
            console.error('Error updating property:', error)
            throw error
        }
    }

    // Delete property
    async function handleDeleteProperty(id: number) {
        if (!confirm('Are you sure you want to delete this property?')) return

        try {
            const { error } = await supabase
                .from('properties')
                .delete()
                .eq('id', id)

            if (error) throw error
            fetchProperties()
        } catch (error) {
            console.error('Error deleting property:', error)
        }
    }

    // Open form for editing
    function handleEdit(property: Property) {
        setSelectedProperty(property)
        setIsFormOpen(true)
    }

    // Open form for creating
    function handleCreate() {
        setSelectedProperty(undefined)
        setIsFormOpen(true)
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
                <button
                    onClick={fetchProperties}
                    className="mt-4 text-primary hover:underline"
                >
                    Try again
                </button>
            </div>
        )
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Properties</h1>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                >
                    <Plus className="w-4 h-4" />
                    Add Property
                </button>
            </div>

            {/* Properties Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Property
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {properties.map((property) => (
                            <tr key={property.id}>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            {property.title}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {property.location_address}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">
                                        ${property.price.toLocaleString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${property.status === 'FOR_SALE' ? 'bg-green-100 text-green-800' :
                                        property.status === 'FOR_RENT' ? 'bg-blue-100 text-blue-800' :
                                            property.status === 'SOLD' ? 'bg-gray-100 text-gray-800' :
                                                'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {property.status.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">
                                        {property.property_type}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button
                                        onClick={() => handleEdit(property)}
                                        className="text-primary hover:text-primary/80"
                                    >
                                        <Pencil className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProperty(property.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {properties.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No properties found
                    </div>
                )}
            </div>

            {/* Form Slider */}
            <PropertyFormSlider
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false)
                    setSelectedProperty(undefined)
                }}
                onSubmit={selectedProperty ? handleUpdateProperty : handleCreateProperty}
                property={selectedProperty}
            />
        </div>
    )
} 