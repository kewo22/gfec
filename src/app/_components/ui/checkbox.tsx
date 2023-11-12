import React, { useMemo } from "react";
import { useController } from "react-hook-form";

import { Typography } from "./typography";

// interface CheckboxButtonInputs {
//   value: string;
//   label?: string;
//   // isChecked?: boolean;
//   useControllerProps: any;
//   isDisabled?: boolean;
// }

// export default function Checkbox(props: CheckboxButtonInputs) {
//   const {
//     useControllerProps,
//     label = "",
//     isDisabled = false,
//     value,
//     // isChecked = false,
//   } = props;
//   const { field, fieldState } = useController(useControllerProps);
//   console.log("🚀 ~ file: checkbox.tsx:15 ~ Checkbox ~ value:", value);
//   console.log("🚀 ~ file: checkbox.tsx:16 ~ Checkbox ~ field:", field);
//   console.log("🚀 ~ file: checkbox.tsx:16 ~ Checkbox ~ fieldState:", fieldState)

//   const className = useMemo(() => {
//     let className = {
//       // check justify-between in all other places, working in apply page, make dynamic if needed
//       wrapper: {
//         default: "w-full flex flex-row items-center justify-start",
//       },
//       label: {
//         default: "ml-1 text-left",
//       },
//       input: {
//         wrapper: "",
//         disabled: "",
//         error: "",
//       },
//     };

//     const classNameCopy = JSON.parse(JSON.stringify(className));
//     if (isDisabled) {
//       classNameCopy.input.disabled = "!bg-gray-100";
//       className = { ...classNameCopy };
//     }

//     if (!isDisabled) {
//       if (fieldState && fieldState.error && fieldState.error.message) {
//         console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', fieldState.error.message)
//         classNameCopy.input.error = "!border-red-600";
//         className = { ...classNameCopy };
//       } else {
//         classNameCopy.input.error = "";
//         className = { ...classNameCopy };
//       }
//     }

//     return className;
//   }, [isDisabled, fieldState]);

//   const filedValues = Array.from(field.value) as string[];
//   const index = filedValues.findIndex((val) => {
//     return val === value;
//   });

//   const isChecked = index !== -1 ? true : false;

//   return (
//     <div className={`${className.wrapper.default}`}>
//       <input
//         {...field}
//         value={value}
//         defaultChecked={isChecked}
//         className={`${className.input.wrapper} ${className.input.disabled} ${className.input.error}`}
//         type="checkbox"
//         disabled={isDisabled}
//       />
//       <Typography
//         htmlFor={field.name}
//         className={`${className.label.default}`}
//         variant="label"
//       >
//         {label}
//       </Typography>
//       {/* <p className={className.errorText}>{fieldState.error?.message}</p> */}
//     </div>
//   );
// }



//////
// NEED TO ADD DISABLE AND ERROR STATES

interface CheckboxButtonInputs {
  // useControllerProps: any;
  // isDisabled?: boolean;
  options: any[];
  control: any;
  name: string;
}

// { options, control, name }
export default function Checkboxes(props: CheckboxButtonInputs) {
  const {
    // useControllerProps,
    // isDisabled = false,
    control,
    name,
    options,
  } = props;

  // const { field, fieldState } = useController(useControllerProps);
  const { field } = useController({
    control,
    name,
  });

  const [value, setValue] = React.useState(field.value || []);

  return (
    <>
      {options.map((option, index) => (
        <div key={index} className="flex flex-row items-center gap-2">
          <input
            onChange={(e) => {
              const valueCopy = [...value];

              // update checkbox value
              valueCopy[index] = e.target.checked ? e.target.value : null;

              // send data to react hook form
              field.onChange(valueCopy);

              // update local state
              setValue(valueCopy);
            }}
            key={option}
            type="checkbox"
            checked={value.includes(option)}
            value={option}
          />
          <Typography variant="label">{option}</Typography>
        </div>
      ))}
    </>
  );
}
