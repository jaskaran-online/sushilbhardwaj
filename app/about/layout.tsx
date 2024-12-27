import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Search Properties | My Dream Home',
    description: 'Search for your dream home with our advanced property search tools.',
}

export default function PropertiesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 