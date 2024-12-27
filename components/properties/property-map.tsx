"use client"

import { motion } from 'framer-motion'

export function PropertyMap() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-24 h-[calc(100vh-8rem)]"
        >
            <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                <div className="relative h-full rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52898.91872613861!2d-118.40262108478713!3d34.0736299806006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Property Locations"
                        className="absolute inset-0"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Map View</h3>
                        <p className="text-gray-600 text-sm">
                            Click on markers to view property details. Drag to explore different areas.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 