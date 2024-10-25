import React from "react";
import navData from "../../data/navbar";

const Navbar = ({isOpen}) => {
 

  return (
    <nav className="p-4" data-navbar>
      <div className="flex justify-between items-center">

        <ul className="hidden sm:flex space-x-4">
          {navData.map((item, index) => (
            <li key={index} className="mr-8">
              <a href={item.href} className="text-white hover:text-gray-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="sm:hidden flex flex-col space-y-4 mt-4">
          {navData.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-black hover:text-gray-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
