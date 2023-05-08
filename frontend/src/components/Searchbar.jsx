import React, { useEffect, useState } from "react";
import { SearchProduct } from "./SearchProduct";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Searchbar = () => {
  
  let [query, setQuery] = useState("");
  const Navigate = useNavigate();

  //   const param = {
  //     category,
  //   };

  //   useEffect(() => {
  //     search && (param.q = search);
  //     setSearchparams(param);
  //   }, [search]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        width={"100px"}
        height={"20px"}
      />
      <button
      onClick={() => Navigate(`/search?q=${query}`)}
      >Search</button>

      {/* <div>
        <SearchProduct />
      </div> */}
    </div>
  );
};

export default Searchbar;
