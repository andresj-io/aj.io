"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  const pathname = usePathname();
  const getTitle = () => {
    return pathname === "/zdev" ? "Z Dev LLC" : "Andrés Jácome";
  };

  const getSrc = () => {
    return pathname === "/zdev"
      ? "/images/zdev_logo_v1.png"
      : "https://github.com/andresj-io.png";
  };

  return (
    <div className="flex-1">
      <Image alt={getTitle()} src={getSrc()} width={80} height={80} />
      <Link className="btn btn-ghost hidden text-xl md:flex" href="/">
        {getTitle()}
      </Link>
      <Link className="btn btn-ghost md:hidden text-xl sm:flex" href="/">
        {pathname}
      </Link>
    </div>
  );
};

export default Logo;
