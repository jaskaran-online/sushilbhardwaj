"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "@/components/home/property-card"

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Luxury Villa",
    price: "$1,250,000",
    location: "Downtown Toronto",
    beds: 4,
    baths: 3,
    sqft: 2500
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Modern Apartment",
    price: "$750,000",
    location: "North York",
    beds: 2,
    baths: 2,
    sqft: 1200
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Family Home",
    price: "$950,000",
    location: "Mississauga",
    beds: 3,
    baths: 2,
    sqft: 1800
  }
]

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1a3668]">Featured Properties</h2>
          <p className="text-gray-600">Discover our hand-picked selection of premium properties</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}