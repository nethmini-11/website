import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = () => (
  <>
    <Header />
    <main className="container mx-auto p-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
