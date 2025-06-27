"use client";
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
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundBeamsWithCollision />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center text-center px-5">
        <h1 className={`text-3xl font-bold text-white ${libre.className}`}>
          <ColourfulText text="Game Developer and UX Designer" />
        </h1>
        <p className="text-[#EEEEEE]">BSc Creative Computing Graduate</p>
      </div>

      <div className="w-full flex justify-end items-end gap-5 text-[#EEEEEE] text-3xl pb-5 px-5">
        <Link
          href="https://www.facebook.com/CarlT.16"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1877F2]"
        >
          <GrFacebookOption />
        </Link>

        <Link
          href="https://www.instagram.com/tobleronewithfriedchicken/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E1306C]"
        >
          <GrInstagram />
        </Link>

        <Link
          href="https://www.linkedin.com/in/carl-amir-tobias-4a73b32b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0072B1]"
        >
          <GrLinkedinOption />
        </Link>
      </div>
    </div>
  );
}
