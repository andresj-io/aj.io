import React from "react";
import Image from "next/image";
import Link from "next/link";

const SitesLinks = () => {
  const sites = [
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
    <div>
      {sites.map((item) => (
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
  );
};

export default SitesLinks;
