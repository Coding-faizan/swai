"use client";

import React, { useState } from "react";
import Select from "react-select";
import { useDebounce } from "react-use";

const LocationInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useDebounce(
    () => {
      if (inputValue) {
        fetchLocationOptions(inputValue);
      }
    },
    500,
    [inputValue]
  );

  const fetchLocationOptions = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.example.com/locations?query=${query}`
      );
      const data = await response.json();
      const formattedOptions = data.map((location: any) => ({
        label: `${location.city}, ${location.country}`,
        value: `${location.city}, ${location.country}`,
      }));
      setOptions(formattedOptions);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <Select
      inputValue={inputValue}
      onInputChange={(newValue) => setInputValue(newValue)}
      options={options}
      placeholder="Enter name of your city..."
      noOptionsMessage={() => "No options found"}
      className="mb-5"
      isClearable
    />
  );
};

export default LocationInput;
