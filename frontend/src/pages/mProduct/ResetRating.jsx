import React from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const ResetRating = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Rating
        initialRating={3}
        emptySymbol={<AiOutlineStar fontSize={"20px"} />}
        fullSymbol={<AiTwotoneStar fontSize={"20px"} />}
      />
    </div>
  );
};

export default ResetRating;
