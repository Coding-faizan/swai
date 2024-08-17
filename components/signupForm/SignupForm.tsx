"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, TSignUpSchema } from "@/lib/type";
import { GoogleSignUpButton } from "./GoogleSignUpButton";
import { Header } from "./Header";
import { Divider } from "./Divider";
import { Form } from "./Form";
import { TermsAndPrivacy } from "./TermsAndPrivacy";

const SignUpForm: React.FC = () => {
  // Initialize form with React Hook Form and Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: TSignUpSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header title="Sign up as Creator 🤳" />
      <GoogleSignUpButton />
      <Divider />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
      <TermsAndPrivacy />
    </div>
  );
};

export default SignUpForm;
