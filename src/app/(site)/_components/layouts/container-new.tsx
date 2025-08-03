import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  full?: boolean;
  children: React.ReactNode;
}

export default function ContainerNew(props: ContainerProps) {
  const { className, full = true, children, ...rest } = props

  let wrapperClasses = "relative max-w-screen-xl mx-auto";

  if (full) {

  }

  const mergedClassName = twMerge(wrapperClasses, className);


  return (
    <section className={mergedClassName} {...rest}>
      {children}
    </section>
  );
}
