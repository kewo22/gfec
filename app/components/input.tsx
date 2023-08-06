"use client";

import { Label, TextInput, TextInputSizes } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  sizing?: keyof TextInputSizes;
  error?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusInput?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlurInput?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  const {
    label,
    sizing = "sm",
    type = "text",
    placeholder = "",
    className = "",
    name = "",
    value = "",
    min = "",
    max = "",
    error = "",
    disabled = false,
    onChange = null,
    onFocusInput = null,
    onBlurInput = null,
  } = props;

  const [htmlFor, setHtmlFor] = useState("");
  const [inputBaseClass, setInputBaseClass] = useState(
    "bg-white w-full h-16 pt-8 rounded-lg"
  );

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(value as string);
  }, [value]);

  useEffect(() => {
    const withoutSpace = label.replace(/\s+/g, "");
    setHtmlFor(withoutSpace);
  }, [label]);

  useEffect(() => {
    error
      ? setInputBaseClass("bg-red-200 w-full h-16 pt-8 rounded-lg")
      : setInputBaseClass("bg-white w-full h-16 pt-8 rounded-lg");
  }, [error]);

  useEffect(() => {
    disabled
      ? setInputBaseClass("bg-slate-100 opacity-50 w-full h-16 pt-8 rounded-lg")
      : setInputBaseClass("bg-white opacity-100 w-full h-16 pt-8 rounded-lg");
  }, [disabled]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocusInput) onFocusInput(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurInput) onBlurInput(event);
  };

  return (
    <div className={`w-full relative ${className}`}>
      <Label
        id={`lbl-${htmlFor}`}
        htmlFor={htmlFor}
        value={label}
        className="absolute z-10 w-full pl-3 mt-2 text-xs font-bold"
      />
      <TextInput
        id={htmlFor}
        type={type}
        name={name}
        value={inputValue}
        sizing={sizing}
        placeholder={placeholder || ""}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        theme={{
          base: "w-full",
          field: {
            input: {
              base: inputBaseClass,
            },
          },
        }}
        autoComplete="off"
        min={min}
        max={max}
      />
      <small className={error && error.length ? "visible text-red-600" : "invisible"}>
        {error || ""}
      </small>
    </div>
  );
};
