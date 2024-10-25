import React from "react";

const Testimonial = ({ image, text, author, isActive }) => {
  return (
    <div className={`testimonial-slide ${isActive ? "active" : ""}`}>
      <div className="testimonial-content testimonial-card">
        <img src={image} alt={author} className="testimonial-image" />
        <div>
          <p className="testimonial-text">{text}</p>
          <h4 className="testimonial-author">{author}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
