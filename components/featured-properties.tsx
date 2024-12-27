"use client"

import { motion } from "framer-motion"

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
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600">Discover our hand-picked selection of premium properties</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property cards will be added here */}
          <div className="text-center text-gray-500">Coming soon...</div>
        </div>
      </div>
    </section>
  )
}