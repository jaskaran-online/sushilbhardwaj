"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  image: string
  title: string
  price: string
  location: string
  beds: number
  baths: number
  sqft: number
}

export function PropertyCard({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">{price}</p>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex justify-between text-gray-500 mb-4">
          <span className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {beds} beds
          </span>
          <span className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {baths} baths
          </span>
          <span className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {sqft} sqft
          </span>
        </div>
        <Button className="w-full">View Details</Button>
      </div>
    </motion.div>
  )
}