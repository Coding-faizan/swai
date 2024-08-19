"use client"; // For Next.js client-side

import React, { useState } from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import { Header } from "@/app/signup/signupForm/Header";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const options = ["Animals", "Art", "Beauty", "Fashion", "Food", "Family"];

const NichesSelection = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value && !selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  return (
    <Container>
      <Header title="Select niches that match your content" />

      <Select
        onChange={handleSelectChange}
        label="Select from the list"
        className="w-full  mb-3"
      >
        {options.map((option) => (
          <SelectItem key={option}>{option}</SelectItem>
        ))}
      </Select>

      <div className="flex flex-wrap mb-1">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="bg-accent text-main-font text-medium-16 px-3 py-1 rounded-md flex items-center  mx-1"
          >
            <span>{option}</span>
            <button
              onClick={() => handleRemoveOption(option)}
              className="text-medium-16 text-main-font h-6 w-6"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <Button isDisabled={selectedOptions.length === 0 ? true : false} />
    </Container>
  );
};

export default NichesSelection;
