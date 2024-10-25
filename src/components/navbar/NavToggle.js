import React from 'react';

const NavToggle = ({ handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className="flex flex-col justify-center items-center w-8 h-8 bg-white rounded-md cursor-pointer sm:hidden"
      data-nav-toggler
    >
      <span className="block w-6 h-0.5 bg-black mb-1"></span>
      <span className="block w-6 h-0.5 bg-black mb-1"></span>
      <span className="block w-6 h-0.5 bg-black"></span>
    </div>
  );
};

export default NavToggle;
