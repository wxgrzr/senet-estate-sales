// Button variant styles
export const baseStyles =
  "rounded px-5 py-2 font-medium transition-colors duration-100";

export const variantStyles = {
  button: "",
  text: "focus:outline-hidden text-gray-600 hover:text-gray-400 focus:text-gray-400",
};

export const subvariantStyles = {
  solid: "border",
  outline: "border bg-transparent",
};

const colorStyles: Record<
  "primary" | "secondary" | "indigodye",
  { solid: string; outline: string }
> = {
  primary: {
    solid:
      "border-[color:var(--color-richblack)] bg-[color:var(--color-richblack)] text-white hover:bg-[color:var(--color-ship-cove-700)]",
    outline:
      "border-[color:var(--color-richblack)] bg-transparent text-[color:var(--color-richblack)] hover:bg-[color:var(--color-richblack)] hover:text-white",
  },
  secondary: {
    solid:
      "bg-ship-cove-600 border-ship-cove-600 hover:bg-ship-cove-700 text-white",
    outline:
      "text-ship-cove-600 border-ship-cove-600 hover:bg-ship-cove-600 bg-transparent hover:text-white",
  },
  indigodye: {
    solid:
      "text-platinum bg-indigodye border-indigodye hover:bg-ship-cove-600 hover:text-white",
    outline:
      "text-indigodye border-indigodye hover:bg-indigodye hover:text-platinum bg-transparent",
  },
};

export const ButtonStyles = {
  baseStyles,
  variantStyles,
  subvariantStyles,
  colorStyles,
};
