"use client";
import React from "react";
import Link from "next/link";
import { navbarItems as navbarItemsResume } from "@/data/navigation/resume/navbar";
import { navbarItems as navbarItemsZdev } from "@/data/navigation/zdev/navbar";
import { usePathname } from "next/navigation";

const Sections = () => {
  const SectionsList =
    usePathname() === "/zdev" ? navbarItemsZdev : navbarItemsResume;
  return (
    <>
      {SectionsList.map((item) => (
        <li key={item.text} className="text-xs">
          <Link href={item.href} scroll={true}>
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Sections;
