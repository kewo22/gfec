import React, { useMemo } from "react";

import { useController } from "react-hook-form";

import { Typography } from "./typography";

interface IncrementInputProps {
  placeHolder?: string;
  label?: string;
  useControllerProps: any;
  isDisabled?: boolean;
  isRequired?: boolean;
  step?: number;
  min?: number;
  max?: number;
  onChange: (e: number) => void;
}

export default function IncrementInput(props: IncrementInputProps) {
  const {
    useControllerProps,
    placeHolder = "",
    label = "",
    isDisabled = false,
    isRequired = false,
    step = 1,
    min = 0,
    max = 99999,
    onChange = null,
  } = props;
  const { field, fieldState, formState } = useController(useControllerProps);

  const className = useMemo(() => {
    let className = {
      wrapper: {
        default:
          "w-full overflow-hidden border-b border-b-stone-600 focus-within:border-blue-600 transition-all py-1 px-0 sm:px-3 relative flex items-center gap-1",
        error: "",
        disabled: "",
      },
      label: {
        wrapper: "inline-block truncate max-w-[50px] min-w-[5px] align-middle",
        default: "text-left",
        error: "",
      },
      input: "outline-none bg-transparent overflow-hidden flex-[1_0_60%]",
      errorText:
        "text-red-600 text-xs font-semibold text-right absolute right-0 z-10",
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

  const onIncrement = () => {
    let valNum = +field.value;
    const incremented = (valNum += step);
    if (incremented > max) return;
    if (onChange) onChange(incremented);
  };

  const onDecrement = () => {
    let valNum = +field.value;
    const decremented = (valNum -= step);
    if (decremented < min) return;
    if (onChange) onChange(decremented);
  };

  return (
    <div
      className={`${className.wrapper.default} ${className.wrapper.error} ${className.wrapper.disabled}`}
    >
      {label && (
        <div className={`${className.label.wrapper}`}>
          <Typography
            htmlFor={field.name}
            variant="label"
            className={`${className.label.default} ${className.label.error}`}
          >
            {label}
          </Typography>
          {isRequired && <span className="absolute text-red-700">*</span>}
        </div>
      )}
      <input
        {...field}
        id={field.name}
        value={field.value ? field.value : ""} // if date format val - 2000-05-05
        className={className.input}
        placeholder={placeHolder}
        disabled={isDisabled}
      />
      <div className="flex flex-row gap-1">
        <button
          type="button"
          onClick={onIncrement}
          disabled={field.value >= max}
          className="font-bold text-sm border border-slate-300 rounded-full w-6 h-6 disabled:bg-gray-300"
        >
          +
        </button>
        <button
          type="button"
          onClick={onDecrement}
          disabled={field.value <= min}
          className="font-bold text-sm border border-slate-300 rounded-full w-6 h-6 disabled:bg-gray-300"
        >
          -
        </button>
      </div>
      {!isDisabled && (
        <Typography variant="xs" className={className.errorText}>
          {fieldState.error?.message}
        </Typography>
      )}
    </div>
  );
}
