'use client';

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { useInView } from "react-intersection-observer";

interface SummaryCounterProps {
  maxCount: number;
  className?: string;
  [key: string]: any; // for other props
}

export default function SummaryCounter(props: SummaryCounterProps) {

  const { maxCount, className, restProps } = props;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!inView || hasAnimated) return;

    const animation = animate(count, maxCount, {
      duration: 2,
      ease: "easeOut",
      onComplete: () => setHasAnimated(true)
    });

    return () => animation.stop();
  }, [inView, count, hasAnimated, maxCount]); // inView

  return (
    <motion.h1
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {rounded}
    </motion.h1 >
  );
}
