import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import { ProfessionalProfile } from '@/components/about/professional-profile'
import { CompanyValues } from '@/components/about/company-values'
import { TeamProfile } from '@/components/about/team-profile'
import { ProjectGallery } from '@/components/about/project-gallery'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about our team and our commitment to finding your perfect home',
}

export default function AboutPage() {
    return (
        <>
            <Header
                title="About Us"
                backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                subtitle="Your trusted partner in finding the perfect property"
            />
            <div className="container mx-auto px-4 py-12">
                <ProfessionalProfile />
                <CompanyValues />
                <TeamProfile />
                <ProjectGallery />
            </div>
        </>
    )
} 