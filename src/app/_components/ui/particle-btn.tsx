"use client";

import { twMerge } from "tailwind-merge";
import { Spinner } from "./spinner";

type ButtonProps = {
  // text?: string;
  type?: "submit" | "reset" | "button";
  buttonStyle?: string;
  size?: "xs" | "sm" | "md" | "lg";
  customClass?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: any;
  onClick?: () => void;
};

export default function ParticleButton(props: ButtonProps) {
  const {
    // text,
    type = "button",
    size = "sm",
    buttonStyle,
    customClass = "",
    isDisabled = false,
    children,
    isLoading = false,
    onClick,
  } = props;

  const baseClass = "destination-learn-more-btn";

  const disabledClass =
    "disabled:bg-slate-900 disabled:cursor-default disabled:text-white/50";

  let className = "";

  switch (size) {
    case "xs":
      className = twMerge(className, "px-3 py-2 text-xs");
      break;
    case "sm":
      className = twMerge(className, "px-5 py-3 text-sm");
      break;
    case "md":
      className = twMerge(className, "px-6 py-4 text-base");
      break;
    case "lg":
      className = twMerge(className, "px-7 py-5 text-xl");
      break;
    default:
      className = twMerge(className, "px-3 py-1 text-xs");
      break;
  }

  const mergedClassName = twMerge(
    disabledClass,
    className,
    baseClass,
    customClass,
  );


  if (isLoading) {
    return (
      <button className={mergedClassName} disabled>
        <Spinner />
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={mergedClassName}
      disabled={isDisabled}
    >
      <span className="inherit-text">
        {children && children}
        {/* {!children && text} */}
      </span>
    </button>
  );
}
