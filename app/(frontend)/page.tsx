import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { AreasWeCover } from '@/components/home/areas-we-cover'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Testimonials } from '@/components/home/testimonials'
import { CallToAction } from '@/components/home/call-to-action'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturedProperties />
            <AreasWeCover />
            <WhyChooseUs />
            <Testimonials />
            <CallToAction />
        </>
    )
} 