"use client";
import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

export default function ApplyForm() {
  return (
    <section className="">
      <h1 className="font-bold leading-normal tracking-tight text-center sm:text-left text-gray-900 mb-5">
        Study Abroad with <br />
        <span className="text-primary">
          Gordon Foreign Educational Consultancy
        </span>
      </h1>

      <p className="mb-8 font-light text-base leading-normal tracking-tight text-center text-gray-900">
        Fill in your details below to get a personalised advice
      </p>

      <div className="mx-10 sm:mx-32">
        <div className="mb-6">
          <div className="block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="xl" />
        </div>
        <div className="mb-6">
          <div className="block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="xl" />
        </div>
        <div className="mb-6">
          <div className="block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="xl" />
        </div>
        <div className="mb-6">
          <div className="block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="xl" />
        </div>
        <div className="mb-6">
          <div className="block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="xl" />
        </div>
        <div className="mb-6">
          <div className="block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="xl" />
        </div>
        <Button
          className="w-full sm:w-56 mx-auto mb-6"
          gradientMonochrome="info"
        >
          Submit
        </Button>
      </div>
    </section>
  );
}
