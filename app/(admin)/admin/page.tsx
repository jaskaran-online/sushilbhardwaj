import type { Metadata } from 'next'
import { DashboardClient } from '@/components/admin/dashboard/dashboard-client'

export const metadata: Metadata = {
    title: 'Dashboard | Admin',
    description: 'Real estate admin dashboard overview',
}

export default function AdminDashboardPage() {
    return <DashboardClient />
} 