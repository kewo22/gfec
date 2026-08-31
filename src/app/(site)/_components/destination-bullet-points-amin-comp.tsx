import React, { useRef } from "react";
import { motion, useInView } from 'motion/react';

import { Typography } from "@/app/_components/ui/typography";

export type DestinationBulletPoints = {
    title: string;
    description: string;
}

export type DestinationBulletPointsAnimCompProps = {
    list: DestinationBulletPoints[];
    title: string;
}

export default function DestinationBulletPointsAnimComp(props: DestinationBulletPointsAnimCompProps) {

    const { list, title } = props;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20, // Add damping for spring animations
                // Remove duration and ease - they're for tween animations
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 15
                // Remove duration and ease
            }
        }
    };

    const checkmarkVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 15,
                delay: 0.2
                // Remove duration and ease
            }
        }
    };


    return (
        <div ref={ref} className="">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-8"
                >
                    {/* Title */}
                    <motion.div variants={titleVariants} className="text-center text-black">
                        <Typography variant="h2">
                            <motion.span
                                className="bg-clip-text mb-4"
                            >
                                {title}
                            </motion.span>
                        </Typography>
                        {/* <motion.div
                className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                variants={{
                  hidden: { width: 0 },
                  visible: {
                    width: 96,
                    transition: { duration: 0.8, delay: 0.5 }
                  }
                }}
              /> */}
                    </motion.div>

                    {/* Benefits List */}
                    <div className="space-y-6">
                        {list.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <motion.div
                                    className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                                    whileHover={{
                                        scale: 1.02,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {/* Checkmark */}
                                    <motion.div
                                        variants={checkmarkVariants}
                                        className="shrink-0"
                                    >
                                        <div className="w-8 h-8 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                            <motion.svg
                                                className="w-5 h-5 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                initial={{ pathLength: 0 }}
                                                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.2 + 0.8,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </motion.svg>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Typography variant="h5">
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                                transition={{ delay: index * 0.2 + 0.5 }}
                                            >
                                                {benefit.title}
                                            </motion.span>
                                        </Typography>

                                        <Typography variant="p" className="text-gray-900 leading-relaxed">
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                                transition={{ delay: index * 0.2 + 0.7 }}
                                            >
                                                {benefit.description}
                                            </motion.span>
                                        </Typography>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom accent */}
                    {/* <motion.div
              className="text-center pt-8"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2, duration: 0.6 }
                }
              }}
            >

              <motion.div
                className="inline-flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Start Your UK Journey Today</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </motion.div>

            </motion.div> */}
                </motion.div>
            </div>
        </div>
    );
}
