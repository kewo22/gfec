"use client";

import React from "react";
import Image from "next/image";

import styles from "../page.module.css";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-20 mx-7 lg:mx-20 xl:mx-36 sm:flex">
      <div className="h-full w-full m-auto flex flex-col justify-center text-center sm:mx-5 sm:text-left sm:px-0 lg:px-0">
        <h1 className="text-2xl lg:text-3xl font-bold leading-normal tracking-tight text-center sm:text-left text-gray-900 mb-5">
          Study in Overseas with GFEC
        </h1>
        <p className="font-light text-base xl:text-xl leading-8 tracking-tight text-gray-900 text-justify lg:px-0 mb-5">
          Are you a student looking to pursue higher education but feeling
          overwhelmed by the process? Look no further! Our team of expert
          counselors has partnered with some of the top educational institutions
          to provide you with the guidance you need to make informed decisions
          about your future.
        </p>

        <Button className="bg-secondary xl:w-56 hover:bg-primary focus:ring-0 focus:outline-none transition-all ease-in-out">
          <Link href="apply" className="text-base xl:text-xl">
            Apply Now
          </Link>
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/certification.svg"
          alt="Illustration"
          fill
          priority
          className={`${styles.image}`}
        />
      </div>
    </section>
  );
}
