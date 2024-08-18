import React from "react";

type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center px-4 py-6 min-h-[calc(100vh-64px)]">
      <div className="flex flex-col items-start w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Container;
