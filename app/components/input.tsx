import { Label, TextInput, TextInputSizes } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  sizing?: keyof TextInputSizes;
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  const {
    label,
    sizing = "sm",
    type = "text",
    placeholder = "",
    className = "",
  } = props;

  const [htmlFor, setHtmlFor] = useState("");

  useEffect(() => {
    const withoutSpace = label.replace(/\s+/g, "");
    setHtmlFor(withoutSpace);
  }, [label]);

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
        sizing={sizing}
        placeholder={placeholder || ""}
        theme={{
          base: "w-full",
          field: {
            input: {
              base: "bg-white w-full h-16 rounded-none pt-8",
            },
          },
        }}
        autoComplete="off"
      />
    </div>
  );
};
