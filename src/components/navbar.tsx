"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const getTitle = () => {
    return pathname === "/zdev" ? "Z Dev LLC" : "Andrés Jácome";
  };
  const getSrc = () => {
    return pathname === "/zdev"
      ? "/images/zdev_logo_v1.png"
      : "https://github.com/andresj-io.png";
  };
  const navItems = [
    {
      text: "About me",
      href: "#about-me",
    },
    {
      text: "Experience",
      href: "#experience",
    },
    {
      text: "Education",
      href: "#education",
    },
    {
      text: "Digital Badges",
      href: "#digital-badges",
    },
  ];
  const options = [
    {
      title: "Andres Jacome",
      href: "/",
      src: "https://github.com/andresj-io.png",
    },
    {
      title: "Z Dev",
      href: "/zdev",
      src: "/images/zdev_logo_v1.png",
    },
  ];
  return (
    <div className="navbar bg-base-100 fixed left-0 right-0 top-0 z-50">
      <div className="flex-1">
        <Image alt={getTitle()} src={getSrc()} width={80} height={80} />
        <a className="btn btn-ghost text-xl">{getTitle()}</a>
        {navItems.map((item) => (
          <Link key={item.text} href={item.href} className="btn btn-ghost">
            {item.text}
          </Link>
        ))}
      </div>
      <div>
        {options.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image alt={item.title} src={item.src} width={80} height={80} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
