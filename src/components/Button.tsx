import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "default" | "danger" | "success";

const varientMap: Record<ButtonVariant, string> = {
  default: "bg-blue-400",
  danger: "bg-red-400",
  success: "bg-green-400",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: ButtonVariant;
  loading?: boolean;
}

export default function Button({
  varient = "default",
  children,
  className,
  loading,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={loading}
      className={`px-6 py-2 text-sm text-white rounded ${varientMap[varient]} ${
        className ?? ""
      }`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
