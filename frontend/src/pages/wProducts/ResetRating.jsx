import React from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

const ResetRating = ({setRating}) => {
  
  const [searchParams] = useSearchParams()


  return (
    <div style={{ padding: "10px" }}>
      <Rating
        onChange={(value)=>{setRating(value)}}
        fractions={+searchParams.get("rating")}
        initialRating={+searchParams.get("rating")}
        emptySymbol={<AiOutlineStar  fontSize={"22px"} />}
        fullSymbol={<AiTwotoneStar color="red" fontSize={"22px"} />}
      />
    </div>
  );
};

export default ResetRating;
