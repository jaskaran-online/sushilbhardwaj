"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Building2, ArrowRight } from "lucide-react"
import Image from "next/image"
import { getAreas } from "@/lib/supabase"
import type { Area } from "@/lib/supabase"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function AreasWeCover() {
  const [areas, setAreas] = useState<Area[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadAreas() {
      try {
        const data = await getAreas()
        setAreas(data)
      } catch (err) {
        setError('Failed to load areas')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadAreas()
  }, [])

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md h-[300px] animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-red-600">
          {error}
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#1a3668]">Areas We Cover</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover your perfect home in these thriving neighborhoods across the Greater Toronto Area
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {areas.map((area) => (
            <motion.div
              key={area.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image_url}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{area.name}</h3>
                  </div>
                  <span className="flex items-center space-x-1">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-500">{area.properties_count}</span>
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{area.description}</p>

                <button className="flex items-center text-primary font-medium group/btn bg-[#1a3668] text-white hover:bg-[#1a3668]/90 rounded-sm px-4 py-2">
                  View Properties
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}