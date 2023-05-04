import React, { useState } from "react";
import "./Card.css"

function Card({images}) {
  const [hidden,setHidden] = useState(".hide")
  return <div className="mens-card">
  <div className="mens-card-img">
   <img height="100%" width="100%" src={images[1]}/>
  </div>
  <div className="mens-card-desc">
  <div className={"mens-card-desc-div"}>
      <div className="mens-card-desc-title">Roadster</div>
      <div className="mens-card-desc-det">Print Mock Collar T-shirt</div>
  </div>
  <div id="#hide" className={`mens-card-desc-cart`}>
      <button>WISHLIST</button>
  </div>
      <div className="mens-card-desc-price">Rs.1816 <span>(21%OFF)</span></div>
  </div>
  </div>;
}

export default Card;
