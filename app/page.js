"use client";
import { useEffect } from "react";
import { libre } from "@/app/fonts";
import { BackgroundBeamsWithCollision } from "@/components/Aceternity/backgroundBeams";
import { ColourfulText } from "@/components/Aceternity/colorfulText";
import Link from "next/link";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";

export default function Home() {
  // useEffect(() => {
  //   const html = document.documentElement;
  //   const body = document.body;
  //   const originalHtmlBg = html.style.background;
  //   const originalBodyBg = body.style.background;

  //   html.style.background = "transparent";
  //   body.style.background = "transparent";

  //   return () => {
  //     html.style.background = originalHtmlBg;
  //     body.style.background = originalBodyBg;
  //   };
  // }, []);
  

  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10">
        <BackgroundBeamsWithCollision />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center text-center md:gap-1 xl:gap-3">
        <h1 className={`md:text-3xl xl:text-5xl font-bold text-[#EEEEEE] ${libre.className}`}>
          <ColourfulText text="Game Developer and UX Designer" />
        </h1>
        <p className="md:text-xl xl:text-3xl text-[#EEEEEE]">BSc Creative Computing Graduate</p>
      </div>

      <div className="w-full flex justify-end items-end gap-5 text-[#EEEEEE] text-3xl pb-5 px-5">
        <Link
          href="https://www.facebook.com/CarlT.16"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1877F2] transition-colors duration-200 ease-in"
        >
          <GrFacebookOption />
        </Link>

        <Link
          href="https://www.instagram.com/tobleronewithfriedchicken/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E1306C] transition-colors duration-200 ease-in"
        >
          <GrInstagram />
        </Link>

        <Link
          href="https://www.linkedin.com/in/carl-amir-tobias-4a73b32b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0072B1] transition-colors duration-200 ease-in"
        >
          <GrLinkedinOption />
        </Link>
      </div>
    </div>
  );
}






