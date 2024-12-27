"use client"

import { TeamProfile } from '@/components/about/team-profile'
import { CompanyValues } from '@/components/about/company-values'
import { ProjectGallery } from '@/components/about/project-gallery'
import { ProfessionalProfile } from '@/components/about/professional-profile'

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