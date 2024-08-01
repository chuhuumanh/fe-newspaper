// components/Layout.js
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
