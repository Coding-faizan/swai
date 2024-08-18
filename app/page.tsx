import React from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "@/components/signupForm/SignupForm";
import VerifyEmailForm from "@/components/verifyEmailForm/VerifyEmailForm";
import LocationField from "@/components/LocationStep/LocationField";
import GenderSelection from "@/components/GenderSelection";
import CollaborationSelection from "@/components/CollaborationsSelection";
import DateOfBirthForm from "@/components/DateOfBirthForm";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <GenderSelection />
    </div>
  );
};

export default HomePage;
