import React from "react";

import Star from "assets/img/icons/star_yellow.svg";
import NoneStar from "assets/img/icons/star.svg";

interface IReivew {
  category?: Array<string>;
  rate?: number;
}

const Review = ({ category = [], rate = 0 }: IReivew) => {
  const maxRate = 5;

  const newArr = new Array(5);
  const starArr = new Array(rate);

  console.log("asfdadfs", newArr.length);

  return (
    <div className="review">
      <p className="category">
        {category.map((item) => (
          <span>{item}</span>
        ))}
      </p>
      <p className="line">|</p>
      <div className="rate">
        {/* {newArr.map(() => (
          <div className="rate__item">
            <img src={Star} alt="" />
          </div>
        ))} */}

        <div className="rate__item">
          <img src={Star} alt="" />
        </div>
        <div className="rate__item">
          <img src={Star} alt="" />
        </div>
        <div className="rate__item">
          <img src={Star} alt="" />
        </div>
        <div className="rate__item">
          <img src={Star} alt="" />
        </div>
        <div className="rate__item">
          <img src={NoneStar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
