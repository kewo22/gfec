"use client";

import { Accordion as Acc } from "flowbite-react";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export default function Accordion() {
  const data = [
    {
      header: "Consultation & Support",
      description:
        "Whether you're looking to apply to a top-tier university or a local community college, our team can help you find the program that's right for you. We offer personalized counseling sessions, assistance with application materials, and access to a wide variety of resources that can help you succeed in your academic pursuits. So why wait? Contact us today to learn more about how we can help you achieve your higher education goals. Your future starts now!",
    },
    {
      header: "Enrollment Process",
      description:
        "We offer a wide range of services, including assistance with application materials, visa application, and even arranging accommodation for students. We also organize pre-departure information sessions that educate students on all the essential aspects of moving to Australia, including culture, lifestyle, and academic expectations.",
    },
    // {
    //   header: "Career Counseling",
    //   description:
    //     "Provide complete career counseling to students on the range of courses based on his/her interest such as Pathways, Foundation, Diploma, Undergraduate, Postgraduate, & English language courses.",
    // },
    {
      header: "Health Insurance",
      description:
        "Health Insurance for Overseas Students, 485 & 457 Visa Holders.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full rounded-2xl bg-transparent p-0">
        {data.map((obj, i) => {
          return (
            <div key={i} className="mb-2 w-full">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary px-4 py-2 text-left font-medium text-accent hover:bg-accent hover:text-white transition-all ease-in-out">
                      <span className="text-base">{obj.header}</span>
                      {/* <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-accent`}
                      /> */}
                      {!open && <PlusIcon className="h-5 w-5" />}
                      {open && <MinusIcon className="h-5 w-5" />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify px-4 pt-4 pb-2">
                      {obj.description}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
