import React, { Dispatch, SetStateAction } from "react";
import SearchBar from "./search-bar";
import SearchLogo from "./search-logo";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function Search({ query, setQuery }: Props) {
  return (
    <div className="search-component sm:mx-auto w-full sm:w-fit px-10">
      <SearchLogo />
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  );
}

export default Search;
