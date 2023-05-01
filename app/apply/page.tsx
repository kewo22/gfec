"use client";

import { Button } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { Input } from "../components/input";
import * as Yup from "yup";
import { Apply as IApply } from "../models/Apply";
import { Radio } from "../components/radio";

const validationSchema = Yup.object().shape({
  // personal: Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  mob: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // firstName: Yup.number()
  //   .typeError("must be a number")
  //   .transform((value, originalValue) =>
  //     originalValue.trim() === "" ? null : value
  //   )
  //   .nullable(),
  // }),
});

export default function Apply() {
  const initialValues: IApply = {
    personal: {
      firstName: "",
      lastName: "",
      address: "",
      dob: "",
      gender: "",
      tel: "",
      mob: "",
      email: "",
      fb: "",
    },
    education: {
      school: {
        name: "",
        ol: {
          year: 0,
          type: "",
          subjects: {
            Maths: "",
            English: "",
          },
          resultsSummary: {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            s: 0,
          },
        },
        al: {
          year: 0,
          type: "",
          subjects: {
            Maths: "",
            English: "",
          },
          resultsSummary: {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            s: 0,
          },
        },
      },
      degree: null,
    },
    workExperience: {
      designation: "",
      experience: {
        month: 0,
        year: 0,
      },
    },
    budget: "0",
    comments: "",
    preference: {
      destination: [],
      migratingAlone: true,
      studyArea: [],
    },
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      tel: "",
      mob: "",
      email: "",
      fb: "",
    },
    validationSchema,
    onSubmit: async (values: any) => {},
    // validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <section className="mb-24 mx-7 lg:mx-20 xl:mx-36">
      <h1 className="mb-4 text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900">
        Study Abroad with <br />
        <span className="text-primary">
          Gordon Foreign Educational Consultancy
        </span>
      </h1>

      <p className="mb-8 font-light text-base leading-normal tracking-tight text-center text-gray-900">
        Fill in your details below to get a personalized advice
      </p>

      <div className=" ">
        <form onSubmit={formik.handleSubmit}>
          {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
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
            onBlurInput={formik.handleBlur}
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
            onBlurInput={formik.handleBlur}
          />
          <Input
            label="Address"
            sizing="xl"
            name="address"
            onChange={formik.handleChange}
            onBlurInput={formik.handleBlur}
          />
          <Input
            label="Date of Birth"
            type="date"
            sizing="xl"
            name="dob"
            value={formik.values.dob}
            error={
              formik.errors.dob && formik.touched.dob ? formik.errors.dob : ""
            }
            onChange={formik.handleChange}
            onBlurInput={formik.handleBlur}
          />

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
            onBlurInput={formik.handleBlur}
          />

          <div>
            <legend>Gender</legend>
            <Radio
              label="Male"
              name="gender"
              value="male"
              defaultChecked={false}
              onChange={formik.handleChange}
            />
            <Radio
              label="Female"
              name="gender"
              value="female"
              defaultChecked={false}
              onChange={formik.handleChange}
            />
          </div>

          <Input
            label="Mobile No"
            sizing="xl"
            name="mob"
            value={formik.values.mob}
            error={
              formik.errors.mob && formik.touched.mob ? formik.errors.mob : ""
            }
            onChange={formik.handleChange}
            onBlurInput={formik.handleBlur}
          />

          <Input
            label="Telephone No"
            sizing="xl"
            name="tel"
            value={formik.values.tel}
            error={
              formik.errors.tel && formik.touched.tel ? formik.errors.tel : ""
            }
            onChange={formik.handleChange}
            onBlurInput={formik.handleBlur}
          />

          <Input
            label="Facebook"
            sizing="xl"
            name="fb"
            value={formik.values.fb}
            onChange={formik.handleChange}
            onBlurInput={formik.handleBlur}
          />

          <Button
            type="submit"
            className="w-full sm:w-56 mx-auto mb-6"
            gradientMonochrome="info"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
