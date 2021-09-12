import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../store/actions";

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);

  const handleSearch = (e) => {
    dispatch(actions.handleSearch(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a note"
        className="search-input"
        value={query}
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default Search;
