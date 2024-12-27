"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProfessionalProfile() {
    return (
        <section className="relative py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl -z-10" />
                        <Image
                            src="/sushil-bhardwaj.jpg"
                            alt="Sushil Bhardwaj"
                            width={600}
                            height={750}
                            className={cn(
                                "rounded-2xl object-cover w-full h-full",
                                "shadow-xl shadow-primary/5",
                                "border border-primary/10"
                            )}
                            priority
                        />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl font-bold text-foreground">
                            Sushil Bhardwaj
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            With over two decades of experience in luxury real estate, I specialize in
                            helping clients find their perfect dream home. My commitment to excellence
                            and personalized service has earned me a reputation as one of the most
                            trusted names in real estate.
                        </p>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-foreground">
                                Career Highlights
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Over 20 years of real estate experience",
                                    "Top 1% of realtors in the region",
                                    "Certified Luxury Home Marketing Specialist",
                                    "Over $500M in successful transactions"
                                ].map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 text-muted-foreground"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                        <span>{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 