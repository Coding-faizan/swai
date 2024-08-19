import React from "react";

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="text-semibold-40  text-main-font mb-6">{title}</h1>
);
