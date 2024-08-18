"use client";

import React, { useState } from "react";
import { Header } from "./signupForm/Header";
import Button from "./shared/Button";
import Container from "./shared/Container";

const GenderSelection = () => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <Container>
      <Header title="What’s your gender?" />

      <div className="space-y-4 w-full max-w-md">
        {["Female", "Male", "Other"].map((option) => (
          <label
            key={option}
            className={`flex items-center w-full p-4 rounded-md border border-gray-300 cursor-pointer ${
              gender === option ? "bg-gray-100 border-gray-400" : "bg-white"
            }`}
          >
            <input
              type="radio"
              value={option}
              checked={gender === option}
              onChange={handleGenderChange}
              className="form-radio text-primary h-5 w-5 mr-2"
            />
            <span className="text-lg">{option}</span>
          </label>
        ))}
      </div>

      <Button isDisabled={!gender ? true : false} />
    </Container>
  );
};

export default GenderSelection;
