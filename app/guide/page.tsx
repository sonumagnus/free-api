"use client";

import { useState } from "react";
import { fetchExmaple } from "@/api-example-code";

import { SiFarfetch } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { ExampleBox } from "../components";
import { MdApi } from "react-icons/md";

export default function Guide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cssState, setCssState] = useState(false);

  function clickHandler(index: number) {
    setActiveIndex(index);
    setCssState((prev) => !prev);
    setTimeout(() => {
      setCssState((prev) => !prev);
    }, 500);
  }

  return (
    <div className="max-w-7xl m-auto px-6 flex flex-col lg:flex-row gap-12 mt-6 lg:mt-20">
      <div className="lg:w-1/5 flex lg:flex-col overflow-x-auto">
        {sideList.map((tab, index) => (
          <div
            key={tab.title}
            onClick={() => clickHandler(index)}
            className={`flex py-3 px-4 cursor-pointer whitespace-nowrap ${
              activeIndex === index ? "bg-green-50 rounded-lg" : null
            }`}
          >
            <div className="mr-5">{tab.icon}</div>
            <div>{tab.title}</div>
          </div>
        ))}
      </div>
      <div className="lg:w-3/4">
        <ExampleBox
          cssState={cssState}
          /* @ts-ignore */
          fetchcode={fetchExmaple[sideList[activeIndex].active]}
        ></ExampleBox>
      </div>
    </div>
  );
}

const iconSize = 22;
const sideList = [
  {
    title: "Fetch API",
    icon: <SiFarfetch size={iconSize} />,
    active: "fetch",
  },
  {
    title: "Nodejs",
    icon: <IoLogoNodejs size={iconSize} />,
    active: "node",
  },
  {
    title: "Vue",
    icon: <FaVuejs size={iconSize} />,
    active: "vue",
  },
  {
    title: "Axios",
    icon: <MdApi size={iconSize} />,
    active: "axios",
  },
];
