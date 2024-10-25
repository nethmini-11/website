import React from "react";
import iconData from "../../assets/icons/icons";

const Card = ({ name, title, text, rightAligned }) => {
  const IconComponent = iconData[name];
  if (!IconComponent) {
    console.error(`Icon "${name}" not found in iconData.`);
    return null;
  }
  return (
    <li className={`about-item ${rightAligned ? "about-card-right" : ""}`}>
      <div className="about-card">
        <div className="icon-box">
          <IconComponent />
        </div>
        <div className="about-card-content">
          <h4 className="h4 card-title">{title}</h4>
          <span className="span">{text}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
