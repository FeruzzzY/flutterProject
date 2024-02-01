export default function CustomTextarea(props) {
  return (
    <textarea
      className={`border-2 m-0 px-3 py-2 border-grayOpacity06 rounded-[10px] w-full outline-none items-center
    bg-[#fff] text-sm font-normal leading-5 hover:border-gray-400 shadow-none focus:ring-0 focus:border-grayOpacity06 ${props.className}`}
      {...props}
    />
  );
}
