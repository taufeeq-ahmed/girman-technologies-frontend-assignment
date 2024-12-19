import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <Image
      src={"/not-found.svg"}
      width={350}
      height={350}
      alt="not-found"
      className="mx-auto"
    />
  );
}

export default NotFound;
