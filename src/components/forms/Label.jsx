export default function Label({ title, children, required, ...props }) {
  return (
    <label className="w-full relative" {...props}>
      {(title || required) && (
        <p className="text-black font-medium text-base pb-1.5">
          {required && (
            <span className="text-torchRed text-sm leading-4 font-sans mr-1">
              *
            </span>
          )}
          {title}
        </p>
      )}
      {children}
    </label>
  );
}
