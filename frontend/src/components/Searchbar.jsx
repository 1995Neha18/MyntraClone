import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Searchbar = () => {

  let [query, setquery] = useState(null);
  const Navigate = useNavigate()

   const handleSearch = (e) =>{
    e.preventDefault()
    Navigate(`/search/${query}`)
   }



  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setquery(e.target.value)}
        width={"100px"}
        height={"20px"}
      />
    </form>

  );
};

export default Searchbar;
