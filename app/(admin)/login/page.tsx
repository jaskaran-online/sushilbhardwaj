import type { Metadata } from 'next'
import AdminLoginClient from '@/components/admin/login-client'

export const metadata: Metadata = {
    title: 'Login - Admin Panel',
    description: 'Secure login portal for My Dream Home admin panel',
}

export default function AdminLogin() {
    return <AdminLoginClient />
} 