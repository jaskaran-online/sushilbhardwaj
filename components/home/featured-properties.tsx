"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PropertyCard } from "@/components/home/property-card"
import { getFeaturedProperties } from "@/lib/supabase"
import type { Property } from "@/lib/supabase"

export function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProperties() {
      try {
        const data = await getFeaturedProperties()
        setProperties(data)
      } catch (err) {
        setError('Failed to load properties')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadProperties()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md h-[400px] animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-red-600">
          {error}
        </div>
      </section>
    )
  }

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
            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.images?.[0]?.image_url || ''}
              title={property.title}
              price={property.price.toString()}
              location={property.city}
              beds={property.bedrooms}
              baths={property.bathrooms}
              sqft={property.square_feet}
            />
          ))}
        </div>
      </div>
    </section>
  )
}