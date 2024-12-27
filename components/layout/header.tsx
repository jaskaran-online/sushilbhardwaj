"use client"

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Default images for different pages
const defaultImages = {
    about: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    properties: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    contact: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    default: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
};

interface HeaderProps {
    title: string;
    backgroundImage?: string;
    subtitle?: string;
}

const Header: FC<HeaderProps> = ({
    title,
    backgroundImage,
    subtitle
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] w-full"
        >
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage || defaultImages.default}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative h-full flex flex-col items-center justify-center text-center px-4"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Header; 