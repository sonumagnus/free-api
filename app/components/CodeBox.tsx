"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Source_Code_Pro } from "@next/font/google";

const source_code_pro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function CodeBox({
  children,
  threeDot = true,
  showLineNumbers = false,
  cssState = false,
}: {
  children: string;
  lang?: string;
  threeDot?: boolean;
  showLineNumbers?: boolean;
  cssState?: boolean;
}) {
  const dotCss = "w-3 h-3 rounded-full";
  return (
    <div className={`${source_code_pro.className}`}>
      {threeDot && (
        <div className="h-12 flex gap-2 items-center px-6">
          <div className={`${dotCss} bg-red-400`}></div>
          <div className={`${dotCss} bg-yellow-400`}></div>
          <div className={`${dotCss} bg-green-400`}></div>
        </div>
      )}
      <div className={cssState ? "fade-in-text" : ""}>
        <SyntaxHighlighter
          showLineNumbers={showLineNumbers}
          language="lang"
          customStyle={{
            backgroundColor: "transparent",
            padding: "24px",
            fontFamily: source_code_pro.className,
            fontSize: "18px",
            lineHeight: "1.6",
          }}
          children={children}
          style={githubGist}
        ></SyntaxHighlighter>
      </div>
    </div>
  );
}
