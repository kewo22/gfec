"use client";

import { Label, Radio as FlRadio, TextInputSizes } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean | undefined | "";
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<InputProps> = ({ ...props }) => {
  const {
    label,
    className = "",
    name = "",
    value = "",
    error = false,
    defaultChecked = false,
    onChange = null,
  } = props;

  const [htmlFor, setHtmlFor] = useState("");
  const [baseClass, setBaseClass] = useState("");
  // const [inputBaseClass, setInputBaseClass] = useState(
  //   "bg-white w-full h-16 pt-8 rounded-lg"
  // );

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(value as string);
  }, [value]);

  useEffect(() => {
    const withoutSpace = label.replace(/\s+/g, "");
    setHtmlFor(withoutSpace);
  }, [label]);

  useEffect(() => {
    error ? setBaseClass("border-solid border-red-600") : setBaseClass("");
  }, [error]);

  // useEffect(() => {
  //   error
  //     ? setInputBaseClass("bg-red-200 w-full h-16 pt-8 rounded-lg")
  //     : setInputBaseClass("bg-white w-full h-16 pt-8 rounded-lg");
  // }, [error]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  // const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  //   if (onFocusInput) onFocusInput(event);
  // };

  // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  //   if (onBlurInput) onBlurInput(event);
  // };

  return (
    <div className={`relative ${className}`}>
      <FlRadio
        id={htmlFor}
        name={name}
        value={inputValue}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        className="mr-2"
        theme={{
          root: {
            base: baseClass,
          },
        }}
      />
      <Label htmlFor={htmlFor} id={`lbl-${htmlFor}`}>
        {label}
      </Label>
    </div>
    // <div className={`w-full relative ${className}`}>
    //   <Label
    //     id={`lbl-${htmlFor}`}
    //     htmlFor={htmlFor}
    //     value={label}
    //     className="absolute z-10 w-full pl-3 mt-2 text-xs font-bold"
    //   />
    //   <TextInput
    //     id={htmlFor}
    //     type={type}
    //     name={name}
    //     value={inputValue}
    //     sizing={sizing}
    //     placeholder={placeholder || ""}
    //     onChange={handleChange}
    //     onFocus={handleFocus}
    //     onBlur={handleBlur}
    //     theme={{
    //       base: "w-full",
    //       field: {
    //         input: {
    //           base: inputBaseClass,
    //         },
    //       },
    //     }}
    //     autoComplete="off"
    //     min={min}
    //     max={max}
    //   />
    //   <small className={error && error.length ? "visible" : "invisible"}>
    //     {error || ""}
    //   </small>
    // </div>
  );
};
