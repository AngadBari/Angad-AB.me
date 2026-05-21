"use client";
import React from "react";
import { motion } from "motion/react";
import { Doto } from "next/font/google";
import { Figtree } from "next/font/google";
import Image from "next/image";
import { Btn } from "@/components/button/btn";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { MdEmail } from "react-icons/md";
const doto = Doto({ subsets: ["latin"], weight: ["400"] });
const figtree = Figtree({ subsets: ["latin"], weight: ["400"] });

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
        <a
          href="https://drive.google.com/file/d/15wGRGvczMBq1Q26ut5TbOJ4857ar1Mes/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Btn
            name="Download CV"
            Icon={<HiDownload />}
            className="cursor-pointer rounded-2xl "
          />
        </a>
      </div>
      <div className="border border-1  border-gray-500  border-dashed mt-8 "></div>
      <div className="">
        <p
          className={`${figtree.className} text-sm text-neutral-400 tracking-wide mt-3`}
        >
          Where to Find Me <span className="text-white"> Online</span>, If
          you're looking for me:
        </p>
        <div className=" flex gap-3 mt-3">
          <a
            href="https://twitter.com/angadbari01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn
              Icon={<FaXTwitter size={18} />}
              className="cursor-pointer rounded-2xl "
            />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=angadbari01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn
              Icon={<MdEmail size={18} />}
              className="cursor-pointer rounded-2xl "
            />
          </a>

          <a
            href="https://github.com/AngadBari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn
              Icon={<FaGithub size={18} />}
              className="cursor-pointer rounded-2xl "
            />
          </a>

          <a
            href="https://peerlist.io/angad01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn
              Icon={<SiPeerlist size={18} />}
              className="cursor-pointer rounded-2xl "
            />
          </a>

          <a
            href="https://www.linkedin.com/in/angadbari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn
              Icon={<FaLinkedin size={18} />}
              className="cursor-pointer rounded-lg  "
            />
          </a>
        </div>
      </div>

      <div className="border border-1  border-gray-500  border-dashed mt-8 "></div>
    </>
  );
};

export default Intro;
