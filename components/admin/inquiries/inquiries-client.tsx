"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Mail, Phone, Calendar, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import useSWR, { mutate } from 'swr'
import type { Inquiry, InquiryStatus } from '@/lib/inquiries'
import { updateInquiryStatus, deleteInquiry } from '@/lib/inquiries'
import { useToast } from '@/hooks/use-toast'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function InquiriesClient() {
    const { toast } = useToast()
    const { data: inquiries, error } = useSWR<Inquiry[]>('/api/inquiries', fetcher)
    const [filter, setFilter] = useState<{
        status: InquiryStatus | 'all'
        search: string
    }>({
        status: 'all',
        search: '',
    })

    const isLoading = !inquiries && !error

    async function handleStatusUpdate(inquiryId: string, newStatus: InquiryStatus) {
        try {
            await updateInquiryStatus(inquiryId, newStatus)
            mutate('/api/inquiries')
            toast({
                title: 'Status Updated',
                description: 'Inquiry status has been updated successfully.',
            })
        } catch (error) {
            console.error('Failed to update inquiry status:', error)
            toast({
                title: 'Error',
                description: 'Failed to update inquiry status. Please try again.',
                variant: 'destructive',
            })
        }
    }

    async function handleDelete(inquiryId: string) {
        if (!window.confirm('Are you sure you want to delete this inquiry?')) {
            return
        }

        try {
            await deleteInquiry(inquiryId)
            mutate('/api/inquiries')
            toast({
                title: 'Inquiry Deleted',
                description: 'The inquiry has been deleted successfully.',
            })
        } catch (error) {
            console.error('Failed to delete inquiry:', error)
            toast({
                title: 'Error',
                description: 'Failed to delete inquiry. Please try again.',
                variant: 'destructive',
            })
        }
    }

    const filteredInquiries = inquiries?.filter((inquiry: Inquiry) => {
        if (filter.status !== 'all' && inquiry.status !== filter.status) {
            return false
        }
        if (filter.search) {
            const searchLower = filter.search.toLowerCase()
            return (
                inquiry.name.toLowerCase().includes(searchLower) ||
                inquiry.email.toLowerCase().includes(searchLower) ||
                inquiry.message.toLowerCase().includes(searchLower)
            )
        }
        return true
    }) ?? []

    if (error) {
        return (
            <div className="p-8 text-center text-red-500">
                Error loading inquiries. Please try again later.
            </div>
        )
    }

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Inquiries</h1>
                <div className="flex space-x-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search inquiries..."
                            value={filter.search}
                            onChange={(e) => setFilter((prev) => ({ ...prev, search: e.target.value }))}
                            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                    {/* Status Filter */}
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <select
                            value={filter.status}
                            onChange={(e) => setFilter((prev) => ({ ...prev, status: e.target.value as InquiryStatus | 'all' }))}
                            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="resolved">Resolved</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Inquiries List */}
            <div className="bg-white rounded-lg shadow">
                {isLoading ? (
                    <div className="p-8 text-center text-gray-500">Loading inquiries...</div>
                ) : filteredInquiries.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No inquiries found</div>
                ) : (
                    <div className="divide-y">
                        {filteredInquiries.map((inquiry: Inquiry) => (
                            <motion.div
                                key={inquiry.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-6 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-lg">{inquiry.name}</h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Mail className="h-4 w-4" />
                                                <a href={`mailto:${inquiry.email}`} className="hover:text-primary">
                                                    {inquiry.email}
                                                </a>
                                            </div>
                                            {inquiry.phone && (
                                                <div className="flex items-center space-x-1">
                                                    <Phone className="h-4 w-4" />
                                                    <a href={`tel:${inquiry.phone}`} className="hover:text-primary">
                                                        {inquiry.phone}
                                                    </a>
                                                </div>
                                            )}
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{format(new Date(inquiry.created_at), 'MMM d, yyyy')}</span>
                                            </div>
                                        </div>
                                        {inquiry.property_id && (
                                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                                                <MapPin className="h-4 w-4" />
                                                <span>Property ID: {inquiry.property_id}</span>
                                            </div>
                                        )}
                                        <p className="text-gray-700 mt-2">{inquiry.message}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span
                                            className={`
                                                px-3 py-1 rounded-full text-sm
                                                ${inquiry.status === 'new' ? 'bg-green-100 text-green-800' : ''}
                                                ${inquiry.status === 'contacted' ? 'bg-blue-100 text-blue-800' : ''}
                                                ${inquiry.status === 'resolved' ? 'bg-gray-100 text-gray-800' : ''}
                                                ${inquiry.status === 'archived' ? 'bg-red-100 text-red-800' : ''}
                                            `}
                                        >
                                            {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                                        </span>
                                        <select
                                            value={inquiry.status}
                                            onChange={(e) => handleStatusUpdate(inquiry.id, e.target.value as InquiryStatus)}
                                            className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="new">New</option>
                                            <option value="contacted">Contacted</option>
                                            <option value="resolved">Resolved</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                        <button
                                            onClick={() => handleDelete(inquiry.id)}
                                            className="text-red-600 hover:text-red-800 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
} 