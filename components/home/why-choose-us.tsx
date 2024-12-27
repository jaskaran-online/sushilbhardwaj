"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Heart, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted Agency",
    description: "Over 10 years of experience in real estate with thousands of satisfied clients.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you with any queries.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "We understand your needs and provide tailored solutions for your dream home.",
  },
  {
    icon: Award,
    title: "Best Deals",
    description: "Access to exclusive properties and competitive prices in the market.",
  },
]

export function WhyChooseUs() {
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
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">Discover what makes us the best choice for your real estate needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-[#1a3668]" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-gray-600 text-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}