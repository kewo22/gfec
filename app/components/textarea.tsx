"use client";

import { Label, Textarea as FLTextArea, TextInputSizes } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  type?: string;
  placeholder?: string;
  sizing?: keyof TextInputSizes;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocusInput?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlurInput?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<InputProps> = ({ ...props }) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onFocusInput) onFocusInput(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlurInput) onBlurInput(event);
  };

  return (
    <div className={`w-full relative ${className}`}>
      <Label
        id={`lbl-${htmlFor}`}
        htmlFor={htmlFor}
        value={label}
        className="absolute z-10 w-[99%] pl-3 text-xs font-bold bg-white rounded-lg top-[1px] right-[1px] h-[30px] flex items-center"
      />
      <FLTextArea
        id={htmlFor}
        name={name}
        value={inputValue}
        placeholder={placeholder || ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // theme={{
        //   base: "w-full",
        //   field: {
        //     input: {
        //       base: inputBaseClass,
        //     },
        //   },
        // }}
        autoComplete="off"
        // min={min}
        // max={max}
        className="pt-6 bg-transparent"
        rows={10}
      />
      <small className={error && error.length ? "visible" : "invisible"}>
        {error || ""}
      </small>
    </div>
  );
};
