import { FC } from 'react';
import Image from 'next/image';

interface HeaderProps {
    title: string;
    backgroundImage?: string;
}

const Header: FC<HeaderProps> = ({
    title,
    backgroundImage = '/images/default-header-bg.jpg'
}) => {
    return (
        <div className="relative h-[300px] w-full">
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative h-full flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Header; 