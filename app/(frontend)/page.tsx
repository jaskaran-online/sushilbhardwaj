import { Hero } from '@/components/home/hero'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { AreasWeCover } from '@/components/home/areas-we-cover'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { ClientTestimonials } from '@/components/home/client-testimonials'
import { CallToAction } from '@/components/home/call-to-action'

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedProperties />
            <AreasWeCover />
            <WhyChooseUs />
            <ClientTestimonials />
            <CallToAction />
        </>
    )
} 