import { Label, Select as FBSelect, TextInputSizes } from "flowbite-react";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  type?: string;
  placeholder?: string;
  sizing?: keyof TextInputSizes;
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<InputProps> = ({ ...props }) => {
  const {
    label,
    sizing = "sm",
    type = "text",
    placeholder = "",
    value = "",
    name = "",
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

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div className={`w-full relative ${props.className}`}>
      <Label
        id={`lbl-${htmlFor}`}
        htmlFor={htmlFor}
        value={label}
        className="absolute z-10 w-full pl-3 mt-2 font-extrabold text-xs"
      />
      <FBSelect
        id={htmlFor}
        sizing={sizing}
        value={inputValue}
        onChange={handleChange}
        name={name}
      >
        <option disabled>Click to select</option>
        <option value="9:00 - 9:30">9:00 - 9:30</option>
        <option value="9:30 - 10:00">9:30 - 10:00</option>
        <option value="10:00 - 10:30">10:00 - 10:30</option>
        <option value="10:30 - 11:00">10:30 - 11:00</option>
        <option value="11:00 - 11:30">11:00 - 11:30</option>
        <option value="11:30 - 12:00">11:30 - 12:00</option>
        <option value="12:00 - 12:30">12:00 - 12:30</option>
        <option value="12:30 - 1:00">12:30 - 1:00</option>
        <option value="1:00 - 1:30">1:00 - 1:30</option>
        <option value="1:30 - 2:00">1:30 - 2:00</option>
        <option value="2:00 - 2:30">2:00 - 2:30</option>
        <option value="2:30 - 3:00">2:30 - 3:00</option>
        <option value="3:00 - 3:30">3:00 - 3:30</option>
        <option value="3:30 - 4:00">3:30 - 4:00</option>
        <option value="4:00 - 4:30">4:00 - 4:30</option>
        <option value="4:30 - 5:00">4:30 - 5:00</option>
        <option value="5:00 - 5:30">5:00 - 5:30</option>
        <option value="5:30 - 6:00">5:30 - 6:00</option>
        <option value="6:00 - 6:30">6:00 - 6:30</option>
        <option value="6:30 - 7:00">6:30 - 7:00</option>
        <option value="7:00 - 7:30">7:00 - 7:30</option>
        <option value="7:30 - 8:00">7:30 - 8:00</option>
      </FBSelect>
    </div>
  );
};

// height: 64px;
// padding-top: 35px;
// border-radius: 0;
// background: transparent;
