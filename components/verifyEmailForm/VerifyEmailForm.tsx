"use client";

import React from "react";
import { Header } from "../signupForm/Header";
import { FormField } from "../signupForm/FormField";
import Container from "../shared/Container";
import Link from "next/link";

const VerifyEmailForm: React.FC = () => {
  // Initialize form with React Hook Form and Zod validation

  const onSubmit = () => {
    console.log();
  };

  return (
    <>
      <Container>
        <Header title="Verify your email" />
        <p className="text-medium-20 text-main-font my-3">
          We sent an email to abc@gmail.com
        </p>
        <form action="/">
          <FormField
            id="6-digit-code"
            type="number"
            placeholder="6-digit-code"
          />
        </form>
        <button
          type="submit"
          className="w-full px-4 py-3 text-main-font text-semibold-16 bg-primary hover:bg-primary-40 rounded-md"
        >
          Continue
        </button>
        <div className="w-full flex justify-center mt-4">
          <Link href="/" className="text-semibold-14 text-main-font">
            I didn’t receive an email
          </Link>
        </div>
      </Container>
    </>
  );
};

export default VerifyEmailForm;
