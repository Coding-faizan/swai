import { TSignUpSchema } from "@/lib/type";
import { UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  id?: string;
  label?: string;
  type: string;
  placeholder?: string;
  error?: string | undefined;
  register?: ReturnType<UseFormRegister<TSignUpSchema>>;
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  error,
  register,
}) => (
  <div className="mb-4">
    <label
      className="block mb-2 text-semibold-14 text-secondary-font"
      htmlFor={id}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      className="w-full px-4 py-3 text-main-font bg-white border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);
