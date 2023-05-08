import React from "react";

function SearchProduct({images,title,brand}) {


  return (
    <div className="search-page">
      <div className="search-main">
        <div className="search-img">
          <img height={"100%"} width={"100%"} src={images[0]} />
        </div>
        <div className="searchcard-title">
          <div>{title}</div>
          <div>{brand}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
