import type { Metadata } from 'next'
import AdminLayoutClient from '@/components/admin/layout-client'

export const metadata: Metadata = {
    title: {
        template: '%s | Admin Panel',
        default: 'Admin Panel | My Dream Home'
    },
    description: 'Admin panel for managing properties and inquiries',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AdminLayoutClient>
            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>
        </AdminLayoutClient>
    )
}
