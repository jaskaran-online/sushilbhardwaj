import type { Metadata } from 'next'
import AdminLayoutClient from '@/components/admin/layout-client'
import { Navigation } from '@/components/navigation'

export const metadata: Metadata = {
    title: 'Admin Panel - My Dream Home',
    description: 'Manage your real estate listings and inquiries',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="flex flex-col min-h-screen">
        <div className="flex-1">
            {children}
        </div>
    </div>

} 