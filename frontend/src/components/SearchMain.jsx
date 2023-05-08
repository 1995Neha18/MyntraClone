import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Css/searchcard.css";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { getlocalSt } from "../utils/localStorage";
import SearchProduct from "./SearchProduct";



function SearchMain() {

    const { keyword } = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    console.log("chan")
    axios
      .get(`${baseUrl}products/search?q=${keyword}`,{
        headers:{
          Authorization:`bearer ${getlocalSt("token")}`
        }
      })
      .then((res) => {
        setSearch(res.data);
      })
      .catch((err) => console.log(err));
  },[keyword]);

  console.log(search)

  return <div className="search-page">
     {search?.length!==0 ? search?.map((el) => 

         <SearchProduct key={el._id} {...el}/>
      ) : <h1 className="search-err">Opps Search not find...</h1>   }
  </div>;
}

export default SearchMain;
