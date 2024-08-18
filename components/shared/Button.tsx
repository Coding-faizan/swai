import React from "react";

type Props = {
  isDisabled?: boolean;
};

const Button = ({ isDisabled }: Props) => {
  const backGround = isDisabled ? "bg-primary-40" : "bg-primary";
  return (
    <button
      type="submit"
      className={`w-full px-4 py-3 mt-4 text-main-font text-semibold-16 rounded-md ${backGround} `}
      disabled={isDisabled}
    >
      Continue
    </button>
  );
};

export default Button;
