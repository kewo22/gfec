"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "../page.module.css";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/apply");
  };

  return (
    <section className="mb-20 mx-7 lg:mx-20 xl:mx-36 sm:flex">
      <div className="h-full w-full my-auto sm:mx-5 lg:mx-10 mb-10 sm:mb-0 flex flex-col justify-center text-center  sm:text-left sm:px-0 lg:px-0">
        <h1 className="text-2xl lg:text-3xl font-bold leading-normal tracking-tight text-center sm:text-left text-gray-900 mb-5">
          Study in Overseas with GFEC
        </h1>
        <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify lg:px-0 mb-5">
          Are you a student looking to pursue higher education but feeling
          overwhelmed by the process? Look no further! Our team of expert
          counselors has partnered with some of the top educational institutions
          to provide you with the guidance you need to make informed decisions
          about your future.
        </p>

        <Button
          className="bg-primary xl:w-56 hover:bg-secondary focus:ring-0 focus:outline-none transition-all ease-in-out"
          onClick={handleClick}
        >
          <Link href="apply" className="text-base">
            Apply Now
          </Link>
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/home-img-3.jpg"
          alt="Illustration"
          fill
          priority
          className={`${styles.image} object-cover !h-[350px]`}
        />
      </div>
    </section>
  );
}
