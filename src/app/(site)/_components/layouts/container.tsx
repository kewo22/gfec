import React from "react";
import { twMerge } from "tailwind-merge";

export default function Container(props: any) {
  const { className, children } = props;
  const wrapperClasses =
    "relative text-center max-w-[1200px]";
  const mergedClassName = twMerge(wrapperClasses, className);

  return <section className={mergedClassName}>{children}</section>;
}
