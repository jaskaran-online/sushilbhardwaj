import { NextResponse } from 'next/server'
import { getDashboardStats } from '@/lib/stats'

export async function GET() {
    try {
        const stats = await getDashboardStats()
        return NextResponse.json(stats)
    } catch (error) {
        console.error('Failed to fetch dashboard stats:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to fetch dashboard stats',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
} 