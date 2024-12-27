import { NextResponse } from 'next/server'
import { getAreaById, updateArea, deleteArea } from '@/lib/areas'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const area = await getAreaById(params.id)
        return NextResponse.json(area)
    } catch (error) {
        console.error('Failed to fetch area:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to fetch area',
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

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json()
        const area = await updateArea(params.id, body)
        return NextResponse.json(area)
    } catch (error) {
        console.error('Failed to update area:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to update area',
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

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await deleteArea(params.id)
        return new NextResponse(null, { status: 204 })
    } catch (error) {
        console.error('Failed to delete area:', error)
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to delete area',
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