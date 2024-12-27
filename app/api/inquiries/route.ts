import { NextResponse } from 'next/server'
import { getInquiries } from '@/lib/inquiries'
import type { Inquiry } from '@/lib/inquiries'

export async function GET() {
    try {
        const inquiries = await getInquiries()
        return NextResponse.json(inquiries)
    } catch (error) {
        console.error('Failed to fetch inquiries:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to fetch inquiries',
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