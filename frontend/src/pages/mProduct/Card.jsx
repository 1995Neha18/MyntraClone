import React, { useState } from "react";
import "./Card.css";
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Card({_id, images, strike_price, brand, title, discount, rating=5,r }) {
  const [hidden, setHidden] = useState(".hide");
  const navigate = useNavigate()


  return (
    <div  className="mens-card">
      <div className="mens-card-img">
        <img height="100%" width="100%" src={images[1]} />
      </div>
      <div className="mens-card-desc">
        <div className={"mens-card-desc-div"}>
          <div className="mens-card-desc-title">{brand}</div>
          <div className="mens-card-desc-det">{title}</div>
        </div>
        <div id="#hide" className={`mens-card-desc-cart`}>
          <button onClick={()=>navigate(`/Mens/${_id}`)}>
            {" "}
            <span>
              {" "}
              <FiHeart /> WISHLIST{" "}
            </span>{" "}
          </button>
        </div>
        <div>
          <Rating
            initialRating={rating}
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiTwotoneStar color="#ff3f6c" />}
            readonly
          />
        </div>
        <div className="mens-card-desc-price">
          Rs.{strike_price} <span>{discount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
