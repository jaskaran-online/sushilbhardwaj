"use client"

import { Loader2 } from 'lucide-react'
import useSWR from 'swr'
import type { DashboardStats } from '@/lib/stats'
import { StatsOverview } from './stats-overview'

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) {
        const error = new Error(data.error || 'An error occurred')
        error.message = data.details || data.error || 'Failed to fetch data'
        throw error
    }
    return data
}

export function DashboardClient() {
    const { data: stats, error, isLoading } = useSWR<DashboardStats>('/api/stats', fetcher, {
        refreshInterval: 30000, // Refresh every 30 seconds
        revalidateOnFocus: false
    })

    if (error) {
        return (
            <div className="p-8 text-center text-red-500">
                <p className="font-semibold">Error loading dashboard stats</p>
                <p className="text-sm mt-2">{error.message}</p>
            </div>
        )
    }

    if (isLoading || !stats) {
        return (
            <div className="p-8 text-center text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                <p>Loading dashboard stats...</p>
            </div>
        )
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome to your real estate dashboard</p>
            </div>

            <StatsOverview stats={stats} />
        </div>
    )
} 