import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const socialIconSize = 22;

export default function Footer() {
  return (
    <>
      <div
        className=" mt-20
        pt-10
      "
      >
        <div className="max-w-7xl m-auto px-7">
          <div className="font-semibold text-4xl">
            <Image
              src="/myjsonapi.svg"
              height={40}
              width={200}
              alt="logo"
              priority
            />
          </div>
          <p className="my-7 text-sm lg:text-base max-w-xl">
            Access Ligtening Fast Fake APIs for Testing Your Projects Locally
            During Development Phase
          </p>
        </div>
      </div>
      <div className="max-w-7xl px-6 m-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="text-zinc-600">© 2023 myjsonAPI.Com</div>
          <div className="flex gap-4">
            <ul className="flex items-center gap-5 text-zinc-800">
              <li>
                <AiFillGithub size={socialIconSize} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
