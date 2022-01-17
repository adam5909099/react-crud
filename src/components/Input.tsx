import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase();

    return (
      <div className="mb-6">
        <label
          htmlFor={inputId}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
        <input
          {...props}
          ref={ref}
          id={inputId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    );
  }
);
