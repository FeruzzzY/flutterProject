import { Radio, Label } from "flowbite-react";

export default function CustomRadio(props) {
  return (
    <>
      <Label htmlFor={props.id} className="flex items-baseline gap-2">
        <Radio
          {...props}
          className="mt-2 checked:bg-dodgerBlue focus:ring-dodgerBlue"
        />
        <span className="text-sm font-normal text-black -translate-y-1">
          {props.label}
        </span>
      </Label>
    </>
  );
}
