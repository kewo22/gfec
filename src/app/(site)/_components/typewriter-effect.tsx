
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typography, Variant } from '@/app/_components/ui/typography';

interface TypewriterProps {
    text: string;
    variant?: Variant;
    className?: string;
    speed?: number;
    showCursor?: boolean;
    cursorChar?: string;
    pauseAfterComplete?: number;
    loop?: boolean;
    onComplete?: () => void;
    onStart?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterProps> = ({
    text,
    variant = "h1",
    className = "",
    speed = 100,
    showCursor = true,
    cursorChar = "|",
    pauseAfterComplete = 2000,
    loop = true,
    onComplete,
    onStart
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const resetAnimation = useCallback(() => {
        setCurrentIndex(0);
        setDisplayedText("");
        setIsComplete(false);
        onStart?.();
    }, [onStart]);

    const completeAnimation = useCallback(() => {
        setIsComplete(true);
        onComplete?.();

        if (loop) {
            setTimeout(resetAnimation, pauseAfterComplete);
        }
    }, [loop, pauseAfterComplete, resetAnimation, onComplete]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, currentIndex + 1));
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        } else if (currentIndex === text.length && !isComplete) {
            completeAnimation();
        }
    }, [currentIndex, text, speed, isComplete, completeAnimation]);

    // Reset when text prop changes
    useEffect(() => {
        resetAnimation();
    }, [text, resetAnimation]);

    return (
        <div className="inline-flex items-baseline">
            <Typography
                variant={variant}
                className={className}
            >
                {displayedText}
            </Typography>

            {showCursor && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="ml-1"
                >
                    <Typography
                        variant={variant}
                        className={className}
                    >
                        {cursorChar}
                    </Typography>
                </motion.span>
            )}
        </div>
    );
};