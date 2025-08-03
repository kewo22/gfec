'use client';
import { Typography } from '@/app/_components/ui/typography';
import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';

export function SequentialTextFade({
    direction = 'up',
    texts = [],
    interval = 3000, // Time in ms each text stays visible
    className = '',
    typographyClass = '',
}: {
    direction?: 'up' | 'down';
    texts: string[];
    interval?: number;
    className?: string;
    typographyClass?: string;
}) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    // Animation variants
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'down' ? -18 : 18
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            y: direction === 'down' ? 18 : -18,
            transition: { duration: 0.3 }
        }
    };

    // Move to next text after interval
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, texts.length]);

    return (
        <div className={className}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial="visible" // set hidden if it wants to be hidden at the start
                    animate="visible"
                    exit="exit"
                    variants={variants}
                >
                    <Typography variant='h2' className={typographyClass}>{texts[currentIndex]}</Typography>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}