"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Square, MapPin } from "lucide-react"

interface PropertyCardProps {
  id: number
  image: string
  title: string
  price: string
  location: string
  beds: number
  baths: number
  sqft: number
}

export function PropertyCard({
  id,
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
}: PropertyCardProps) {
  return (
    <Link href={`/properties/${id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}