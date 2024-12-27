"use client"

import { motion } from 'framer-motion'

export function GoogleMap() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203640542!2d-118.40262108478713!3d34.0736299806006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="My Dream Home Office Location"
                    className="absolute inset-0"
                />
            </div>
        </motion.section>
    )
} 