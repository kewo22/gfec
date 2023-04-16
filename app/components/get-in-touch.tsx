"use client";

import React from "react";
import { Button } from "flowbite-react";

import styles from "../page.module.css";
import { Input } from "./input";
import { Select } from "./select";
import { Form, Formik, FormikHelpers, useFormik } from "formik";

import { GetInTouch as IGetInTouch } from "../models/GetInTouch";
import { toDateString } from "../../util/date";

// async function postGetInTouch(values: IGetInTouch) {
//   await fetch("http://localhost:3000/api/getInTouch", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });
// }

export default function GetInTouch() {
  const today = toDateString();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      preferredDate: today,
      preferredTime: "9:00 - 9:30",
    },
    // validationSchema,
    onSubmit: (values: IGetInTouch) => {
      console.log(
        "🚀 ~ file: get-in-touch.tsx:33 ~ GetInTouch ~ values:",
        values
      );
    },
    validateOnMount: true,
    validateOnChange: true,
  });

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

      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <div className="flex flex-col sm:flex-row gap-5 mb-6">
            <Input
              label="First Name"
              sizing="xl"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <Input
              label="Last Name"
              sizing="xl"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-6">
            <Input
              label="Email"
              sizing="xl"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Input
              label="Phone"
              sizing="xl"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex mb-6">
            <Input
              label="Address"
              sizing="xl"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-6">
            <Input
              label="Preferred Date"
              type="date"
              sizing="xl"
              name="preferredDate"
              value={formik.values.preferredDate}
              onChange={formik.handleChange}
            />
            <Select
              label="Preferred Time"
              type="date"
              sizing="xl"
              name="preferredTime"
              value={formik.values.preferredTime}
              onChange={formik.handleChange}
            />
          </div>

          <Button
            type="submit"
            className="w-full sm:w-56 mx-auto bg-secondary xl:w-56 hover:bg-primary focus:ring-0 focus:outline-none transition-all ease-in-out"
          >
            <span className="text-base xl:text-xl">Send</span>
          </Button>
        </div>
      </form>
    </section>
  );
}
