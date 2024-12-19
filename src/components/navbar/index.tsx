import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const navLinks = {
    website: "https://girmantech.com/",
    linkedin: "https://www.linkedin.com/company/girmantech",
    contact: "mailto:contact@girmantech.com",
  };

  return (
    <div className="h-[60px] w-full sm:h-[110px] flex justify-center items-center shadow-navbar z-10 relative ">
      <div className="nav-content w-full px-10 sm:w-[1000px] flex justify-between items-center ">
        <Image
          src={"/girman-logo-small.svg"}
          alt="logo-small"
          width={500}
          height={60}
          className="h-[30px] sm:h-[60px] w-auto"
        />
        <ul className="links text-2xl hidden sm:flex justify-center items-center gap-10  ">
          <Link href={"/"}>
            <li className="link font-bold text-themed-blue underline">
              SEARCH
            </li>
          </Link>
          <Link href={navLinks.website}>
            <li className="link">WEBSITE</li>
          </Link>
          <Link href={navLinks.linkedin}>
            <li className="link">LINKEDIN</li>
          </Link>
          <Link href={navLinks.contact}>
            <li className="link">CONTACT</li>
          </Link>
        </ul>
        <div className="sm:hidden nav-menu">
          <Image src={"/nav-menu.png"} alt="nav-menu" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
