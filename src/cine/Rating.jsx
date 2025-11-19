import React from "react";
import Star from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(0);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={Star} width="14" height="14" alt="" />
      ))}
    </>
  );
};

export default Rating;
