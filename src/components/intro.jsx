"use client";
import React from "react";
import { motion } from "motion/react";
import { Doto } from "next/font/google";
import Image from "next/image";
import { Btn } from "@/components/button/btn";
import { HiDownload } from "react-icons/hi";
const doto = Doto({ subsets: ["latin"], weight: ["400"] });

const Intro = () => {
  return (
    <>
      <div className=" flex gap-7 mt-10">
        <Image
          src="/images/avatar.jpg"
          alt="Angad"
          width={200}
          height={200}
          className="rounded-full w-20 h-20 "
        />
        <div className=" ">
          <h1 className={`${doto.className} text-4xl font-medium mb-2`}>
            Angad
          </h1>
          <p className="text-neutral-400 text-sm  font-mono tracking-tight">
            @angadbari01
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className=" mt-10 text-sm leading-relaxed tracking-tight "
      >
        <p className="text-gray-300">
          I'm{" "}
          <span className="text-neutral-50 font-medium ">
            Angad Bari ( AB )
          </span>
          , a 20yo developer living in Mumbai, India. I love to code and make
          (break) things.
        </p>
        <p className="mt-5 text-gray-400">
          I'm always trying to improve myself — whether it's through
          development, design, learning new tech, or creating something cool on
          the internet.
        </p>
        <p className="mt-5 text-gray-400">
          When I'm not coding, you'll probably find me watching movies or just
          sitting somewhere watching the sunset to refresh my mind.
        </p>
      </motion.div>
      <div className="mt-5">
        <Btn
          name="Download CV"
          Icon={<HiDownload />}
          className="cursor-pointer rounded-2xl "
        />
      </div>

      <div className="border border-1 border-gray-900  border-dashed mt-8 "></div>
    </>
  );
};

export default Intro;
