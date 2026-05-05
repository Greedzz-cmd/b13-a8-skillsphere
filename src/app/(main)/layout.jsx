import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import React from "react";

const MainPage = ({ children }) => {
  return (
    <>
      <Header></Header>

      {children}
      <Footer></Footer>
    </>
  );
};

export default MainPage;
