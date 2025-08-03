import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSectionBorder = () => {

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="relative block w-1/2 h-[3px] mt-3 mx-auto mb-0">
            {/* Animated line that grows from center */}
            <motion.div
                className="absolute top-[6px] left-0 w-full h-[3px] bg-primary -translate-y-1/2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: inView ? 1 : 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
                style={{
                    transformOrigin: "center"
                }}
            />

            {/* Animated pseudo-elements (circles) */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-secondary rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.4
                }}
                style={{
                    transform: "translate(-50%, -50%)",
                    transformOrigin: "center"
                }}
            />

            <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.6
                }}
                style={{
                    transform: "translate(-50%, -50%)",
                    transformOrigin: "center"
                }}
            />
        </div>
    );
};

export default AnimatedSectionBorder;