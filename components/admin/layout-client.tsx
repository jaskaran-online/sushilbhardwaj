"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
    Home,
    Building2,
    MapPin,
    Mail,
    LogOut,
    Menu,
    X
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function AdminLayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        async function checkAuth() {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.push('/login')
            } else {
                setIsAuthenticated(true)
            }
            setIsLoading(false)
        }

        checkAuth()
    }, [router])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: Home },
        { href: '/admin/properties', label: 'Properties', icon: Building2 },
        { href: '/admin/areas', label: 'Areas', icon: MapPin },
        { href: '/admin/inquiries', label: 'Inquiries', icon: Mail },
    ]

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 z-40 h-screen w-64 transition-transform bg-white border-r
                lg:translate-x-0 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Logo section */}
                    <div className="p-4 border-b">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="My Dream Home"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-semibold">My Dream Home</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center px-3 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Icon className="w-5 h-5 mr-3 text-gray-500" />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Logout button */}
                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-3 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <LogOut className="w-5 h-5 mr-3 text-gray-500" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 lg:ml-64">
                {/* Top bar */}
                <header className="bg-white border-b h-16 fixed top-0 right-0 left-0 lg:left-64 z-30">
                    <div className="flex items-center justify-between h-full px-4">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Right side of top bar - can add user profile, notifications, etc. */}
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900">
                                <div className="w-8 h-8 rounded-full bg-gray-200" />
                                <span>Admin</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="pt-16 min-h-screen bg-gray-50">
                    <div className="p-4 sm:p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>

            {/* Mobile menu backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    )
} 