import { NextResponse } from 'next/server'
import { getAreas, createArea } from '@/lib/areas'
import type { Area } from '@/lib/areas'

export async function GET() {
    try {
        const areas = await getAreas()
        return NextResponse.json(areas)
    } catch (error) {
        console.error('Failed to fetch areas:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to fetch areas',
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

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const area = await createArea(body)
        return NextResponse.json(area)
    } catch (error) {
        console.error('Failed to create area:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to create area',
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