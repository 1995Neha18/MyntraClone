import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { baseUrl } from "../utils";

export const SearchProduct = ({ images, product, price, category, id }) => {
  // console.log(images);
  const [search, setSearch] = React.useState([]);
  let [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
    console.log(id);
  };

  // useEffect(() => {
  //   axios.get(`${baseUrl}products/search?q=${query}`).then((res) => {
  //     console.log(res.data);
  //     setSearch(res.data);
  //   });
  // }, []);

  return (
    <Link to={`/details/${id}`}>
      <Box
        onClick={handleClick}
        textAlign={"left"}
        color={"darkgray"}
        fontStyle={"bold"}
        boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
        // borderRadius={"10px"}
        w={"90%"}
      >
        <Image
          src={images}
          // src={images[0]}
          alt="image"
          width={"100%"}
          h="320px"
          objectFit="cover"
        />

        <Text as="h6" isTruncated>
          {product}
        </Text>
        <hr />
        {/* <h3>{id}</h3> */}
        <h2 style={{ color: "gray", fontWeight: "bold" }}>Rs. {price}</h2>
        <p>{category.name}</p>
        {/* <Button color={"green"}>Add to Cart</Button> */}
      </Box>
    </Link>
  );
};
