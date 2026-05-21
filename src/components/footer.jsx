import React from "react";
import { Doto } from "next/font/google";
const doto = Doto({ subsets: ["latin"], weight: ["400"] });

export const Footer = () => {
  return (
    <div>
      <p className={`${doto.className} text-cyan-400 text-2xl mt-3`}>
        Angad (AB)
      </p>

      <p className=" text-neutral-500 text-sm text-center mt-10">
        Design & Developed by AngadBari <br />© 2025. All rights reserved.{" "}
        <a
          href="https://angadme.vercel.app/"
          className="text-cyan-400 hover:underline"
        >
          Visit my old portfolio 📟
        </a>
      </p>
    </div>
  );
};
