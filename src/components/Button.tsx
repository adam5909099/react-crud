import { HTMLAttributes } from "react";

export type ButtonVariant = "default" | "danger" | "success";

const varientMap: Record<ButtonVariant, string> = {
  default: "bg-blue-400",
  danger: "bg-red-400",
  success: "bg-green-400",
};

interface Props extends HTMLAttributes<HTMLButtonElement> {
  varient?: ButtonVariant;
}

export default function Button({
  varient = "default",
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`px-4 py-1 text-sm text-white rounded ${varientMap[varient]} ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
}
