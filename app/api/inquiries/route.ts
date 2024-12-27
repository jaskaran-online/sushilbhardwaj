import { NextResponse } from 'next/server'
import { getInquiries } from '@/lib/inquiries'

export async function GET() {
    try {
        const inquiries = await getInquiries()
        return NextResponse.json(inquiries)
    } catch (error) {
        console.error('Failed to fetch inquiries:', error)
        return NextResponse.json(
            { error: 'Failed to fetch inquiries' },
            { status: 500 }
        )
    }
} 