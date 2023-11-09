import React, { useMemo } from "react";

import { useController } from "react-hook-form";

import { Typography } from "./typography";

interface TextInputProps {
  type?: "text" | "num" | "date" | "time";
  placeHolder?: string;
  label?: string;
  useControllerProps: any;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export default function Input(props: TextInputProps) {
  const {
    useControllerProps,
    placeHolder = "",
    type = "text",
    label = "",
    isDisabled = false,
    isRequired = false,
  } = props;
  const { field, fieldState } = useController(useControllerProps);

  const className = useMemo(() => {
    let className = {
      wrapper: {
        default:
          "w-full border-b border-b-stone-600 flex flex-row items-center focus-within:border-blue-600 transition-all py-1 px-0 sm:px-3 relative",
        error: "",
        disabled: "",
      },
      label: {
        default: "text-left",
        error: "",
      },
      input: "outline-none bg-transparent flex-grow pl-3",
      errorText:
        "text-red-600 text-xs font-semibold text-right absolute right-0 bg-slate-100 z-10",
    };

    const classNameCopy = JSON.parse(JSON.stringify(className));
    if (isDisabled) {
      classNameCopy.wrapper.disabled = "!bg-gray-100";
      className = { ...classNameCopy };
    }

    if (!isDisabled) {
      if (fieldState && fieldState.error && fieldState.error.message) {
        classNameCopy.wrapper.error = "!border-b-red-600";
        classNameCopy.label.error = "text-red-600";
        className = { ...classNameCopy };
      } else {
        classNameCopy.wrapper.error = "";
        classNameCopy.label.error = "";
        className = { ...classNameCopy };
      }
    }

    return className;
  }, [isDisabled, fieldState]);

  let inputMode: any =
    "none" ||
    "text" ||
    "tel" ||
    "url" ||
    "email" ||
    "numeric" ||
    "decimal" ||
    "search" ||
    undefined;

  if (type === "num") {
    inputMode = "numeric";
  } else {
    inputMode = "text";
  }

  return (
    <div
      className={`${className.wrapper.default} ${className.wrapper.error} ${className.wrapper.disabled}`}
    >
      {label && (
        <div className="relative">
          <Typography
            htmlFor={field.name}
            variant="label"
            className={`${className.label.default} ${className.label.error}`}
          >
            {label}
          </Typography>
          {isRequired && <span className="absolute text-red-700">*</span>}
        </div>
        // <label
        //   htmlFor={field.name}
        //   className={`${className.label.default} ${className.label.error}`}
        // >
        //   {label}
        // </label>
      )}
      <input
        {...field}
        id={field.name}
        value={field.value ? field.value : ""} // if date format val - 2000-05-05
        className={className.input}
        type={type}
        inputMode={inputMode || "text"}
        placeholder={placeHolder}
        disabled={isDisabled}
      />
      {!isDisabled && (
        <Typography variant="xs" className={className.errorText}>
          {fieldState.error?.message}
        </Typography>
        // <p className={className.errorText}></p>
      )}
      {/* <p>{fieldState.isTouched && "Touched"}</p>
          <p>{fieldState.isDirty && "Dirty"}</p>
          <p>{fieldState.invalid ? "invalid" : "valid"}</p>
          <p>{fieldState.error ? "error" : fieldState.error}</p> */}
    </div>
  );
}
