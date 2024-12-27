import { Metadata } from 'next'
import { PropertySearch } from '@/components/properties/property-search'
import { PropertyGrid } from '@/components/properties/property-grid'
import { PropertyMap } from '@/components/properties/property-map'

export const metadata: Metadata = {
    title: 'Search Properties | My Dream Home',
    description: 'Search for your dream home with our advanced property search tools.',
}

export default function PropertiesPage() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Find Your Dream Home</h1>
                <PropertySearch />
                <div className="grid lg:grid-cols-2 gap-8 mt-8">
                    <PropertyGrid />
                    <PropertyMap />
                </div>
            </div>
        </main>
    )
} 