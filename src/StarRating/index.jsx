import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./styles.css";

const StarRating = ({ numberOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleStarClick = (index) => {
    setRating(index);
  };
  const handleMouseMove = (index) => {
    setHover(index);
  };
  const handleMouseLeave = (index) => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            size={40}
            onClick={() => {
              handleStarClick(index);
            }}
            onMouseEnter={() => {
              handleMouseMove(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
