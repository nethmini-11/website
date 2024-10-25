import React from "react";

const ProductCard = ({ image, title, speed, price, features, buttonText }) => {
  return (
    <div className="product-card">
      <figure className="product-image img-holder">
        <img src={image} alt={title} className="img-cover" />
      </figure>
      <h3 className="h4 card-title">{title}</h3>
      <span className="span">{speed}</span>
      <span className="span">{price}</span>
      <ul className="card-list slider-list">
        {features.map((feature, index) => (
          <li key={index} className="product-feature">
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  );
};

export default ProductCard;
