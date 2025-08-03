"use client"

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Typography, Variant } from '@/app/_components/ui/typography';

interface Props {
    text: string
    variant: Variant;
    duration?: number
    delay?: number;
    textClassName?: string
}


export function TypingEffect(props: Props) {
    const { text, variant, duration = 0.001, delay = 0.01, textClassName = '' } = props;

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (

        <Typography ref={ref} className={textClassName} variant={variant}>
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: duration, delay: index * delay }}
                >
                    {letter}
                </motion.span>
            ))}
        </Typography>



    );
}