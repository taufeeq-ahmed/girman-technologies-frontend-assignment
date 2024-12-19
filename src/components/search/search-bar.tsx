"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function SearchBar({ query, setQuery }: Props) {
  return (
    <div className="mt-[3rem] ">
      <Input
        placeholder="Search users ..."
        className="bg-white h-[50px] md:text-lg"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
}

export default SearchBar;
