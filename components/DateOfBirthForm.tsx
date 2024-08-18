"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "./signupForm/Header";
import Container from "./shared/Container";
import Button from "./shared/Button";

// Validation schema using Zod
const schema = z.object({
  dob: z.date({ required_error: "Date of birth is required" }),
});

type FormData = z.infer<typeof schema>;

const DateOfBirthForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Container>
      <Header title="What’s your date of birth?" />
      <div className="w-full mb-4">
        <Controller
          control={control}
          name="dob"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText="Select date of birth"
              className={`w-full p-2 border rounded-md ${
                errors.dob ? "border-red-500" : "border-gray-300"
              }`}
            />
          )}
        />
        {errors.dob && (
          <p className="text-red-500 text-sm mt-2">{errors.dob.message}</p>
        )}
      </div>
      <Button />
    </Container>
  );
};

export default DateOfBirthForm;
