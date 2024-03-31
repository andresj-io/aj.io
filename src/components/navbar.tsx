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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Image alt={getTitle()} src={getSrc()} width={80} height={80} />
        <a className="btn btn-ghost text-xl">{getTitle()}</a>
      </div>
      <div>
        {navItems.map((item) => (
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
