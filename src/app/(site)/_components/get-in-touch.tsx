"use client";

import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Container from "./layouts/container";
import { Typography } from "@/app/_components/ui/typography";
import Input from "@/app/_components/ui/input";
import Button from "@/app/_components/ui/button";

export interface GetInTouchModel {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

const schema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  email: string().email("Invalid Email").required("Required"),
  mobile: string()
    .required("Required")
    .matches(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Invalid mobile number"),
});

export default function GetInTouch() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<GetInTouchModel>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    },
    mode: "all",
    resolver: yupResolver<GetInTouchModel>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<GetInTouchModel> = (data) => console.log(data);

  return (
    <Container className="mx-5 xl:mx-auto py-12">
      <Typography variant="h2" className="text-secondary mb-10">
        Get in <span className="text-primary">Touch</span>
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-5"
      >
        <div className="flex flex-col lg:flex-row w-full gap-10">
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

        <div className="flex flex-col lg:flex-row w-full gap-10">
          <Input
            label="Email"
            type="text"
            useControllerProps={{ control, name: "email" }}
          />

          <Input
            label="Mobile"
            type="text"
            useControllerProps={{ control, name: "mobile" }}
          />
        </div>

        <Button text="Save" type="submit" customClass="w-[150px] mx-auto" />
      </form>
    </Container>
  );
}
