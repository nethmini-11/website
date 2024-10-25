import React, { useState } from "react";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import NavToggle from "../../components/navbar/NavToggle";
import HeroSection from "../../components/navbar/HeroSection";
import LogoLight from "../../assets/images/logo-main.png";
import LogoDark from "../../assets/images/logo-dark.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="header" data-header>
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link to={"/"}>
              <Logo
                logo={LogoLight}
                href="/"
                altText="Company Logo"
                width={200}
                height={60}
                className="hidden md:block"
              />
            </Link>

            <Logo
              logo={LogoDark}
              href="/"
              altText="Company Logo"
              width={150}
              height={50}
              className="block md:hidden"
            />
          </div>

          <Navbar isOpen={isOpen} handleToggle={handleToggle} />
          <NavToggle handleToggle={handleToggle} />
        </div>
      </header>
      <HeroSection />
    </div>
  );
};

export default Header;
