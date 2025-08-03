"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { Typography } from "@/app/_components/ui/typography";
import AnimatedSectionBorder from "./animated-section-border";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title } = props;
  return (
    <div className="relative inline-block mb-10 text-center">
      <Typography variant="h2" className="text-secondary">
        {title}
      </Typography>
      {/* <div className="section-title__border-box relative block h-[3px] w-1/2 bg-primary mt-3 mx-auto mb-0"></div> */}
      <AnimatedSectionBorder />
    </div>
  );
}

// <div className="relative block w-1/2 h-[3px] mt-3 mx-auto mb-0">
//   {/* Pseudo-elements container - always visible */}
//   <div className="section-title__border-box absolute inset-0" />

//   {/* Animated line that grows from center */}
//   <motion.div
//     className="absolute inset-0 bg-primary"
//     initial={{ scaleX: 0 }}
//     animate={{ scaleX: 1 }}
//     transition={{
//       duration: 0.8,
//       ease: "easeOut"
//     }}
//     style={{
//       transformOrigin: "center"
//     }}
//   />
// </div>