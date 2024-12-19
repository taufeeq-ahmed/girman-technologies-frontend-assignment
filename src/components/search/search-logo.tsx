import Image from "next/image";
import React from "react";

function SearchLogo() {
  return (
    <div className="mt-24 hidden sm:block">
      <Image
        src={"/girman-logo-large.svg"}
        height={125}
        width={800}
        alt="girman-logo-large.svg"
      />
    </div>
  );
}

export default SearchLogo;
