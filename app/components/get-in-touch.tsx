"use client";

import React from "react";
import { format } from "date-fns";
import { Button } from "flowbite-react";

import styles from "../page.module.css";
import { Input } from "./input";
import { Select } from "./select";

export default function GetInTouch() {
  return (
    <section className="mb-20 mx-7 lg:mx-20 xl:mx-36">
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
        Get in touch
      </h1>

      <p className="font-light text-base xl:text-xl leading-8 tracking-tight text-gray-900 text-center lg:px-0 mb-5">
        Thank you for your interest in our organization and the services we
        offer. We would be more than happy to arrange a FREE information session
        for you.
      </p>

      <div className="">
        <div className="flex flex-col sm:flex-row gap-5 mb-6">
          <Input label="First Name" sizing="xl" />
          <Input label="Last Name" sizing="xl" />
        </div>
        <div className="flex flex-col sm:flex-row gap-5 mb-6">
          <Input label="Email" sizing="xl" />
          <Input label="Phone" sizing="xl" />
        </div>
        <div className="flex mb-6">
          <Input label="Address" sizing="xl" />
        </div>
        <div className="flex flex-col sm:flex-row gap-5 mb-6">
          <Input label="Preferred Date" type="date" sizing="xl" />
          <Select label="Preferred Time" />
        </div>

        <Button className="w-full sm:w-56 mx-auto bg-secondary xl:w-56 hover:bg-primary focus:ring-0 focus:outline-none transition-all ease-in-out">
          <span className="text-base xl:text-xl">Send</span>
        </Button>
      </div>
    </section>
  );
}
