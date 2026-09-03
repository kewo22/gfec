"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";

import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/app/_components/ui/input";
import Button from "@/app/_components/ui/button";
import Select from "@/app/_components/ui/select";
import { ResolveBaseUrl } from "@/app/utils/common";
import { GetInTouchModel } from "@/app/_interfaces/get-in-touch";


const dateMinusOne = (): Date => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return today;
};

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.email("Invalid Email").min(1, "Required"),
  mobile: z
    .string()
    .min(1, "Required")
    .regex(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Invalid Format"),
  preferredTime: z.string().optional(),
  preferredDate: z
    .union([z.coerce.date(), z.literal(""), z.null()])
    .optional()
    .transform((val) => (val === "" ? null : val))
    .refine((val) => !val || val >= dateMinusOne(), "Select future date"),
  createdAt: z.date(),
});

interface GetInTouchFormProps { }

export type GetInTouchFormHandle = {
  resetForm: () => void;
};

const GetInTouchForm = forwardRef<GetInTouchFormHandle, GetInTouchFormProps>(
  (props: GetInTouchFormProps, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
      handleSubmit,
      reset,
      control,
      formState: { errors },
      setValue,
    } = useForm<GetInTouchModel>({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        preferredTime: "",
        preferredDate: null,
        createdAt: new Date(),
      },
      mode: "all",
      resolver: zodResolver(schema) as Resolver<GetInTouchModel>,
      reValidateMode: "onBlur",
    });

    useImperativeHandle(ref, () => ({
      resetForm() {
        reset();
      },
    }));

    const privacyBasePolicyUrl = ResolveBaseUrl(
      process.env.NEXT_PUBLIC_VERCEL_ENV!
    );

    const onSubmit: SubmitHandler<GetInTouchModel> = (data) => {
      let tempData = { ...data, preferredDate: "", };
      if (data.preferredDate) {
        tempData = {
          ...data,
          preferredDate: new Date(data.preferredDate).toString(),
        };
      }
      setIsLoading(true);
      fetch(`${privacyBasePolicyUrl}/api/getInTouch`, {
        method: "post",
        body: JSON.stringify(tempData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
        })
        .catch(() => {
        })
        .finally(() => {
          setIsLoading(false);
          reset();
        });
    };

    const onPreferredTimeChange = (e: string) => {
      setValue("preferredTime", e);
    };

    const selectionItems = [
      {
        id: 0,
        value: "9:00 - 9:30",
        text: "9:00 - 9:30",
      },
      {
        id: 1,
        value: "9:30 - 10:00",
        text: "9:30 - 10:00",
      },
      {
        id: 2,
        value: "10:00 - 10:30",
        text: "10:00 - 10:30",
      },
      {
        id: 3,
        value: "10:30 - 11:00",
        text: "10:30 - 11:00",
      },
      {
        id: 4,
        value: "11:00 - 11:30",
        text: "11:00 - 11:30",
      },
      {
        id: 5,
        value: "11:30 - 12:00",
        text: "11:30 - 12:00",
      },
      {
        id: 6,
        value: "12:00 - 12:30",
        text: "12:00 - 12:30",
      },
      {
        id: 7,
        value: "12:30 - 1:00",
        text: "12:30 - 1:00",
      },
      {
        id: 8,
        value: "1:00 - 1:30",
        text: "1:00 - 1:30",
      },
      {
        id: 9,
        value: "1:30 - 2:00",
        text: "1:30 - 2:00",
      },
      {
        id: 10,
        value: "2:00 - 2:30",
        text: "2:00 - 2:30",
      },
      {
        id: 11,
        value: "2:30 - 3:00",
        text: "2:30 - 3:00",
      },
      {
        id: 12,
        value: "3:00 - 3:30",
        text: "3:00 - 3:30",
      },
      {
        id: 13,
        value: "3:30 - 4:00",
        text: "3:30 - 4:00",
      },
      {
        id: 14,
        value: "4:00 - 4:30",
        text: "4:00 - 4:30",
      },
      {
        id: 15,
        value: "4:30 - 5:00",
        text: "4:30 - 5:00",
      },
      {
        id: 16,
        value: "5:00 - 5:30",
        text: "5:00 - 5:30",
      },
      {
        id: 17,
        value: "5:30 - 6:00",
        text: "5:30 - 6:00",
      },
      {
        id: 18,
        value: "6:00 - 6:30",
        text: "6:00 - 6:30",
      },
      {
        id: 19,
        value: "6:30 - 7:00",
        text: "6:30 - 7:00",
      },
      {
        id: 20,
        value: "7:00 - 7:30",
        text: "7:00 - 7:30",
      },
      {
        id: 21,
        value: "7:30 - 8:00",
        text: "7:30 - 8:00",
      },
    ];

    return (
      <>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] mx-auto flex flex-col items-start gap-10"
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

          <div className="flex flex-col lg:flex-row w-full gap-10">
            <Input
              label="Preferred Date"
              type="date"
              useControllerProps={{ control, name: "preferredDate" }}
            />

            <Select
              label="Preferred Time"
              selectionItems={selectionItems}
              placeHolder="Select One"
              useControllerProps={{ control, name: "preferredTime" }}
              isDisabled={false}
              onChange={onPreferredTimeChange}
            />
          </div>

          <Button
            text="Book My Consultation"
            type="submit"
            customClass="w-full sm:w-fit mx-auto bg-navy hover:bg-navy-deep rounded-sm px-8"
            isLoading={isLoading}
          />
        </form>
      </>
    );
  }
);

GetInTouchForm.displayName = "GetInTouchForm";

export default GetInTouchForm;
