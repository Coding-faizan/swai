import React from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "@/app/signup/signupForm/SignupForm";
import VerifyEmailForm from "@/components/verifyEmailForm/VerifyEmailForm";
import LocationField from "@/components/LocationStep/LocationField";
import GenderSelection from "@/components/GenderSelection";
import CollaborationSelection from "@/components/CollaborationsSelection";
import DateOfBirthForm from "@/components/DateOfBirthForm";
import NichesSelection from "@/components/NichesSelection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <NichesSelection />
    </div>
  );
};

export default HomePage;
