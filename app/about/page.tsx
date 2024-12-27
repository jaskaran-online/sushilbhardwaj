import { Metadata } from 'next'
import { TeamProfile } from '@/components/about/team-profile'
import { CompanyValues } from '@/components/about/company-values'
import { ProjectGallery } from '@/components/about/project-gallery'
import { ProfessionalProfile } from '@/components/about/professional-profile'

export const metadata: Metadata = {
    title: 'About Us | My Dream Home',
    description: 'Learn about our experienced real estate team and our commitment to helping you find your dream home.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <ProfessionalProfile />
                <CompanyValues />
                <TeamProfile />
                <ProjectGallery />
            </div>
        </main>
    )
} 