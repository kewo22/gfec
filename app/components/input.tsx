"use client";

import { Label, TextInput, TextInputSizes } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  sizing?: keyof TextInputSizes;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange = null,
  } = props;

  const [htmlFor, setHtmlFor] = useState("");

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(value as string);
  }, [value]);

  useEffect(() => {
    const withoutSpace = label.replace(/\s+/g, "");
    setHtmlFor(withoutSpace);
  }, [label]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div className={`w-full relative bg-white ${className}`}>
      <Label
        htmlFor={htmlFor}
        value={label}
        className="absolute z-10 w-full pl-3 mt-2 font-bold"
      />
      <TextInput
        id={htmlFor}
        type={type}
        name={name}
        value={inputValue}
        sizing={sizing}
        placeholder={placeholder || ""}
        onChange={handleChange}
        theme={{
          base: "w-full",
          field: {
            input: {
              base: "bg-white w-full h-16 rounded-none pt-8",
            },
          },
        }}
        autoComplete="off"
        min={min}
        max={max}
      />
    </div>
  );
};
