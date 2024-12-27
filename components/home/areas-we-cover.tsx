"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, ArrowRight } from "lucide-react"
import Image from "next/image"

const areas = [
  {
    name: "Downtown Toronto",
    properties: 150,
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80",
    description: "Luxury condos and modern apartments in the heart of the city"
  },
  {
    name: "North York",
    properties: 89,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80",
    description: "Family-friendly neighborhoods with excellent schools"
  },
  {
    name: "Scarborough",
    properties: 76,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    description: "Diverse communities with beautiful natural surroundings"
  },
  {
    name: "Etobicoke",
    properties: 65,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    description: "Waterfront properties and peaceful suburban living"
  },
  {
    name: "Mississauga",
    properties: 92,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
    description: "Modern urban development with great amenities"
  },
  {
    name: "Markham",
    properties: 45,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    description: "Tech hub with contemporary housing options"
  },
]

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
              key={area.name}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-sm bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image}
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
                    <span className="text-gray-500">{area.properties}</span>
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{area.description}</p>

                <button className="flex items-center text-primary font-medium group/btn bg-[#1a3668] text-white hover:bg-[#1a3668]/90 rounded-sm  px-4 py-2">
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