import React, {
  DOMElement,
  ElementType,
  InputHTMLAttributes,
  RefAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "small"
  | "xs"
  | "xl"
  | "md"
  | "label";

interface Props {
  // interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  htmlFor?: string;
  ref?: any;
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
  md: "p",
  label: "label",
};

const typographyClasses = {
  h1: "font-bold text-4xl xl:text-5xl",
  h2: "font-bold text-3xl xl:text-4xl",
  h3: "font-bold text-2xl xl:text-3xl",
  h4: "font-bold text-xl xl:text-2xl",
  h5: "font-bold text-lg xl:text-xl",
  p: "text-base xl:text-lg 2xl:text-xl",
  md: "text-base xl:text-lg",
  small: "text-xs xl:text-sm 2xl:text-base",
  xs: "text-xs xl:text-sm",
  xl: "font-bold text-4xl lg:font-normal lg:text-5xl xl:text-7xl",
  label: "text-sm xl:text-lg",
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
  md: typographyClasses.md,
  label: typographyClasses.label,
};

// export const Typography = ({
// variant = "p",
// children,
// className,
// as,
// htmlFor = "",
// ref,
// }: Props) => {
//   const sizeClasses = sizes[variant];
//   const Tag = as || tags[variant];
//   const mergedClassName = twMerge(sizeClasses, className);

//   return (
//     <Tag htmlFor={htmlFor} className={mergedClassName} ref={ref}>
//       {children}
//     </Tag>
//   );
// };

export const Typography = forwardRef<HTMLDivElement, Props>(function Typography(
  props,
  ref
) {
  const { variant = "p", children, className, as, htmlFor = "" } = props;

  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  const mergedClassName = twMerge(sizeClasses, className);
  return (
    <Tag htmlFor={htmlFor} className={mergedClassName} ref={ref}>
      {children}
    </Tag>
  );
});
