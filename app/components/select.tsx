import { Label, Select as FBSelect, TextInputSizes } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  sizing?: keyof TextInputSizes;
}

export const Select: React.FC<InputProps> = ({ ...props }) => {
  const { label, sizing = "sm", type = "text", placeholder = "" } = props;

  const [htmlFor, setHtmlFor] = useState("");

  useEffect(() => {
    const withoutSpace = label.replace(/\s+/g, "");
    setHtmlFor(withoutSpace);
  }, [label]);

  return (
    <div className={`w-full relative ${props.className} bg-white`}>
      <Label
        htmlFor={htmlFor}
        value={label}
        className="absolute z-10 w-full pl-3 mt-2 font-bold"
      />
      <FBSelect
        id={htmlFor}
        sizing={sizing}
      >
        <option disabled selected>Click to select</option>
        <option>9:00 - 9:30</option>
        <option>9:30 - 10:00</option>
        <option>10:00 - 10:30</option>
        <option>10:30 - 11:00</option>
        <option>11:00 - 11:30</option>
        <option>11:30 - 12:00</option>
        <option>12:00 - 12:30</option>
        <option>12:30 - 1:00</option>
        <option>1:00 - 1:30</option>
        <option>1:30 - 2:00</option>
        <option>2:00 - 2:30</option>
        <option>2:30 - 3:00</option>
        <option>3:00 - 3:30</option>
        <option>3:30 - 4:00</option>
        <option>4:00 - 4:30</option>
        <option>4:30 - 5:00</option>
        <option>5:00 - 5:30</option>
        <option>5:30 - 6:00</option>
        <option>6:00 - 6:30</option>
        <option>6:30 - 7:00</option>
        <option>7:00 - 7:30</option>
        <option>7:30 - 8:00</option>
      </FBSelect>
    </div>
  );
};

// height: 64px;
// padding-top: 35px;
// border-radius: 0;
// background: transparent;
