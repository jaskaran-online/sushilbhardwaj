import { supabase } from '@/lib/supabase'
import { format, subMonths } from 'date-fns'

export interface DashboardStats {
    totalProperties: number
    totalAgents: number
    totalAreas: number
    totalInquiries: number
    propertiesByStatus: Array<{
        status: string
        count: number
    }>
    propertiesByType: Array<{
        type: string
        count: number
    }>
    inquiriesByMonth: Array<{
        month: string
        count: number
    }>
}

export async function getDashboardStats(): Promise<DashboardStats> {
    // Get total counts
    const [
        { count: totalProperties },
        { count: totalAgents },
        { count: totalAreas },
        { count: totalInquiries }
    ] = await Promise.all([
        supabase.from('properties').select('*', { count: 'exact', head: true }),
        supabase.from('agents').select('*', { count: 'exact', head: true }),
        supabase.from('areas').select('*', { count: 'exact', head: true }),
        supabase.from('contact_inquiries').select('*', { count: 'exact', head: true })
    ])

    // Get properties by status
    const { data: propertiesByStatus } = await supabase
        .from('properties')
        .select('status')
        .then(({ data }) => {
            const counts = data?.reduce((acc, { status }) => {
                acc[status] = (acc[status] || 0) + 1
                return acc
            }, {} as Record<string, number>)

            return {
                data: Object.entries(counts || {}).map(([status, count]) => ({
                    status,
                    count
                }))
            }
        })

    // Get properties by type
    const { data: propertiesByType } = await supabase
        .from('properties')
        .select('property_type')
        .then(({ data }) => {
            const counts = data?.reduce((acc, { property_type }) => {
                acc[property_type] = (acc[property_type] || 0) + 1
                return acc
            }, {} as Record<string, number>)

            return {
                data: Object.entries(counts || {}).map(([type, count]) => ({
                    type,
                    count
                }))
            }
        })

    // Get inquiries by month for the last 6 months
    const sixMonthsAgo = subMonths(new Date(), 6)
    const { data: inquiriesByMonth } = await supabase
        .from('contact_inquiries')
        .select('created_at')
        .gte('created_at', sixMonthsAgo.toISOString())
        .then(({ data }) => {
            const counts = data?.reduce((acc, { created_at }) => {
                const month = format(new Date(created_at), 'MMM yyyy')
                acc[month] = (acc[month] || 0) + 1
                return acc
            }, {} as Record<string, number>)

            // Fill in missing months with 0
            const months = []
            for (let i = 0; i < 6; i++) {
                const month = format(subMonths(new Date(), i), 'MMM yyyy')
                months.push({
                    month,
                    count: counts?.[month] || 0
                })
            }

            return { data: months.reverse() }
        })

    return {
        totalProperties: totalProperties || 0,
        totalAgents: totalAgents || 0,
        totalAreas: totalAreas || 0,
        totalInquiries: totalInquiries || 0,
        propertiesByStatus: propertiesByStatus || [],
        propertiesByType: propertiesByType || [],
        inquiriesByMonth: inquiriesByMonth || []
    }
} 