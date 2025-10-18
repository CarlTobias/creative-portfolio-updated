"use client";
import { ColourfulText } from "@/components/Aceternity/colorfulText";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/Aceternity/draggableCard";
import Image from "next/image";

export default function About() {
  const items = [
    {
      image: "/assets/images/me/me.jpeg",
      className:
        "absolute left-[5%] md:top-58 lg:top-50 xl:top-66 md:left-[5%] lg:left-[9%] xl:left-[11%] rotate-[-5deg]",
    },
    {
      image: "/assets/images/me/me2.jpeg",
      className:
        "absolute left-[20%] md:top-61 lg:top-55 xl:top-71 md:left-[26%] lg:left-[31%] xl:left-[30%] rotate-[6deg]",
    },
    {
      image: "/assets/images/me/me3.jpg",
      className:
        "absolute left-[40%] md:top-57 lg:top-52 xl:top-67 md:left-[48%] lg:left-[52%] xl:left-[50%] rotate-[-8deg]",
    },
    {
      image: "/assets/images/me/me4.jpg",
      className:
        "absolute left-[55%] md:top-59 lg:top-53 xl:top-68 md:left-[65%] lg:left-[68%] xl:left-[67%] rotate-[4deg]",
    },
  ];

  return (
    <main className="flex flex-col h-full overflow-y-auto">
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute z-0 flex flex-col gap-3 w-[75vw] text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold opacity-90">
            Kumusta! I'm <ColourfulText text={"Carl"} animated={false} />.
          </h1>

          <h2 className="w-full text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold opacity-90 text-justify">
            An aspiring UI/UX Designer and Game Developer with a love for
            Photography, Videography and Music.
          </h2>
        </div>

        <DraggableCardContainer className="absolute z-10 w-full h-full">
          {items.map((item, index) => (
            <DraggableCardBody key={index} className={item.className}>
              <Image
                src={item.image}
                alt=""
                width={400}
                height={400}
                className="pointer-events-none relative z-10 h-56 w-40 md:h-64 md:w-48 lg:h-72 lg:w-56 xl:h-80 xl:w-64 object-cover rounded-xl mx-auto"
              />
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>

      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row w-full h-dvh items-center p-10 gap-10">
          <div className="bg-blue-900 h-full w-md rounded-lg flex justify-center items-center">
            Fun vertical video doing silly things
          </div>

          <div className="flex flex-4/5">
            <p className="md:text-2xl lg:text-4xl xl:text-5xl font-light text-justify">
              My name is <span className="md:text-4xl lg:text-5xl xl:text-6xl font-bold">Carl Tobias</span>. I bring
              ideas to life through thoughtful design and interactive
              experiences. From crafting intuitive interfaces to building
              immersive games, I create work that blends creativity, function,
              and a touch of playfulness.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full h-dvh items-center p-10">
          Creative Projects like video edits and photographs
        </div>
      </div>
    </main>
  );
}
