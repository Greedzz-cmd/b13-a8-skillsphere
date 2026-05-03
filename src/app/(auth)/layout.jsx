import LeftPanelAuth from "@/components/shared/LeftPanelAuth";
import RightPanelAuth from "@/components/shared/RightPanelAuth";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_380px_1fr] grid-cols-1 items-center min-h-screen">
      <LeftPanelAuth></LeftPanelAuth>
      {children}
      <RightPanelAuth></RightPanelAuth>
    </div>
  );
};

export default AuthLayout;
