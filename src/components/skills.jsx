import React from "react";
import Image from "next/image";
import { Doto } from "next/font/google";
import { Btn } from "./button/btn";
const doto = Doto({ subsets: ["latin"], weight: ["400"] });
export const Skills = () => {
  return (
    <>
      <div className="mt-3 flex gap-2 items-center">
        <h2 className={`${doto.className} text-2xl `}>MY STACK</h2>
        <p className=" text-center text-sm tracking-wide text-neutral-700">
          Which i Use/Know
        </p>
      </div>

      <div className="mt-5">
        <h2 className=" tracking-widest text-gray-400">&lt; Frontend /&gt;</h2>
        <div className=" flex gap-3 mt-3 flex-wrap">
          <Btn
            // name="JavaScript"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/javascript.svg"
                alt="JavaScript"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />
          <Btn
            // name="React"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/reactjs.svg"
                alt="React"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />
          <Btn
            // name="Next.js"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/nextjs.svg"
                alt="Next.js"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />
          <Btn
            // name="Tailwind CSS"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/tailwind.svg"
                alt="Tailwind CSS"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />
          <Btn
            // name="Framer Motion"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/framermotion.svg"
                alt="Framer Motion"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />

          <Btn
            // name="GSAP"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/gsap.svg"
                alt="GSAP"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />
          <Btn
            // name="HTML"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/html.svg"
                alt="HTML"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            }
          />
          <Btn
            // name="CSS"
            className=" rounded-[3px] border-dashed "
            Icon={
              <Image
                src="/images/css.svg"
                alt="CSS"
                width={100}
                height={100}
                className="w-7 h-7"
              />
            }
          />
        </div>
      </div>

      <div className="mt-5">
        <h2 className=" tracking-widest text-gray-400">&lt; Backend /&gt;</h2>
        <div className=" flex gap-3 mt-3 flex-wrap">
          <Btn
            // name="Node.js"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/nodejs.svg"
                alt="Node.js"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
        </div>
      </div>

      <div className="mt-5">
        <h2 className=" tracking-widest text-gray-400">&lt; Database /&gt;</h2>
        <div className=" flex gap-3 mt-3 flex-wrap">
          <Btn
            // name="MongoDB"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/mongodb.svg"
                alt="MongoDB"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
        </div>
      </div>

      <div className="mt-5">
        <h2 className=" tracking-widest text-gray-400">&lt; Tools /&gt;</h2>
        <div className=" flex gap-3 mt-3 flex-wrap">
          <Btn
            // name="Git"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/git.svg"
                alt="Git"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
          <Btn
            // name="GitHub"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/github.svg"
                alt="GitHub"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
          <Btn
            // name="VS Code"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/vscode.svg"
                alt="VS Code"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
          <Btn
            className=" rounded-[3px] border-dashed"
            // name="Postman"
            Icon={
              <Image
                src="/images/postman.svg"
                alt="Postman"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
          <Btn
            // name="Vercel"
            className=" rounded-[3px] border-dashed"
            Icon={
              <Image
                src="/images/vercel.svg"
                alt="Vercel"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            }
          />
        </div>
      </div>

      <div className="border border-1 border-gray-900  border-dashed mt-8 "></div>
    </>
  );
};
