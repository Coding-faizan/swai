import React from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "@/components/signupForm/SignupForm";
import VerifyEmailForm from "@/components/verifyEmailForm/VerifyEmailForm";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <VerifyEmailForm />
    </div>
  );
};

export default HomePage;
