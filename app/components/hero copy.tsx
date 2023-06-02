"use client";

import React from "react";
import Image from "next/image";

import styles from "../page.module.css";
import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <section className="sm:flex mt-40 lg:px-32 xl:px-60">
      <div className="sm:relative left-0 right-0 top-0 bottom-0 m-auto z-10 flex flex-col justify-center text-center sm:text-left h-full w-full px-10 sm:px-0 lg:px-0">
        <h1 className="text-3xl sm:text-3xl font-bold leading-none tracking-tight mb-4 sm:px-8 lg:px-0 text-gray-900">
          Study in Overseas with GFEC
        </h1>
        <p className="text-base font-normal text-gray-900 lg:text-xl mb-6 lg:px-0 sm:px-8 ">
          We work with leading education institutes and provide counseling to
          students wanting to pursue higher education and vocational training
          overseas.
        </p>

        <Button
          className="w-full sm:w-56 mx-auto sm:ml-8 lg:ml-0"
          gradientMonochrome="info"
        >
          Apply Now
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/certification.svg"
          alt="Illustration"
          fill
          priority
          className={`opacity-100 sm:opacity-100 ${styles.image}`}
        />
      </div>
    </section>
  );
}
