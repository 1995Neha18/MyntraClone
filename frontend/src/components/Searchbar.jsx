import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Searchbar = () => {

  let [query, setquery] = useState(null);
  const Navigate = useNavigate()

   const handleSearch = (e) =>{
    e.preventDefault()
    Navigate(`/search/${query}`)
    console.log("hello")
   }

  return (
    <form onSubmit={handleSearch}>
      <input
        style={{padding: "10px",alignItems:"center",width:"100%",border:"1px solid black",outline:"none",borderRadius:"10px"}}
        type="search"
        placeholder="Search products here...."
        aria-label="Search"
        onChange={(e) => setquery(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
