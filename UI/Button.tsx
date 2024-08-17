import React from "react";
type Props = {
  children: string;
};
export const Button = ({ children }: Props) => (
  <button
    type="submit"
    className="w-full px-4 py-3 text-main-font bg-green-400 rounded-md hover:bg-green-500"
  >
    {children}
  </button>
);
