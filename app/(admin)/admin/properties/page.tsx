import type { Metadata } from 'next'
import AdminPropertiesClient from '@/components/admin/properties-client'

export const metadata: Metadata = {
    title: 'Properties Management',
    description: 'Manage real estate property listings',
}

export default function AdminProperties() {
    return <AdminPropertiesClient />
} 