import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between h-20 items-center max-w-7xl px-6 m-auto">
      <HiMenuAlt2 className="lg:hidden" size={22} />
      <div className="w-1/4">
        <Link href="/">
          <Image
            src="/myjsonapi.svg"
            height={40}
            width={200}
            alt="logo"
            priority
          />
        </Link>
      </div>
      {/* <ul className="hidden lg:flex gap-14 font-medium text-sm uppercase text-zinc-600 w-1/2 justify-center">
        {navs.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul> */}
      <a
        href="https://github.com/sonumagnus/free-api"
        className="flex lg:w-1/4 justify-end"
      >
        <AiFillGithub size={25} />
      </a>
    </div>
  );
}

const navs = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Guide",
    path: "/guide",
  },
  {
    name: "Support",
    path: "/support",
  },
];
