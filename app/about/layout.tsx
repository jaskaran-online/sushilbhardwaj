import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | My Dream Home',
    description: 'Learn about our experienced real estate team and our commitment to helping you find your dream home.',
}

export default function PropertiesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 