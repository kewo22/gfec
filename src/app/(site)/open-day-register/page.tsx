"use client";

import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { array, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import Input from "@/app/_components/ui/input";
import Button from "@/app/_components/ui/button";
import { Typography } from "@/app/_components/ui/typography";
import Checkboxes from "@/app/_components/ui/checkbox";
import { ResolveBaseUrl } from "@/app/utils/common";
import { OpenDayRegisterModal } from "@/app/_interfaces/open-day-register";

import Container from "../_components/layouts/container";
import ApplyFormLayout from "../_components/layouts/apply-form-layout";
import SectionTitle from "../_components/section-title";

const schema = object().shape({
  fullName: string().required("Required"),
  email: string().email("Invalid Email").required("Required"),
  mobile: string()
    .required("Required")
    .matches(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Invalid Format"),
  recentEducationQualification: string().optional(),
  countries: array().optional(),
});

const defaultValues = {
  fullName: "",
  email: "",
  mobile: "",
  recentEducationQualification: "",
  countries: [],
};

export default function OpenDayRegister() {
  const privacyBasePolicyUrl = ResolveBaseUrl(
    process.env.NEXT_PUBLIC_VERCEL_ENV!
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OpenDayRegisterModal>({
    defaultValues,
    mode: "all",
    resolver: yupResolver<OpenDayRegisterModal>(schema),
    reValidateMode: "onBlur",
  });

  const countries = [
    "Spain",
    "France",
    "Singapore",
    "Malta",
    "UK",
    "Canada",
    "Germany",
    "Dubai",
  ];

  const onSubmit: SubmitHandler<OpenDayRegisterModal> = (data) => {
    let tempData = data;
    const countries = [...data.countries || []]?.filter((obj) => obj);
    tempData = { ...data, countries: [...countries || []] };
    setIsLoading(true);
    fetch(`${privacyBasePolicyUrl}/api/promo-register`, {
      method: "post",
      body: JSON.stringify(tempData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsSuccess(false);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
        reset(
          { ...defaultValues },
          {
            keepDefaultValues: true,
          }
        );
      });
  };

  return (
    <section className="bg-slate-100">
      <Container className="mx-5 xl:mx-auto py-20">
        <SectionTitle title="Register now" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-14"
        >
          <ApplyFormLayout icon={faUserTie} title="Your details">
            <Input
              label="Full Name"
              type="text"
              isRequired={true}
              useControllerProps={{ control, name: "fullName" }}
            />

            <Input
              label="Email"
              type="text"
              isRequired={true}
              useControllerProps={{ control, name: "email" }}
            />

            <Input
              label="Mobile"
              type="text"
              isRequired={true}
              useControllerProps={{ control, name: "mobile" }}
            />

            <div className="">
              <Input
                label="Recent Education Qualification"
                type="text"
                isRequired={false}
                useControllerProps={{ control, name: "recentEducationQualification" }}
              />
              <Typography variant="small" className="text-gray-400 text-left ml-0 sm:ml-3 mt-1">
                Eg. O/L, A/L, Diploma, Bachelors
              </Typography>
            </div>

            <div className="flex flex-col items-start gap-3">
              <Typography variant="label" className="font-bold">
                Preferred Countries
              </Typography>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Checkboxes
                  options={countries}
                  control={control}
                  name="countries"
                />
              </div>
            </div>
          </ApplyFormLayout>

          <div className="flex flex-col gap-2">
            <Button
              text="Save"
              type="submit"
              customClass="w-[150px] mx-auto"
              isLoading={isLoading}
            />
            {
              (isSuccess && !isLoading) &&
              <Typography variant="p" className="font-bold text-green-900">
                Successfully Submitted
              </Typography>
            }
          </div>
        </form>
      </Container>
    </section>
  );
}
{/* <div className="text-green-900">Successfully Submitted</div> */ }
