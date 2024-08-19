import Container from "../shared/Container";
import React from "react";
import { Header } from "../../app/signup/signupForm/Header";
import { FormField } from "../../app/signup/signupForm/FormField";
import Button from "../shared/Button";
import Link from "next/link";
import LocationInput from "./LocationInput";

const LocationField = () => {
  return (
    <>
      <Container>
        <Header title="Where are you located?" />
        <div className="w-full max-w-md">
          <LocationInput />
        </div>
        <Button />
        <div className="w-full flex justify-center mt-4">
          <Link href="/" className="text-semibold-14 text-main-font">
            If you don’t see your city, choose the closest bigger city
          </Link>
        </div>
      </Container>
    </>
  );
};

export default LocationField;
