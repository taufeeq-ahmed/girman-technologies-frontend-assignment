import React from "react";
import { Input } from "../ui/input";

function SearchBar() {
  return (
    <div className="mt-[3rem] ">
      <Input
        placeholder="Search users ..."
        className="bg-white h-[50px] md:text-lg"
      />
    </div>
  );
}

export default SearchBar;
