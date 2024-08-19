import React from "react";

export const TermsAndPrivacy = () => (
  <p className="mt-6 text-regular-14 text-secondary-font text-center">
    By signing up, you agree to our{" "}
    <a href="/terms" className="underline text-main-font">
      Terms
    </a>{" "}
    and{" "}
    <a href="/privacy" className="underline text-main-font">
      Privacy policy
    </a>
    .
  </p>
);
