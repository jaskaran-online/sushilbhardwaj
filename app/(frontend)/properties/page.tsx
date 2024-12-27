import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import { PropertySearch } from '@/components/properties/property-search'
import { PropertyGrid } from '@/components/properties/property-grid'
import { PropertyMap } from '@/components/properties/property-map'

export const metadata: Metadata = {
    title: 'Properties',
    description: 'Browse our curated selection of premium properties',
}

export default function PropertiesPage() {
    return (
        <>
            <Header
                title="Our Properties"
                backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
                subtitle="Find your perfect home from our carefully selected properties"
            />
            <div className="container mx-auto px-4 py-12">
                <PropertySearch />
                <div className="grid lg:grid-cols-2 gap-8 mt-8">
                    <PropertyGrid />
                    <PropertyMap />
                </div>
            </div>
        </>
    )
} 