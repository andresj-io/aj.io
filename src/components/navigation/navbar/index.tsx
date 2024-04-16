"use client";
import React from "react";
import Logo from "./Logo";
import NavbarItems from "../sections";
import SitesLinks from "./Sites";
import NavbarMenuButton from "./NavbarMenuButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 flex shadow-md z-40">
      <NavbarMenuButton />
      <Logo />
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          <NavbarItems />
        </ul>
      </div>
      <SitesLinks />
    </div>
  );
};

export default Navbar;
