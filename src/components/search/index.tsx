import React from "react";
import SearchBar from "./search-bar";
import SearchLogo from "./search-logo";

function Search() {
  return (
    <div className="search-component sm:mx-auto w-full sm:w-fit px-10">
      <SearchLogo />
      <SearchBar />
    </div>
  );
}

export default Search;
