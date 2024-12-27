"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CallToAction() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[dodgerblue] dark:bg-primary/90" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact our expert team today and let us help you find the perfect property
          </p>
          <Button
            size="lg"
            variant="secondary"
            className={cn(
              "bg-background text-foreground hover:bg-background/90",
              "dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/90"
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}