import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import React, { Suspense } from "react";

const MainPage = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header></Header>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
