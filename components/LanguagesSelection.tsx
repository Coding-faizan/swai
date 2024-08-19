"use client";

import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import Container from "./shared/Container";
import { Header } from "@/app/signup/signupForm/Header";
import Button from "./shared/Button";

type LanguageOption = {
  value: string;
  label: string;
};

const languages: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "pl", label: "Polish" },
  { value: "de", label: "German" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
  { value: "zh", label: "Chinese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "ar", label: "Arabic" },
  { value: "hi", label: "Hindi" },
  // Add more languages as needed
];

const LanguagesSelection: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageOption[]>(
    []
  );

  const handleSelectChange = (newValue: MultiValue<LanguageOption>) => {
    setSelectedLanguages(newValue as LanguageOption[]);
  };

  return (
    <Container>
      <Header title="What languages are you fluent in?" />
      <Select
        isMulti
        onChange={handleSelectChange}
        options={languages}
        className="w-full py-2"
        value={selectedLanguages}
      />

      <Button isDisabled={selectedLanguages.length === 0 ? true : false} />
    </Container>
  );
};

export default LanguagesSelection;
