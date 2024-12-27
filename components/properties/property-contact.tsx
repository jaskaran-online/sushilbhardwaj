"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import type { Agent } from '@/lib/supabase'
import { createContactInquiry } from '@/lib/supabase'
import { useState } from 'react'

interface PropertyContactProps {
    agent: Agent
    propertyId?: string
}

export function PropertyContact({ agent, propertyId }: PropertyContactProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            await createContactInquiry({
                name: formData.name,
                email: formData.email,
                phone: formData.phone || null,
                message: formData.message,
                agent_id: agent.id,
                property_id: propertyId || null
            })
            setSubmitStatus('success')
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            console.error('Failed to submit inquiry:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 sticky top-4"
        >
            <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                        src={agent.image_url}
                        alt={agent.name}
                        fill
                        className="object-cover rounded-full"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                <p className="text-gray-600">Real Estate Agent</p>
                {agent.specialization && (
                    <p className="text-sm text-gray-500 mt-1">{agent.specialization}</p>
                )}
            </div>

            <div className="space-y-4 mb-6">
                <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    <span>{agent.phone}</span>
                </a>
                <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    <span>{agent.email}</span>
                </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Phone (optional)
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>

                {submitStatus === 'success' && (
                    <p className="text-green-600 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    )
} 