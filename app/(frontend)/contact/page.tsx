import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { GoogleMap } from '@/components/contact/google-map'
import { FAQ } from '@/components/contact/faq'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with our real estate experts',
}

export default function ContactPage() {
    return (
        <>
            <Header
                title="Contact Us"
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                subtitle="We're here to help you find your dream home"
            />
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>
                <GoogleMap />
                <FAQ />
            </div>
        </>
    )
} 