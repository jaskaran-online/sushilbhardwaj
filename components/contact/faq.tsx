import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
    {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of real estate services including property buying, selling, rental management, property valuation, and investment consulting. Our team of experts is dedicated to helping you achieve your real estate goals.'
    },
    {
        question: 'How do I schedule a property viewing?',
        answer: 'You can schedule a property viewing by contacting us through our contact form, calling our office directly, or sending us an email. We typically respond within 24 hours and can arrange viewings at times that suit your schedule.'
    },
    {
        question: 'What areas do you cover?',
        answer: 'We primarily serve the Beverly Hills area and surrounding neighborhoods in Los Angeles County. However, we also have partnerships with trusted agents across Southern California to help you find your dream home wherever you are looking.'
    },
    {
        question: 'How long does the buying process typically take?',
        answer: 'The buying process can vary depending on various factors such as property availability, financing, and negotiations. On average, it takes 30-45 days from offer acceptance to closing, but we will work with you to ensure the process is as smooth and efficient as possible.'
    },
    {
        question: 'Do you help with mortgage financing?',
        answer: 'While we do not directly provide mortgage financing, we have strong relationships with trusted local lenders and can connect you with the right financial partners to help secure the best possible mortgage rates and terms for your situation.'
    },
    {
        question: 'What sets you apart from other real estate agencies?',
        answer: 'Our commitment to personalized service, extensive market knowledge, and track record of successful transactions sets us apart. We leverage cutting-edge technology and maintain high ethical standards to ensure our clients receive the best possible service and outcomes.'
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                        >
                            <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                            <svg
                                className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                                }`}
                        >
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
} 