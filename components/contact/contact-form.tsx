"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function ContactForm() {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyType: 'residential'
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Here you would typically make an API call to your backend
            await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
            toast({
                title: 'Message sent!',
                description: 'We will get back to you as soon as possible.',
                variant: 'default'
            })
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                propertyType: 'residential'
            })
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Something went wrong. Please try again.',
                variant: 'destructive'
            })
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Type
                    </label>
                    <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                    >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        placeholder="Tell us about your property needs..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#2C3E50] text-white py-3 px-6 rounded-md hover:bg-[#2C3E50]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    )
} 