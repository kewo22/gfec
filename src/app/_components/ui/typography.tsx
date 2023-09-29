import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "xs" | "xl";

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "p",
  small: "p",
  xs: "p",
  xl: "p",
};

const typographyClasses = {
  h1: "font-bold text-4xl xl:text-5xl",
  h2: "font-bold text-3xl xl:text-4xl",
  h3: "font-bold text-2xl xl:text-3xl",
  h4: "font-bold text-xl xl:text-2xl",
  h5: "font-bold text-lg xl:text-xl",
  p: "text-base xl:text-lg 2xl:text-xl",
  small: "text-xs xl:text-sm 2xl:text-base",
  xs: "text-xs xl:text-sm",
  xl: "text-5xl xl:text-7xl",
};

const sizes: Record<Variant, string> = {
  h1: typographyClasses.h1,
  h2: typographyClasses.h2,
  h3: typographyClasses.h3,
  h4: typographyClasses.h4,
  h5: typographyClasses.h5,
  p: typographyClasses.p,
  small: typographyClasses.small,
  xs: typographyClasses.xs,
  xl: typographyClasses.xl,
};

export const Typography = ({
  variant = "p",
  children,
  className,
  as,
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  const mergedClassName = twMerge(sizeClasses, className);

  return <Tag className={mergedClassName}> {children} </Tag>;
};
