import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { className, children, ...rest } = props
  const wrapperClasses =
    "relative text-center px-0 sm:px-0 md:px-0 xl:px-60 2xl:px-96";
  const mergedClassName = twMerge(wrapperClasses, className);

  return (
    <section className={mergedClassName} {...rest}>
      {children}
    </section>
  );
}
