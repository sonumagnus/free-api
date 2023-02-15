"use client";

import React, { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiVuejsLine } from "react-icons/ri";
import { CodeBox } from ".";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { apiResponse } from "@/api-example-code";

const iconSize = 45;
export default function HomeExample() {
  const [exampleIndex, setExampleIndex] = useState(0);

  const languageList = [
    { name: "nodejs", icon: <FaNodeJs size={iconSize} /> },
    { name: "vuejs", icon: <RiVuejsLine size={iconSize} /> },
    { name: "nextjs", icon: <TbBrandNextjs size={iconSize} /> },
  ];
  return (
    <div>
      <div className="relative">
        <div className="max-w-7xl m-auto px-6 relative">
          <h3 className="text-3xl font-semibold mb-7">Framework Example:</h3>
          <p className="text-xl text-zinc-600 mb-7 max-w-xl">
            Here are some example of fetching myjsonAPI with different languages
            and frameworks
          </p>
          <Link
            href="#"
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 focus:ring-green-600 mb-12"
          >
            All Examples <GoChevronRight className="text-green-400 ml-1" />
          </Link>
          <div className="flex pb-10 pl-7 lg:pl-20 gap-14 max-w-xl">
            {languageList.map((language, index) => (
              <div
                key={language.name}
                onClick={() => setExampleIndex(index)}
                className={`flex flex-col gap-4 items-center font-medium ${
                  index === exampleIndex ? "text-green-600" : "text-slate-300"
                }`}
              >
                {language.icon}
                <span
                  className={`capitalize ${
                    index === exampleIndex ? "text-greee-600" : "text-slate-600"
                  }`}
                >
                  {language.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className=" pb-12 lg:pb-24">
          <div className="max-w-7xl m-auto flex lg:flex-row gap-10 px-6 relative z-[2] flex-col-reverse">
            <div className="max-h-80 overflow-auto border rounded-lg shadow-lg lg:w-1/2">
              <CodeBox lang="json" threeDot={false}>
                {apiResponse}
              </CodeBox>
            </div>
            <div className="lg:w-1/2 h-fit lg:-mt-28 relative z-[3] border rounded-lg shadow-lg overflow-auto max-h-80">
              <CodeBox>
                {/* @ts-ignore */}
                {exmapleTemplates[languageList[exampleIndex].name]}
              </CodeBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const exmapleTemplates = {
  nodejs: `fetch("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  vuejs: `usefetch("https://api.github.com/users")`,
  nextjs: `getStaticpro("https://api.github")`,
};