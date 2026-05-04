import Header from "@/components/shared/Header";

import React from "react";

const MainPage = ({ children }) => {
  return (
    <>
      <Header></Header>

      {children}
    </>
  );
};

export default MainPage;
