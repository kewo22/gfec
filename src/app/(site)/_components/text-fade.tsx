
'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function TextFade({
    direction,
    texts = [],
    children,
    className = '',
    staggerChildren = 0.1,
}: {
    direction: 'up' | 'down';
    texts?: string[];
    children?: React.ReactNode;
    className?: string;
    staggerChildren?: number;
}) {
    const FADE_DOWN = {
        show: { opacity: 1, y: 0, transition: { type: 'spring' } },
        hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
    };
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    // Determine what content to render
    const content = texts.length > 0
        ? texts.map((text, index) => (
            <motion.div key={index} variants={FADE_DOWN}>
                {text}
            </motion.div>
        ))
        : React.Children.map(children, (child) =>
            React.isValidElement(child) ? (
                <motion.div variants={FADE_DOWN}>{child}</motion.div>
            ) : (
                child
            )
        );

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : ''}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerChildren,
                    },
                },
            }}
            className={className}
        >
            {content}
        </motion.div>
    );
}