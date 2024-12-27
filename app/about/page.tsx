"use client"

import { TeamProfile } from '@/components/about/team-profile'
import { CompanyValues } from '@/components/about/company-values'
import { ProjectGallery } from '@/components/about/project-gallery'
import { ProfessionalProfile } from '@/components/about/professional-profile'
import Header from '@/components/layout/header'

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header
                title="About Us"
                backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
            />
            <div className="container mx-auto px-4 py-12">
                <ProfessionalProfile />
                <CompanyValues />
                {/* <TeamProfile /> */}
                <ProjectGallery />
            </div>
        </main>
    )
} 