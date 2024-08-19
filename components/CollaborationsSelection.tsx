"use client";

import React, { useState } from "react";
import { Header } from "../app/signup/signupForm/Header";
import Container from "./shared/Container";
import Button from "./shared/Button";

type CollaborationOption = "UGC" | "Influencer" | "Model";

const collaborationOptions: CollaborationOption[] = [
  "UGC",
  "Influencer",
  "Model",
];

const CollaborationSelection = () => {
  const [selectedCollaborations, setSelectedCollaborations] = useState<
    CollaborationOption[]
  >([]);

  const handleCollaborationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value as CollaborationOption;
    setSelectedCollaborations((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <Container>
      <Header title="What collaborations are you interested in?" />

      <div className="space-y-4 w-full max-w-md">
        {collaborationOptions.map((option) => (
          <label
            key={option}
            className={`flex items-center w-full p-4 rounded-md border border-gray-300 cursor-pointer`}
          >
            <input
              type="checkbox"
              value={option}
              checked={selectedCollaborations.includes(option)}
              onChange={handleCollaborationChange}
              className="form-radio text-primary h-5 w-5 mr-2"
            />
            <span className="text-medium-16 text-main-font">{option}</span>
          </label>
        ))}
      </div>

      <Button isDisabled={selectedCollaborations.length === 0 ? true : false} />
    </Container>
  );
};

export default CollaborationSelection;
