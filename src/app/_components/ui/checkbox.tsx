import React, { useMemo } from "react";
import { useController } from "react-hook-form";

import { Typography } from "./typography";

interface CheckboxButtonInputs {
  value: string;
  label?: string;
  useControllerProps: any;
  isDisabled?: boolean;
}

export default function Checkbox(props: CheckboxButtonInputs) {
  const { useControllerProps, label = "", isDisabled = false, value } = props;
  const { field, fieldState } = useController(useControllerProps);

  const className = useMemo(() => {
    let className = {
        // check justify-between in all other places, working in apply page, make dynamic if needed
      wrapper: {
        default: "w-full flex flex-row items-start justify-start",
      },
      label: {
        default: "ml-1 text-left",
      },
      input: {
        wrapper:"",
        disabled: "",
        error: "",
      },
    };

    const classNameCopy = JSON.parse(JSON.stringify(className));
    if (isDisabled) {
      classNameCopy.input.disabled = "!bg-gray-100";
      className = { ...classNameCopy };
    }

    if (!isDisabled) {
      if (fieldState && fieldState.error && fieldState.error.message) {
        classNameCopy.input.error = "!border-red-600";
        className = { ...classNameCopy };
      } else {
        classNameCopy.input.error = "";
        className = { ...classNameCopy };
      }
    }

    return className;
  }, [isDisabled, fieldState]);

  return (
    <div className={`${className.wrapper.default}`}>
      <input
        {...field}
        value={value}
        className={`${className.input.wrapper} ${className.input.disabled} ${className.input.error}`}
        type="checkbox"
        disabled={isDisabled}
      />
      <Typography
        htmlFor={field.name}
        className={`${className.label.default}`}
        variant="label"
      >
        {label}
      </Typography>
      {/* <p className={className.errorText}>{fieldState.error?.message}</p> */}
    </div>
  );
}
