import React from "react";
import { twMerge } from "tailwind-merge";

export default function Container(props: any) {
  const { className, children } = props;
  const wrapperClasses =
    "relative text-center px-0 sm:px-0 md:px-0 xl:px-60 2xl:px-96";
    // max-w-[1200px]
  const mergedClassName = twMerge(wrapperClasses, className);

  return <section className={mergedClassName}>{children}</section>;
}
