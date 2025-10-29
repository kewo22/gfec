'use client';

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';


import SectionTitle from "../_components/section-title";
import Container from "../_components/layouts/container";
import { Typography } from "@/app/_components/ui/typography";

export default function About() {
  return (
    <section className="bg-slate-100">
      <Container className="relative mx-5 xl:mx-auto py-20">
        {/* <SectionTitle title="Who We Are ?" /> */}

        <motion.div
          className="text-center my-10 lg:my-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant='h1' className="text-primary">
            About Us
          </Typography>
        </motion.div>

        <div className="block sm:flex flex-col lg:flex-row gap-10 mb-20">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h2" className="text-left mb-5">
                Leading Visa & Immigration Agency
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography className="text-justify">
                We believe that access to quality education is a fundamental
                right, and we&apos;re proud to be part of a community of
                organizations that share this vision.
                <br />
                <br />
                As a leading overseas educational consultation service provider in
                Sri Lanka, we understand the importance of providing reliable and
                comprehensive guidance to students who are looking to pursue
                higher education abroad. We recognize that studying overseas can
                be a daunting prospect, with numerous challenges and uncertainties
                that can make the process overwhelming.
                <br />
                <br />
                At GFEC we&apos;re driven by a passion for education and a
                commitment to ensuring that every student has access to the best
                possible opportunities to achieve their goals. We&apos;re proud to
                be a leading overseas educational consultation service provider in
                Sri Lanka, and we&apos;re committed to continuing to provide
                exceptional guidance and support to students for years to come.
              </Typography>
            </motion.div>


          </div>
          <div className="flex-[0_0_450px] 2xl:flex-[0_0_650px] flex flex-row items-start gap-5">
            <div className="image-container inline-block relative rounded-lg">
              <Image
                src="/comp/about-1.webp"
                alt="about-1"
                priority
                width="400"
                height="600"
                className="rounded-lg"
              />
            </div>
            <div className="image-container inline-block relative rounded-lg mt-0 lg:mt-[40%]">
              <Image
                src="/comp/about-2.webp"
                alt="about-2"
                priority
                width="400"
                height="600"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mb-20">
          <motion.div
            className="flex-[0_0_50%] bg-secondary text-white p-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-row gap-5 items-center mb-5">
              <div className="w-[80px] h-[80px] bg-primary p-3 rounded-full">
                <Image
                  src="/vision.png"
                  alt="vision"
                  priority
                  width="64"
                  height="64"
                />
              </div>
              <Typography variant="h2" className="text-left">
                Our Vision
              </Typography>
            </div>
            <Typography className="text-left">
              Our Vision is to be a market leader and most reliable organization
              in International Education Consultation Services in Sri Lanka.
            </Typography>
          </motion.div>

          <motion.div
            className="flex-[0_0_50%] bg-secondary text-white p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-row gap-5 items-center mb-5">
              <div className="w-[80px] h-[80px] bg-primary p-4 rounded-full">
                <Image
                  src="/mission.png"
                  alt="mission"
                  priority
                  width="64"
                  height="64"
                />
              </div>
              <Typography variant="h2" className="text-left">
                Our Mission
              </Typography>
            </div>
            <Typography className="text-left">
              Our Mission is to provide accurate information, professional
              service and maintain the highest level success rate in
              international education student enrollments.
            </Typography>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mb-20">
          <motion.div
            className="bg-white shadow-about-card rounded-2xl border-2 border-secondary p-10 flex flex-col justify-center items-center gap-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/personalized-guidance.svg"
              alt="personalized-guidance"
              priority
              width="170"
              height="170"
              className=""
            />
            <div className="flex flex-col">
              <Typography variant="h5" className="mb-3">
                Personalized Guidance
              </Typography>
              <Typography className="text-justify">
                We believe in tailoring our services to meet your unique needs,
                providing individualized guidance to help you make informed
                decisions about your study abroad plans.
              </Typography>
            </div>
          </motion.div>
          <motion.div
            className="bg-white shadow-about-card rounded-2xl border-2 border-secondary p-10 flex flex-col justify-center items-center gap-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/comprehensive-support.svg"
              alt="comprehensive-support"
              priority
              width="125"
              height="125"
              className=""
            />
            <div className="flex flex-col">
              <Typography variant="h5" className="mb-3">
                Comprehensive Support
              </Typography>
              <Typography className="text-justify">
                We offer end-to-end assistance, covering everything from
                university selection to visa processing, ensuring that you
                receive comprehensive support throughout your educational
                journey.
              </Typography>
            </div>
          </motion.div>
          <motion.div
            className="bg-white shadow-about-card rounded-2xl border-2 border-secondary p-10 flex flex-col justify-center items-center gap-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/unwavering-commitment.svg"
              alt="unwavering-commitment"
              priority
              width="150"
              height="150"
              className=""
            />
            <div className="flex flex-col">
              <Typography variant="h5" className="mb-3">
                Unwavering Commitment
              </Typography>
              <Typography className="text-justify">
                Our dedication knows no bounds. We are committed to going the
                extra mile, ensuring your satisfaction and success by providing
                the highest level of service and support at all times.
              </Typography>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
