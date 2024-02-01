import { forwardRef } from "react";
import { Checkbox, Label } from "flowbite-react";

function CustomCheckbox(props, ref) {
  return (
    <Label className="flex items-center gap-2 cursor-pointer">
      <Checkbox
        {...props}
        ref={ref}
        className="mt-0 checked:bg-dodgerBlue focus:ring-dbg-dodgerBlue cursor-pointer"
      />
      {props.label}
    </Label>
  );
}

const ref = forwardRef((props, ref) => CustomCheckbox(props, ref));

ref.displayName = "CustomCheckbox";

export default ref;
