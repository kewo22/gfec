"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Card, Label, Select, Spinner } from "flowbite-react";
import * as Yup from "yup";

import { Input } from "../components/input";
import { Radio } from "../components/radio";
import { CheckBox } from "../components/checkbox";
import { COUNTRIES } from "../constants/countries.constants";
import { TextArea } from "../components/textarea";

async function postApplicationForm(values: any) {
  const url = `${process.env.API_BASE_URL}/applicationform` || "";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    mode: "no-cors",
  });
}

const validationSchema = Yup.object().shape({
  personal: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dob: Yup.date().max(new Date(), "Invalid Date").required("Required"),
    gender: Yup.string().required("Required"),
    mob: Yup.string()
      .required("Required")
      .matches(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Invalid mobile number"),
    email: Yup.string().email("Invalid email").required("Required"),
  }),
});

export default function Apply() {
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

  const [idDegreeCompleted, setIdDegreeCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTextClass, setSuccessTextClass] = useState("top-0 opacity-0");

  const formik = useFormik({
    initialValues: {
      personal: {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        tel: "",
        mob: "",
        email: "",
        fb: "",
        address: "",
      },
      education: {
        school: "",
        ol: {
          year: 0,
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
          year: 0,
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
        degree: {
          isCompleted: "0",
          year: 0,
          stream: "",
          affiliatedUniversity: "",
          gpa: "",
          class: "",
        },
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
    validationSchema,
    onSubmit: async (values: any) => {
      setIsSubmitting(true);
      await postApplicationForm(values);
      setIsSubmitting(false);
      setSuccessTextClass("top-12 opacity-100");
      setTimeout(() => {
        setSuccessTextClass("top-0 opacity-0");
      }, 5000);
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

  const onDegreeCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value === "0" ? false : true;
    setIdDegreeCompleted(isChecked);
    formik.handleChange(e);
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
                name="personal.firstName"
                value={formik.values.personal.firstName}
                error={
                  formik.errors.personal?.firstName &&
                  formik.touched.personal?.firstName
                    ? formik.errors.personal!.firstName
                    : ""
                }
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />
              <Input
                label="Last Name"
                sizing="xl"
                name="personal.lastName"
                value={formik.values.personal.lastName}
                error={
                  formik.errors.personal?.lastName &&
                  formik.touched.personal?.lastName
                    ? formik.errors.personal!.lastName
                    : ""
                }
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />
            </div>

            <Input
              label="Address"
              sizing="xl"
              name="personal.address"
              value={formik.values.personal.address}
              onChange={formik.handleChange}
              onBlurInput={formik.handleBlur}
            />

            <div className="flex flex-col sm:flex-row gap-5">
              <Input
                label="Date of Birth"
                type="date"
                sizing="xl"
                name="personal.dob"
                value={formik.values.personal.dob}
                error={
                  formik.errors.personal?.dob && formik.touched.personal?.dob
                    ? formik.errors.personal!.dob
                    : ""
                }
                className="flex-grow"
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />

              <div className="flex-[1_0_50%] flex flex-col">
                <legend className="text-sm font-medium text-gray-900">
                  Gender
                </legend>
                <div className="flex items-center">
                  <Radio
                    label="Male"
                    name="personal.gender"
                    value="male"
                    className="mr-2"
                    error={
                      formik.errors.personal?.gender &&
                      formik.touched.personal?.gender
                    }
                    defaultChecked={false}
                    onChange={formik.handleChange}
                  />
                  <Radio
                    label="Female"
                    name="personal.gender"
                    value="female"
                    error={
                      formik.errors.personal?.gender &&
                      formik.touched.personal?.gender
                    }
                    defaultChecked={false}
                    onChange={formik.handleChange}
                  />
                </div>
                {Boolean(formik.touched.personal?.gender) && (
                  <small className="text-red-600">
                    {formik.errors.personal?.gender || ""}
                  </small>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Input
                label="Mobile No"
                sizing="xl"
                name="personal.mob"
                value={formik.values.personal.mob}
                error={
                  formik.errors.personal?.mob && formik.touched.personal?.mob
                    ? formik.errors.personal!.mob
                    : ""
                }
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />

              <Input
                label="Telephone No"
                sizing="xl"
                name="personal.tel"
                value={formik.values.personal.tel}
                // error={
                //   formik.errors.tel && formik.touched.tel
                //     ? formik.errors.tel
                //     : ""
                // }
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Input
                label="Email"
                sizing="xl"
                name="personal.email"
                value={formik.values.personal.email}
                error={
                  formik.errors.personal?.email &&
                  formik.touched.personal?.email
                    ? formik.errors.personal!.email
                    : ""
                }
                onChange={formik.handleChange}
                onBlurInput={formik.handleBlur}
              />

              <Input
                label="Facebook"
                sizing="xl"
                name="personal.fb"
                value={formik.values.personal.fb}
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
              name="education.school"
              value={formik.values.education.school}
              // error={
              //   formik.errors.school && formik.touched.school
              //     ? formik.errors.school
              //     : ""
              // }
              className="mb-3"
              onChange={formik.handleChange}
              onBlurInput={formik.handleBlur}
            />

            <div className="lg:flex lg:flex-row lg:gap-5">
              <div className="relative rounded-lg border-[1px] border-[#d1d5db] border-1 p-4 mb-5 lg:mb-0 flex-1">
                <h1 className="font-semibold text-gray-900 m-0 absolute top-[-12.5px] bg-white w-[75px] flex justify-center">
                  O Level
                </h1>
                <div className="flex items-center">
                  <div className="flex flex-col mr-5 mb-5">
                    <Label
                      htmlFor="olYear"
                      value="Year"
                      className="font-medium text-gray-900"
                    />
                    <Select
                      id="olYear"
                      name="education.ol.year"
                      defaultValue={formik.values.education.ol.year}
                      onChange={formik.handleChange}
                    >
                      <option value={0}>Select year</option>
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
                      Type
                    </legend>
                    <div className="flex flex-grow">
                      <Radio
                        label="Local"
                        name="education.ol.type"
                        value="local"
                        className="flex items-center mr-2"
                        defaultChecked={false}
                        onChange={formik.handleChange}
                      />
                      <Radio
                        label="London"
                        name="education.ol.type"
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
                      name="education.ol.subjects[0].english"
                      value={formik.values.education.ol.subjects[0].english}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="Mathematics"
                      sizing="xl"
                      name="education.ol.subjects[1].mathematics"
                      value={formik.values.education.ol.subjects[1].mathematics}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <Input
                      label="A"
                      sizing="xl"
                      name="education.ol.results[0].a"
                      value={formik.values.education.ol.results[0].a}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="B"
                      sizing="xl"
                      name="education.ol.results[1].b"
                      value={formik.values.education.ol.results[1].b}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="C"
                      sizing="xl"
                      name="education.ol.results[2].c"
                      value={formik.values.education.ol.results[2].c}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="D"
                      sizing="xl"
                      name="education.ol.results[3].d"
                      value={formik.values.education.ol.results[3].d}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="S"
                      sizing="xl"
                      name="education.ol.results[4].s"
                      value={formik.values.education.ol.results[4].s}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg border-[1px] border-[#d1d5db] border-1 p-4 mb-5 lg:mb-0 flex-1">
                <h1 className="font-semibold text-gray-900 m-0 absolute top-[-12.5px] bg-white w-[75px] flex justify-center">
                  A Level
                </h1>
                <div className="flex items-center">
                  <div className="flex flex-col mr-5 mb-5">
                    <Label
                      htmlFor="alYear"
                      value="Year"
                      className="font-medium text-gray-900"
                    />
                    <Select
                      id="alYear"
                      name="education.al.year"
                      defaultValue={formik.values.education.al.year}
                      onChange={formik.handleChange}
                    >
                      <option value={0}>Select year</option>
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
                      Type
                    </legend>
                    <div className="flex flex-grow">
                      <Radio
                        label="Local"
                        name="education.al.type"
                        value="local"
                        className="flex items-center mr-2"
                        defaultChecked={false}
                        onChange={formik.handleChange}
                      />
                      <Radio
                        label="London"
                        name="education.al.type"
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
                      name="education.al.subjects[0].english"
                      value={formik.values.education.al.subjects[0].english}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="Mathematics"
                      sizing="xl"
                      name="education.al.subjects[1].mathematics"
                      value={formik.values.education.al.subjects[1].mathematics}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <Input
                      label="A"
                      sizing="xl"
                      name="education.al.results[0].a"
                      value={formik.values.education.al.results[0].a}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="B"
                      sizing="xl"
                      name="education.al.results[1].b"
                      value={formik.values.education.al.results[1].b}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="C"
                      sizing="xl"
                      name="education.al.results[2].c"
                      value={formik.values.education.al.results[2].c}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="D"
                      sizing="xl"
                      name="education.al.results[3].d"
                      value={formik.values.education.al.results[3].d}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                    <Input
                      label="S"
                      sizing="xl"
                      name="education.al.results[4].s"
                      value={formik.values.education.al.results[4].s}
                      className=""
                      onChange={formik.handleChange}
                      onBlurInput={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg border-[1px] border-[#d1d5db] border-1 p-4 mb-5 lg:mb-0 flex-1">
                <h1 className="font-semibold text-gray-900 m-0 absolute top-[-12.5px] bg-white w-[75px] flex justify-center">
                  Degree
                </h1>

                <div className="flex flex-col self-stretch mb-3">
                  <legend className="text-sm font-medium text-gray-900 mr-2">
                    Have you completed degree ?
                  </legend>
                  <div className="flex flex-grow">
                    <Radio
                      label="Yes"
                      name="education.degree.isCompleted"
                      value={1}
                      className="flex items-center mr-2"
                      defaultChecked={false}
                      onChange={(e) => {
                        onDegreeCompletedChange(e);
                      }}
                    />
                    <Radio
                      label="No"
                      name="education.degree.isCompleted"
                      value={0}
                      className="flex items-center"
                      defaultChecked={true}
                      onChange={(e) => {
                        onDegreeCompletedChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <Label
                    htmlFor="alYear"
                    value="Year"
                    className="font-medium text-gray-900"
                  />
                  <Select
                    id="alYear"
                    name="education.degree.year"
                    defaultValue={formik.values.education.degree.year}
                    onChange={formik.handleChange}
                    disabled={!idDegreeCompleted}
                  >
                    <option value={0}>Select year</option>
                    {getYears().map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </Select>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 mb-5">
                  <Input
                    label="Stream"
                    sizing="xl"
                    name="education.degree.stream"
                    value={formik.values.education.degree.stream}
                    disabled={!idDegreeCompleted}
                    // error={
                    //   formik.errors.personal.firstName && formik.touched.firstName
                    //     ? formik.errors.firstName
                    //     : ""
                    // }
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="Affiliated University"
                    sizing="xl"
                    name="education.degree.affiliatedUniversity"
                    value={formik.values.education.degree.affiliatedUniversity}
                    disabled={!idDegreeCompleted}
                    // error={
                    //   formik.errors.personal.firstName && formik.touched.firstName
                    //     ? formik.errors.firstName
                    //     : ""
                    // }
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Input
                    label="GPA"
                    sizing="xl"
                    name="education.degree.gpa"
                    value={formik.values.education.degree.gpa}
                    disabled={!idDegreeCompleted}
                    // error={
                    //   formik.errors.personal.firstName && formik.touched.firstName
                    //     ? formik.errors.firstName
                    //     : ""
                    // }
                    onChange={formik.handleChange}
                    onBlurInput={formik.handleBlur}
                  />
                  <Input
                    label="Class"
                    sizing="xl"
                    name="education.degree.class"
                    value={formik.values.education.degree.class}
                    disabled={!idDegreeCompleted}
                    // error={
                    //   formik.errors.personal.firstName && formik.touched.firstName
                    //     ? formik.errors.firstName
                    //     : ""
                    // }
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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

            <div className="flex flex-col self-stretch">
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

          <div className="relative">
            <Button
              type="submit"
              className="w-full sm:w-56 mx-auto bg-primary xl:w-56 hover:bg-secondary focus:ring-0 focus:outline-none transition-all ease-in-out mb-6"
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner size="md" className="ml-2" />}
              {!isSubmitting && (
                <span className="text-base">Submit Your Details</span>
              )}
            </Button>
            <div
              className={`block text-center w-full mx-auto text-secondary absolute transition-all duration-1000 ease-in-out z-[-1] ${successTextClass}`}
            >
              Successfully Submitted
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
