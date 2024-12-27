import { Metadata } from 'next'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { GoogleMap } from '@/components/contact/google-map'
import { FAQ } from '@/components/contact/faq'
import Header from '@/components/layout/header'

export const metadata: Metadata = {
    title: 'Contact Us | My Dream Home',
    description: 'Get in touch with our real estate experts to find your dream home.',
}

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header
                title="Contact Us"
                backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
            />
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>
                <GoogleMap />
                <FAQ />
            </div>
        </main>
    )
} 