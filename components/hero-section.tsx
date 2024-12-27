"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the perfect property from our extensive collection of homes,
            apartments, and luxury estates.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
            <Input
              type="text"
              placeholder="Enter location, property type, or keywords..."
              className="flex-grow"
            />
            <Button size="lg" className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search Properties
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}