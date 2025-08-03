"use client";

import React from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text?: string;
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
    text,
    type = "button",
    size = "sm",
    buttonStyle,
    customClass = "",
    isDisabled = false,
    children,
    isLoading = false,
    onClick,
  } = props;

  const baseClass = "particle-button";

  const disabledClass =
    "disabled:bg-slate-900 disabled:cursor-default disabled:text-white/50";

  let className = "bg-secondary text-white";

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
        <FontAwesomeIcon
          icon={faSpinner}
          size="lg"
          spin
          className="text-white"
        />
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
      {children && children}
      {!children && text}
    </button>
  );
}
