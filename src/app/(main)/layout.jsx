import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";

import React from "react";

const MainPage = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      {children}
    </>
  );
};

export default MainPage;
