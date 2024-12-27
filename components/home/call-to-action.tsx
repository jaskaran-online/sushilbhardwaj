"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our expert team today and let us help you find the perfect property
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="mr-2 h-4 w-4" />
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}