import type { Metadata } from 'next'
import { AreasClient } from '@/components/admin/areas/areas-client'

export const metadata: Metadata = {
    title: 'Areas | Admin Dashboard',
    description: 'Manage property areas and locations',
}

export default function AreasPage() {
    return <AreasClient />
} 