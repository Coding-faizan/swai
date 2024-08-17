import { TSignUpSchema } from "@/lib/type";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormField } from "./FormField";
import { Button } from "@/UI/Button";
import React from "react";

type FormProps = {
  onSubmit: () => void;
  register: UseFormRegister<TSignUpSchema>;
  errors: FieldErrors<TSignUpSchema>;
  children?: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({ onSubmit, register, errors }) => {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <FormField
        id="full-name"
        label="Full name"
        type="text"
        error={errors.fullName?.message}
        register={register("fullName")}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        error={errors.email?.message}
        register={register("email")}
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        error={errors.password?.message}
        register={register("password")}
      />
      <button
        type="submit"
        className="w-full px-4 py-3 text-main-font text-semibold-16 bg-primary hover:bg-primary-40 rounded-md"
      >
        SIGN UP
      </button>
    </form>
  );
};
