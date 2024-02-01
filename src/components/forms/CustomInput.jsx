import { forwardRef } from "react";

function CustomInput(props, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={`border-2 m-0 px-3 py-2 border-gray rounded-[10px] w-full outline-none items-center
      bg-[#fff] text-sm font-normal leading-5 hover:border-gray-400 shadow-none focus:ring-0 focus:border-gray ${props.className}`}
    />
  );
}

const ref = forwardRef((props, ref) => CustomInput(props, ref));

ref.displayName = "CustomInput";

export default ref;
