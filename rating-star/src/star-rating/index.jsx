import React from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

export default function StarRating({noOfStars = 5}) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  function handleClick(getCurrentIndex) {
   setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex)
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className= {index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}
