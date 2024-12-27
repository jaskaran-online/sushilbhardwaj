"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const areas = [
  { name: "Downtown Toronto", properties: 150 },
  { name: "North York", properties: 89 },
  { name: "Scarborough", properties: 76 },
  { name: "Etobicoke", properties: 65 },
  { name: "Mississauga", properties: 92 },
  { name: "Markham", properties: 45 },
]

export function AreasWeCover() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-gray-600">Explore properties in these popular locations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">{area.name}</h3>
                </div>
                <span className="text-sm text-gray-500">{area.properties} properties</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}