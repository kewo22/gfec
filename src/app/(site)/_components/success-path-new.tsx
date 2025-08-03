"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Container from './layouts/container';
import SectionTitle from './section-title';

import apply from "../../../../public/apply.svg";
import consult from "../../../../public/consult.svg";
import flight from "../../../../public/flight.svg";
import graduate from "../../../../public/graduate.svg";
import Image from 'next/image';
import { Typography } from '@/app/_components/ui/typography';
import ParticleButton from '@/app/_components/ui/particle-btn';

export default function SuccessPathNew() {
    const containerRef = useRef(null);

    const steps = [
        {
            id: 1,
            title: "Apply Online",
            description: "Start your journey with our simple online application. Upload your documents, fill out your profile, and let our smart matching system find the perfect universities for you.",
            icon: "💻",
            image: apply,
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "Meet Our Consultants",
            description: "Connect with our expert education consultants who will guide you through every step. Get personalized advice, university recommendations, and application strategies.",
            icon: "👥",
            image: consult,
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "Depart to Your Destination",
            description: "With your visa approved and everything prepared, it's time to embark on your educational adventure. We'll support you right until you reach your destination.",
            icon: "✈️",
            image: flight,
            color: "from-orange-500 to-red-600"
        },
        {
            id: 4,
            title: "Earn Your Degree",
            description: "Complete your studies at your dream university and graduate with the knowledge and skills that will shape your future. Your success is our ultimate goal.",
            icon: "🎓",
            image: graduate,
            color: "from-purple-500 to-pink-600"
        }
    ];

    const StepCard = ({ step, index }: any) => {
        const cardRef = useRef(null);
        const isInView = useInView(cardRef, {
            once: true,
            margin: "-100px",
            amount: 0.3
        });
        const controls = useAnimation();

        useEffect(() => {
            if (isInView) {
                controls.start("visible");
            }
        }, [isInView, controls]);

        const cardVariants = {
            hidden: {
                opacity: 0,
                y: 80,
                scale: 0.8
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                }
            }
        };

        const imageVariants = {
            hidden: {
                opacity: 0,
                scale: 1.2,
                rotate: -5
            },
            visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                    duration: 0.6,
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut"
                }
            }
        };

        const textVariants = {
            hidden: {
                opacity: 0,
                x: -30,
                y: 20
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: index * 0.2 + 0.4,
                    ease: "easeOut"
                }
            }
        };

        const numberVariants = {
            hidden: {
                scale: 0,
                rotate: -180
            },
            visible: {
                scale: 1,
                rotate: 0,
                transition: {
                    duration: 0.5,
                    delay: index * 0.2 + 0.1,
                    ease: "easeOut"
                }
            }
        };

        return (
            <motion.div
                ref={cardRef}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 mx-4 sm:mx-6 lg:mx-0 p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                {/* Image Section */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 relative flex-shrink-0">
                    <motion.div
                        variants={imageVariants}
                        className="relative overflow-hidden rounded-full shadow-lg"
                        whileHover={{ rotate: 10 }}
                    >
                        {/* <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`}></div> */}
                        <Image
                            priority
                            src={step.image}
                            alt={step.title}
                            width={140}
                            height={140}
                            className="w-full h-full object-cover"
                        />
                        {/* <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                        /> */}
                        {/* <motion.div
                            variants={numberVariants}
                            className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify- center shadow-md`}
                        >
                            <span className="text-white text-sm sm:text-base font-bold">{step.id}</span>
                        </motion.div> */}
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center sm:text-left">
                    <motion.div
                        variants={textVariants}
                        className="space-y-2 sm:space-y-3"
                    >
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                            {/* <motion.div
                                className="text-2xl sm:text-3xl lg:text-4xl"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {step.icon}
                            </motion.div> */}

                            {/* bg-gradient-to-r  bg-clip-text text-transparent ${step.color} */}
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className='mb-2'
                            >
                                <Typography variant='h3' className='text-primary'> {step.title} </Typography>
                            </motion.span>
                        </div>


                        <motion.span whileHover={{ scale: 1.02 }}  >
                            <Typography variant='p'> {step.description} </Typography>
                        </motion.span>
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    const ConnectingLine = ({ index }: any) => {
        const lineRef = useRef(null);
        const isInView = useInView(lineRef, {
            once: true,
            margin: "-100px"
        });

        return (
            <motion.div
                ref={lineRef}
                className="flex justify-center mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
            >
                <motion.div
                    className="w-1 h-8 sm:h-20 bg-gradient-to-b from-primary to-secondary rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                />
            </motion.div>
        );
    };

    return (
        <Container className="mx-auto py-20 bg-white">
            <SectionTitle title="You Pathway to Achieving Success" />

            <section className="overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Your Pathway to Achieving Success
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From application to graduation, we guide you through every step of your educational journey
                        </p>
                    </motion.div> */}

                    {/* Steps */}
                    <div ref={containerRef} className="max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={step.id}>
                                <StepCard step={step} index={index} />
                                {index < steps.length - 1 && <ConnectingLine index={index} />}
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        {/* <motion.button
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Journey Today
                        </motion.button> */}
                        <ParticleButton size='md' customClass='text-xl font-bold'>Start your journey today</ParticleButton>
                    </motion.div>
                </div>
            </section>
        </Container>
    );
};


