"use client";

import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { date, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Container from "../_components/layouts/container";
import SectionTitle from "../_components/section-title";
import Input from "@/app/_components/ui/input";
import RadioButton from "@/app/_components/ui/radio";
import Button from "@/app/_components/ui/button";
import { Typography } from "@/app/_components/ui/typography";

export interface ApplicationFormModel {
  firstName: string;
  lastName: string;
  address?: string;
  dob: Date | null;
  gender: string;
  //   email: string;
  //   mobile: string;
  //   preferredTime?: string;
}

const schema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  address: string(),
  dob: date().required("Required"),
  gender: string().required("Required"),
  //   email: string().email("Invalid Email").required("Required"),
  //   mobile: string()
  //     .required("Required")
  //     .matches(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Invalid Format"),
  //   preferredTime: string().optional(),
});

export default function ApplyNow() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ApplicationFormModel>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      dob: null,
      gender: "",
      //   email: "",
      //   mobile: "",
      //   preferredTime: "",
    },
    mode: "all",
    resolver: yupResolver<ApplicationFormModel>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<ApplicationFormModel> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-slate-100">
      <Container className="mx-5 xl:mx-auto py-20">
        <SectionTitle title="Study Abroad with Gordon Foreign Educational Consultancy" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <Input
              label="First Name"
              type="text"
              useControllerProps={{ control, name: "firstName" }}
            />
            <Input
              label="Last Name"
              type="text"
              useControllerProps={{ control, name: "lastName" }}
            />
          </div>
          <Input
            label="Address"
            type="text"
            useControllerProps={{ control, name: "address" }}
          />
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-grow">
              <Input
                label="Date of Birth"
                type="date"
                useControllerProps={{ control, name: "dob" }}
              />
            </div>
            <div className="flex flex-row gap-5 items-center flex-grow">
              <Typography className="text-left">Gender</Typography>
              <div className="flex flex-row gap-5">
                <RadioButton
                  label="Male"
                  value="male"
                  useControllerProps={{ control, name: "gender" }}
                />
                <RadioButton
                  label="Female"
                  value="female"
                  useControllerProps={{ control, name: "gender" }}
                />
              </div>
            </div>
          </div>

          <Button text="Save" type="submit" customClass="w-[150px] mx-auto" />
        </form>
      </Container>
    </section>
  );
}
