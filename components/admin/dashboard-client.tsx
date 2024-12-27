"use client"

import { useEffect, useState } from 'react'
import { Building2, MapPin, Mail } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface DashboardStats {
    totalProperties: number
    totalAreas: number
    totalInquiries: number
    recentInquiries: Array<{
        id: string
        name: string
        email: string
        created_at: string
        status: string
    }>
}

export default function AdminDashboardClient() {
    const [stats, setStats] = useState<DashboardStats>({
        totalProperties: 0,
        totalAreas: 0,
        totalInquiries: 0,
        recentInquiries: []
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadStats() {
            try {
                const [
                    { count: propertiesCount },
                    { count: areasCount },
                    { count: inquiriesCount },
                    { data: recentInquiries }
                ] = await Promise.all([
                    supabase.from('properties').select('*', { count: 'exact', head: true }),
                    supabase.from('areas').select('*', { count: 'exact', head: true }),
                    supabase.from('contact_inquiries').select('*', { count: 'exact', head: true }),
                    supabase.from('contact_inquiries')
                        .select('id, name, email, created_at, status')
                        .order('created_at', { ascending: false })
                        .limit(5)
                ])

                setStats({
                    totalProperties: propertiesCount || 0,
                    totalAreas: areasCount || 0,
                    totalInquiries: inquiriesCount || 0,
                    recentInquiries: recentInquiries || []
                })
            } catch (error) {
                console.error('Error loading dashboard stats:', error)
            } finally {
                setIsLoading(false)
            }
        }

        loadStats()
    }, [])

    if (isLoading) {
        return (
            <div className="animate-pulse">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32 bg-white rounded-lg shadow-md" />
                    ))}
                </div>
                <div className="bg-white rounded-lg shadow-md h-96" />
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 mb-1">Total Properties</p>
                            <p className="text-3xl font-bold">{stats.totalProperties}</p>
                        </div>
                        <Building2 className="w-12 h-12 text-primary opacity-20" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 mb-1">Areas Covered</p>
                            <p className="text-3xl font-bold">{stats.totalAreas}</p>
                        </div>
                        <MapPin className="w-12 h-12 text-primary opacity-20" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 mb-1">Total Inquiries</p>
                            <p className="text-3xl font-bold">{stats.totalInquiries}</p>
                        </div>
                        <Mail className="w-12 h-12 text-primary opacity-20" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Recent Inquiries</h2>
                </div>
                <div className="p-6">
                    {stats.recentInquiries.length > 0 ? (
                        <div className="divide-y">
                            {stats.recentInquiries.map((inquiry) => (
                                <div key={inquiry.id} className="py-4 first:pt-0 last:pb-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium">{inquiry.name}</p>
                                            <p className="text-sm text-gray-500">{inquiry.email}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className={`
                        px-2 py-1 text-xs rounded-full
                        ${inquiry.status === 'new' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                      `}>
                                                {inquiry.status}
                                            </span>
                                            <span className="text-sm text-gray-500 ml-4">
                                                {new Date(inquiry.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-4">No recent inquiries</p>
                    )}
                </div>
            </div>
        </div>
    )
} 