"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import GfecMap from "../_components/gfec-map";
import GetInTouch from "../_components/get-in-touch";
import Container from "../_components/layouts/container";
import NavSocial from "../_components/nav-social";

import { Typography } from "@/app/_components/ui/typography";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  const emails = (process.env.NEXT_PUBLIC_EMAILS || process.env.EMAILS || "info@gfeconsultancy.com")?.split(",");
  const phoneNos = (process.env.NEXT_PUBLIC_PHONE || process.env.PHONE || "0112271854")?.split(",");
  const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE_1 || process.env.ADDRESS_LINE_1 || "408 (3rd Floor)";
  const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE_2 || process.env.ADDRESS_LINE_2 || "Galle Road";
  const addressLine3 = process.env.NEXT_PUBLIC_ADDRESS_LINE_3 || process.env.ADDRESS_LINE_3 || "Colombo 3";

  return (
    <section className="bg-slate-100">
      <Container className="relative mx-5 xl:mx-auto py-20">

        {/* Header */}
        <motion.div
          className="text-center my-10 lg:my-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant='h1' className="text-primary">
            Contact Us
          </Typography>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Contact Us" />
        </motion.div> */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Phone */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Phone className="text-white w-8 h-8" />
              </div>
              <Typography variant="h5" className="text-secondary font-bold">
                Phone
              </Typography>
              <div className="flex flex-col gap-1">
                {phoneNos?.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="text-gray-700 hover:text-primary transition-colors duration-300"
                  >
                    <Typography variant="p">{phone}</Typography>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Mail className="text-white w-8 h-8" />
              </div>
              <Typography variant="h5" className="text-secondary font-bold">
                Email
              </Typography>
              <div className="flex flex-col gap-1">
                {emails?.map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email}`}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 break-all"
                  >
                    <Typography variant="p">{email}</Typography>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <Typography variant="h5" className="text-secondary font-bold">
                Address
              </Typography>
              <Typography variant="p" className="text-gray-700">
                {addressLine1},<br />
                {addressLine2},<br />
                {addressLine3}
              </Typography>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Clock className="text-white w-8 h-8" />
              </div>
              <Typography variant="h5" className="text-secondary font-bold">
                Office Hours
              </Typography>
              <div className="text-gray-700">
                <Typography variant="p">Mon - Fri: 9:00 AM - 5:00 PM</Typography>
                <Typography variant="p">Sat: 9:00 AM - 1:00 PM</Typography>
                <Typography variant="p" className="text-gray-500">Sunday: Closed</Typography>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center gap-6">
            <Typography variant="h4" className="text-secondary font-bold">
              Follow Us On Social Media
            </Typography>
            <NavSocial
              iconClass="text-secondary hover:text-primary transition-colors duration-300"
              wrapperClass="flex flex-row gap-8 items-center justify-center"
            />
          </div>
        </motion.div>
      </Container>

      <GfecMap />

      <div id="get-in-touch-container">
        <GetInTouch />
      </div>
    </section>
  );
}
