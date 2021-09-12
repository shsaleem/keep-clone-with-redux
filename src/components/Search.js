import React from "react";

import { useGlobalContext } from "../context/context";

const Search = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a note"
        className="search-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
