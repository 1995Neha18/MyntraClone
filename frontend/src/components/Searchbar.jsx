import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  let [searchparams, setSearchparams] = useSearchParams();
  let searchinital = searchparams.get("q");
  let [search, setSearch] = useState(searchinital || []);

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
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        width={"100px"}
        height={"20px"}
      />
    </div>
  );
};

export default Searchbar;
