"use client";

import { Button, Card, Label, Select } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { Input } from "../components/input";
import * as Yup from "yup";
import { Apply as IApply } from "../models/Apply";
import { Radio } from "../components/radio";
import { NumberInput } from "../components/number-input";
import { CheckBox } from "../components/checkbox";
import { COUNTRIES } from "../constants/countries.constants";
import { TextArea } from "../components/textarea";

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

  const studyPreferences = [
    "Computing",
    "Business",
    "Biomedical Science",
    "Law",
    "Civil Engineering",
    "Study Medicine",
    "Hotel Management",
    "Quantity Surveying",
    "Teacher Training",
    "Foundation",
    "LLB",
    "MBA",
    "MSC",
    "IT Top-Up",
    "Business Top-Up",
    "Civil Top-Up",
    "Qs Top-Up",
    "Biomedical Science Top-Up",
  ];

  const resultsGroup = { subject: "", result: "" };
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

      school: "",
      ol: {
        year: "",
        type: "",
        subjects: [
          {
            english: "",
          },
          {
            mathematics: "",
          },
        ],
        results: [
          {
            a: 0,
          },
          {
            b: 0,
          },
          {
            c: 0,
          },
          {
            d: 0,
          },
          {
            s: 0,
          },
        ],
      },
      al: {
        year: "",
        type: "",
        subjects: [
          {
            english: "",
          },
          {
            mathematics: "",
          },
        ],
        results: [
          {
            a: 0,
          },
          {
            b: 0,
          },
          {
            c: 0,
          },
          {
            d: 0,
          },
          {
            s: 0,
          },
        ],
      },
      preference: {
        study: [],
        destination: "",
      },
      otherInfo: {
        budget: "",
        comment: "",
      },
    },
    // validationSchema,
    onSubmit: async (values: any) => {
      console.log(values);
    },
    // validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
  });

  const getYears = () => {
    const years = [];
    for (let i = 0; i < 10; i++) {
      const d = new Date();
      const pastYear = d.getFullYear() - i;
      years.push(pastYear);
    }
    return years;
  };

  const onStudyPreferenceChange = (formik: any) => {
    console.log(formik);
    // formik.handleChange();
  };

  return (
    <section className="mt-10 lg:mt-20">
      <h1 className="mb-4 text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900">
        Study Abroad with <br />
        <span className="text-primary">
          Gordon Foreign Educational Consultancy
        </span>
      </h1>

      <p className="mb-8 font-light text-base leading-normal tracking-tight text-center text-gray-900">
        Fill in your details below to get a personalized advice
      </p>

      <div className="mx-5 sm:mx-16 xl:mx-28 2xl:mx-64">
        <form onSubmit={formik.handleSubmit}>
          {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}

          <Card className="mb-5">
            <h5 className="text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 m-0 mb-2">
              <p>Personal Information</p>
            </h5>

            <div className="flex flex-col sm:flex-row gap-5">
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
            </div>

            <Input
              label="Address"
              sizing="xl"
              name="address"
              onChange={formik.handleChange}
              onBlurInput={formik.handleBlur}
            />

            <div className="flex flex-col sm:flex-row gap-5">
              <Input
                label="Date of Birth"
                type="date"
                sizing="xl"
                name="dob"
                value={formik.values.dob}
                error={
                  formik.errors.dob && formik.touched.dob
                    ? formik.errors.dob
                    : ""
                }
                className="flex-grow"
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />

              <div className="flex-[1_0_50%] flex flex-col self-stretch">
                <legend className="text-sm font-medium text-gray-900">
                  Gender
                </legend>
                <div className="flex items-center h-full">
                  <Radio
                    label="Male"
                    name="gender"
                    value="male"
                    className="mr-2"
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
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Input
                label="Mobile No"
                sizing="xl"
                name="mob"
                value={formik.values.mob}
                error={
                  formik.errors.mob && formik.touched.mob
                    ? formik.errors.mob
                    : ""
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
                  formik.errors.tel && formik.touched.tel
                    ? formik.errors.tel
                    : ""
                }
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
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

              <Input
                label="Facebook"
                sizing="xl"
                name="fb"
                value={formik.values.fb}
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />
            </div>
          </Card>

          <Card className="mb-5">
            <h5 className="text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 m-0 mb-2">
              <p>Education Details</p>
            </h5>

            <Input
              label="School"
              sizing="xl"
              name="school"
              value={formik.values.school}
              error={
                formik.errors.school && formik.touched.school
                  ? formik.errors.school
                  : ""
              }
              className="mb-3"
              onChange={formik.handleChange}
              onBlurInput={formik.handleBlur}
            />

            <div className="relative rounded-lg border-[1px] border-[#d1d5db] border-1 p-4 mb-3">
              <h1 className="font-semibold text-gray-900 m-0 absolute top-[-12.5px] bg-white w-[75px] flex justify-center">O Level</h1>
              <div className="flex items-center">
                <div className="flex flex-col mr-5 mb-5">
                  <Label
                    htmlFor="olYear"
                    value="Year"
                    className="font-medium text-gray-900"
                  />
                  <Select
                    id="olYear"
                    name="ol.year"
                    defaultValue={formik.values.ol.year}
                    onChange={formik.handleChange}
                  >
                    {getYears().map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </Select>
                </div>
                <div className="flex flex-col self-stretch mb-5">
                  <legend className="text-sm font-medium text-gray-900">
                    Gender
                  </legend>
                  <div className="flex flex-grow">
                    <Radio
                      label="Local"
                      name="ol.type"
                      value="local"
                      className="flex items-center mr-2"
                      defaultChecked={false}
                      onChange={formik.handleChange}
                    />
                    <Radio
                      label="London"
                      name="ol.type"
                      value="london"
                      className="flex items-center"
                      defaultChecked={false}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-sm font-medium text-gray-900">Results</h1>
                <div className="flex gap-4 mb-5">
                  <Input
                    label="English"
                    sizing="xl"
                    name="ol.subjects[0].english"
                    value={formik.values.ol.subjects[0].english}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="Mathematics"
                    sizing="xl"
                    name="ol.subjects[1].mathematics"
                    value={formik.values.ol.subjects[1].mathematics}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-row gap-4">
                  <Input
                    label="A"
                    sizing="xl"
                    name="ol.results[0].a"
                    value={formik.values.ol.results[0].a}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="A"
                    sizing="xl"
                    name="ol.results[0].a"
                    value={formik.values.ol.results[0].a}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="A"
                    sizing="xl"
                    name="ol.results[0].a"
                    value={formik.values.ol.results[0].a}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="A"
                    sizing="xl"
                    name="ol.results[0].a"
                    value={formik.values.ol.results[0].a}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="A"
                    sizing="xl"
                    name="ol.results[0].a"
                    value={formik.values.ol.results[0].a}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                </div>
              </div>
            </div>

            <div className="relative rounded-lg border-[1px] border-[#d1d5db] border-1 p-4 mb-3">
              <h1 className="font-semibold text-gray-900 m-0 absolute top-[-12.5px] bg-white w-[75px] flex justify-center">A Level</h1>
              <div className="flex items-center">
                <div className="flex flex-col mr-5 mb-5">
                  <Label
                    htmlFor="alYear"
                    value="Year"
                    className="font-medium text-gray-900"
                  />
                  <Select
                    id="alYear"
                    name="al.year"
                    defaultValue={formik.values.al.year}
                    onChange={formik.handleChange}
                  >
                    {getYears().map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </Select>
                </div>
                <div className="flex flex-col self-stretch mb-5">
                  <legend className="text-sm font-medium text-gray-900">
                    Gender
                  </legend>
                  <div className="flex flex-grow">
                    <Radio
                      label="Local"
                      name="al.type"
                      value="local"
                      className="flex items-center mr-2"
                      defaultChecked={false}
                      onChange={formik.handleChange}
                    />
                    <Radio
                      label="London"
                      name="al.type"
                      value="london"
                      className="flex items-center"
                      defaultChecked={false}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-sm font-medium text-gray-900">Results</h1>
                <div className="flex gap-4 mb-5">
                  <Input
                    label="English"
                    sizing="xl"
                    name="al.subjects[0].english"
                    value={formik.values.al.subjects[0].english}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="Mathematics"
                    sizing="xl"
                    name="al.subjects[1].mathematics"
                    value={formik.values.al.subjects[1].mathematics}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-row gap-4">
                  <Input
                    label="A"
                    sizing="xl"
                    name="al.results[0].a"
                    value={formik.values.al.results[0].a}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="B"
                    sizing="xl"
                    name="al.results[1].b"
                    value={formik.values.al.results[0].b}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="C"
                    sizing="xl"
                    name="al.results[2].c"
                    value={formik.values.al.results[0].c}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="D"
                    sizing="xl"
                    name="al.results[3].d"
                    value={formik.values.al.results[0].d}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="S"
                    sizing="xl"
                    name="al.results[4].s"
                    value={formik.values.al.results[0].s}
                    className=""
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-5">
            <h5 className="text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 m-0">
              <p>Preferences</p>
            </h5>

            <div className="flex flex-col self-stretch">
              <h1 className="font-semibold text-gray-900 mb-3">Study Area</h1>
              <div className="grid grid-cols-2 gap-3">
                {studyPreferences.map((studyPreference, i) => {
                  return (
                    <CheckBox
                      key={i}
                      label={studyPreference}
                      value={studyPreference}
                      name={"preference.study"}
                      isChecked={false}
                      className="flex items-center"
                      onChange={formik.handleChange}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col self-stretch mb-5">
              <h1 className="font-semibold text-gray-900 m-0 mb-3">
                Destination
              </h1>
              <Select
                id="proffered-destination"
                name="preference.destination"
                defaultValue={formik.values.preference.destination}
                onChange={formik.handleChange}
              >
                {COUNTRIES.map((country) => {
                  return (
                    <option key={country.id} value={country.country}>
                      {country.country}
                    </option>
                  );
                })}
              </Select>
            </div>
          </Card>

          <Card className="mb-5">
            <h5 className="text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 m-0">
              <p>Other Information</p>
            </h5>
            <div className="flex flex-col self-stretch">
              <legend className="text-sm font-medium text-gray-900 mb-3">
                Budget
              </legend>
              <div className="flex flex-grow">
                <Radio
                  label="Less than 4Mn"
                  name="otherInfo.budget"
                  value="<4mn"
                  className="flex items-center mr-2"
                  defaultChecked={false}
                  onChange={formik.handleChange}
                />
                <Radio
                  label="Greater than 4Mn"
                  name="otherInfo.budget"
                  value=">4mn"
                  className="flex items-center"
                  defaultChecked={false}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <TextArea
              label="Comments"
              name="otherInfo.comment"
              onChange={formik.handleChange}
            />
          </Card>

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
