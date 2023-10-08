import React, { useMemo } from "react";
import { useController } from "react-hook-form";

interface SelectInputs {
  placeHolder?: string;
  label?: string;
  useControllerProps: any;
  selectionItems: Record<string, any>[];
  isDisabled?: boolean;
}

export default function Select(props: SelectInputs) {
  const {
    useControllerProps,
    placeHolder = "",
    label = "",
    selectionItems,
    isDisabled = false,
  } = props;
  const { field, fieldState } = useController(useControllerProps);

  const className = useMemo(() => {
    let className = {
      wrapper: {
        default:
          "w-full border-b border-b-stone-600 flex flex-row items-center focus-within:border-blue-600 transition-all py-1 px-0 sm:px-3",
        error: "",
        disabled: "",
      },
      label: {
        default: "mr-1 font-semibold text-sm",
        error: "",
      },
      input:
        "outline-none bg-transparent flex-grow appearance-none select-input",
      errorText: "text-red-600 text-xs font-semibold",
    };

    const classNameCopy = JSON.parse(JSON.stringify(className));
    if (isDisabled) {
      classNameCopy.wrapper.disabled = "!bg-gray-100";
      className = { ...classNameCopy };
    }

    if (!isDisabled) {
      if (fieldState && fieldState.error && fieldState.error.message) {
        const classNameCopy = JSON.parse(JSON.stringify(className));
        classNameCopy.wrapper.error = "!border-b-red-600";
        classNameCopy.label.error = "text-red-600";
        className = { ...classNameCopy };
      } else {
        const classNameCopy = JSON.parse(JSON.stringify(className));
        classNameCopy.wrapper.error = "";
        classNameCopy.label.error = "";
        className = { ...classNameCopy };
      }
    }

    return className;
  }, [isDisabled, fieldState]);

  return (
    <div
      className={`${className.wrapper.default} ${className.wrapper.error} ${className.wrapper.disabled}`}
    >
      <label
        htmlFor={field.name}
        className={`${className.label.default} ${className.label.error}`}
      >
        {label}
      </label>
      <select
        {...field}
        name="cars"
        id="cars"
        value={field.value ? field.value : ""}
        className={className.input}
        disabled={isDisabled}
      >
        <option value="">{placeHolder}</option>
        {selectionItems.map((item, i) => {
          return (
            <option key={i} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
      {!isDisabled && (
        <p className={className.errorText}>{fieldState.error?.message}</p>
      )}
    </div>
  );
}
