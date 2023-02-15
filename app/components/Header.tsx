import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Poppins } from "@next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="flex h-20 items-center max-w-7xl px-6 m-auto">
      <div className="w-1/4">
        <Image
          src="/myjsonapi.svg"
          height={40}
          width={200}
          alt="logo"
          priority
        />
      </div>
      <ul className="flex gap-14 font-medium text-sm uppercase text-zinc-600 w-1/2 justify-center">
        {navs.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex w-1/4 justify-end">
        <AiFillGithub size={25} />
      </div>
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
