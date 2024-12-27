"use client"

import { useParams } from 'next/navigation'
import Header from '@/components/layout/header'
import { PropertyGallery } from '@/components/properties/property-gallery'
import { PropertyDetails } from '@/components/properties/property-details'
import { PropertyAmenities } from '@/components/properties/property-amenities'
import { PropertyContact } from '@/components/properties/property-contact'

const properties = [
    {
        id: 1,
        title: "Luxury Villa",
        price: "$1,250,000",
        location: "Downtown Toronto",
        description: "Experience luxury living at its finest in this stunning villa located in the heart of Downtown Toronto. This magnificent property offers breathtaking views of the city skyline and features premium finishes throughout.",
        beds: 4,
        baths: 3,
        sqft: 2500,
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        amenities: [
            "Swimming Pool",
            "Home Theater",
            "Wine Cellar",
            "Smart Home System",
            "Private Elevator",
            "Rooftop Terrace"
        ],
        agent: {
            name: "Sarah Johnson",
            phone: "+1 (416) 555-0123",
            email: "sarah@mydreamhome.com",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
        }
    },
    {
        id: 2,
        title: "Modern Apartment",
        price: "$750,000",
        location: "North York",
        description: "Stunning modern apartment with open concept design and high-end finishes. Perfect for urban professionals seeking luxury and convenience in North York.",
        beds: 2,
        baths: 2,
        sqft: 1200,
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        amenities: [
            "Fitness Center",
            "Concierge Service",
            "Parking Space",
            "Balcony",
            "Pet Friendly",
            "Storage Unit"
        ],
        agent: {
            name: "Michael Chen",
            phone: "+1 (416) 555-0124",
            email: "michael@mydreamhome.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
        }
    },
    {
        id: 3,
        title: "Family Home",
        price: "$950,000",
        location: "Mississauga",
        description: "Beautiful family home in a quiet neighborhood of Mississauga. Features a spacious backyard, modern kitchen, and plenty of natural light throughout.",
        beds: 3,
        baths: 2,
        sqft: 1800,
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        amenities: [
            "Large Backyard",
            "Modern Kitchen",
            "Home Office",
            "Garage",
            "Central AC",
            "Security System"
        ],
        agent: {
            name: "Emily Brown",
            phone: "+1 (416) 555-0125",
            email: "emily@mydreamhome.com",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
        }
    }
];

export default function PropertyPage() {
    const params = useParams();
    const property = properties.find(p => p.id === Number(params.id));

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <main className="min-h-screen">
            <Header
                title={property.title}
                backgroundImage={property.images[0]}
                subtitle={property.location}
            />

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <PropertyGallery images={property.images} />
                        <PropertyDetails property={property} />
                        <PropertyAmenities amenities={property.amenities} />
                    </div>
                    <div>
                        <PropertyContact agent={property.agent} />
                    </div>
                </div>
            </div>
        </main>
    );
} 