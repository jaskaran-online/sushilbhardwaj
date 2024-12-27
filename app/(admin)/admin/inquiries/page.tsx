import type { Metadata } from 'next'
import { InquiriesClient } from '@/components/admin/inquiries/inquiries-client'

export const metadata: Metadata = {
    title: 'Inquiries | Admin Dashboard',
    description: 'Manage property inquiries and contact requests',
}

export default function InquiriesPage() {
    return <InquiriesClient />
} 