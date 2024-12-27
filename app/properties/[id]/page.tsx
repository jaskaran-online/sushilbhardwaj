"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/layout/header'
import { PropertyGallery } from '@/components/properties/property-gallery'
import { PropertyDetails } from '@/components/properties/property-details'
import { PropertyAmenities } from '@/components/properties/property-amenities'
import { PropertyContact } from '@/components/properties/property-contact'
import { getPropertyById } from '@/lib/supabase'
import type { Property } from '@/lib/supabase'

export default function PropertyPage() {
    const params = useParams()
    const [property, setProperty] = useState<Property | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadProperty() {
            try {
                const data = await getPropertyById(params.id as string)
                setProperty(data)
            } catch (err) {
                setError('Failed to load property details')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        loadProperty()
    }, [params.id])

    if (isLoading) {
        return (
            <main className="min-h-screen">
                <div className="h-[400px] bg-gray-200 animate-pulse" />
                <div className="container mx-auto px-4 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="h-[500px] bg-gray-200 animate-pulse mb-8 rounded-lg" />
                            <div className="bg-gray-200 animate-pulse h-64 mb-8 rounded-lg" />
                            <div className="bg-gray-200 animate-pulse h-48 rounded-lg" />
                        </div>
                        <div>
                            <div className="bg-gray-200 animate-pulse h-[600px] rounded-lg" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    if (error || !property) {
        return (
            <main className="min-h-screen">
                <div className="container mx-auto px-4 py-12 text-center text-red-600">
                    {error || 'Property not found'}
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen">
            <Header
                title={property.title}
                backgroundImage={property.images?.[0]?.image_url}
                subtitle={property.city}
            />

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <PropertyGallery images={property.images?.map(img => img.image_url) || []} />
                        <PropertyDetails property={property} />
                        <PropertyAmenities amenities={property.amenities?.map(a => a.name) || []} />
                    </div>
                    <div>
                        <PropertyContact agent={property.agent!} propertyId={property.id} />
                    </div>
                </div>
            </div>
        </main>
    )
} 