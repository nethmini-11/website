import React from 'react';

const Logo = ({ logo, href = "#", altText = "Logo", width = 150, height = 50, className = "img" }) => {
  return (
    <div>
      <a href={href} >
        <img
          src={logo}
          width={width}
          height={height}
          alt={altText}
          className={className}
        />
      </a>
    </div>
  );
};

export default Logo;
