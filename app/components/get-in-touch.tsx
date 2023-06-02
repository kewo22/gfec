"use client";

import React, { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import * as Yup from "yup";

import { Input } from "./input";
import { Select } from "./select";
import { useFormik } from "formik";

import { GetInTouch as IGetInTouch } from "../models/GetInTouch";
import { toDateString } from "../../util/date";

// import styles from "../page.module.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/g, {
      message: "Invalid phone",
      excludeEmptyString: true,
    })
    .required("Required"),
});

async function postGetInTouch(values: IGetInTouch) {
  const url = `${process.env.API_BASE_URL}/getintouch` || "";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    mode: "no-cors",
  });
}

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTextClass, setSuccessTextClass] = useState("top-0 opacity-0");

  const today = toDateString();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: today,
    preferredTime: "9:00 - 9:30",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: IGetInTouch) => {
      setIsSubmitting(true);
      await postGetInTouch(values);
      setIsSubmitting(false);
      resetForm();
      setSuccessTextClass("top-12 opacity-100");

      setTimeout(() => {
        setSuccessTextClass("top-0 opacity-0");
      }, 5000);
    },
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
  });

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, false, false);
  };

  const resetForm = () => {
    formik.resetForm();
  };

  return (
    <section className="pt-20 mb-20 mx-7 lg:mx-20 xl:mx-36" id="get-in-touch">
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
        Get in touch
      </h1>

      <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-center lg:px-0 mb-5">
        Thank you for your interest in our organization and the services we
        offer. We would be more than happy to arrange a FREE information session
        for you.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="relative">
          {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
          <div className="flex flex-col sm:flex-row gap-5 mb-6">
            <Input
              label="First Name"
              sizing="xl"
              name="firstName"
              value={formik.values.firstName}
              error={
                formik.errors.firstName && formik.touched.firstName
                  ? formik.errors.firstName
                  : ""
              }
              onChange={formik.handleChange}
              onFocusInput={onFocus}
              onBlurInput={onBlur}
            />
            <Input
              label="Last Name"
              sizing="xl"
              name="lastName"
              value={formik.values.lastName}
              error={
                formik.errors.lastName && formik.touched.lastName
                  ? formik.errors.lastName
                  : ""
              }
              onChange={formik.handleChange}
              onFocusInput={onFocus}
              onBlurInput={onBlur}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-6">
            <Input
              label="Email"
              sizing="xl"
              name="email"
              value={formik.values.email}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }
              onChange={formik.handleChange}
              onFocusInput={onFocus}
              onBlurInput={onBlur}
            />
            <Input
              label="Phone"
              sizing="xl"
              name="phone"
              value={formik.values.phone}
              error={
                formik.errors.phone && formik.touched.phone
                  ? formik.errors.phone
                  : ""
              }
              onChange={formik.handleChange}
              onFocusInput={onFocus}
              onBlurInput={onBlur}
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

          <div className="relative">
            <Button
              type="submit"
              className="w-full sm:w-56 mx-auto bg-secondary xl:w-56 hover:bg-primary focus:ring-0 focus:outline-none transition-all ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner size="md" className="ml-2" />}
              {!isSubmitting && <span className="text-base">Send</span>}
            </Button>
            <div
              className={`block text-center w-full mx-auto text-secondary absolute transition-all duration-1000 ease-in-out z-[-1] ${successTextClass}`}
            >
              Successfully Submitted
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
