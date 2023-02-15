import { Apitable, CodeBox, HomeExample } from "./components/index";
import { ImUsers } from "react-icons/im";
import { FaComments } from "react-icons/fa";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl px-6 m-auto  pt-7 lg:pt-28 pb-14 lg:pb-28 ">
        <div className="flex flex-col lg:flex-row relative gap-14">
          <span className="absolute -top-20 -left-28 pointer-events-none opacity-20 bg-gradient-to-r from-lime-300 via-lime-400 rounded-full to-green-400 h-[100vw] w-[100vw] blur-[20vw] md:h-[40vw] md:w-[40vw] md:blur-[8vw] lg:h-[40vh] lg:w-[40vh] lg:right-[-10vw] lg:blur-[10vh] z-[1]"></span>
          <div className="space-y-10 relative z-[2] w-full lg:w-3/5">
            <h1 className=" text-4xl lg:text-6xl font-semibold leading-[48px] lg:leading-[68px] tracking-wide">
              Fast and Free<span className="text-green-500 "> Dummy APIs </span>
              for Testing Your Projects Locally
            </h1>
            <h2 className="text-xl text-zinc-600">
              Access Ligtening Fast Fake APIs for Testing Your Projects Locally
              During Development Phase
            </h2>
            <div className="py-7 flex items-center gap-7">
              <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-lg text-xl hover:bg-green-600">
                API Guide
              </button>
              <Link
                href={"https://www.github.com/sonumagnus"}
                className="flex items-center gap-2 font-medium"
              >
                Open on Github <HiOutlineArrowLongRight size={22} />
              </Link>
            </div>
          </div>
          <div className=" w-full lg:w-2/5">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <CodeBox>{testCode}</CodeBox>
            </div>
          </div>
        </div>

        <div className="max-w-7xl m-auto mt-20 space-y-4">
          <ApiResources />
        </div>
      </div>
      <HomeExample />
      <Apitable />
    </>
  );
}

function ApiResources() {
  return (
    <>
      <h3 className="text-3xl font-semibold mb-12">APIs By Type:</h3>
      {Resources.map((resource) => (
        <div
          key={resource.name}
          className="flex items-center text-lg pb-5 lg:pb-0"
        >
          <p className="mr-5">{resource.icon}</p>
          <p className=" flex flex-col  lg:flex-row  gap-1 lg:gap-48">
            <span className=" w-32 font-medium">{resource.name}</span>
            <a
              href={resource.api}
              className=" italic hover:underline hover:text-blue-500"
            >
              {resource.api}
            </a>
          </p>
        </div>
      ))}
    </>
  );
}

const testCode = `fetch("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`;

const iconStyling = {
  size: 24,
  color: "green",
};

const Resources = [
  {
    name: "Posts",
    api: "http://localhost:3000/api/posts",
    icon: (
      <BsFileEarmarkPostFill
        size={iconStyling.size}
        color={iconStyling.color}
      />
    ),
  },
  {
    name: "Users",
    api: "http://localhost:3000/api/users",
    icon: <ImUsers size={iconStyling.size} color={iconStyling.color} />,
  },
  {
    name: "Comments",
    api: "http://localhost:3000/api/comments",
    icon: <FaComments size={iconStyling.size} color={iconStyling.color} />,
  },
];
