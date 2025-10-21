"use client";
import { useState } from "react";
import { ColourfulText } from "@/components/Aceternity/colorfulText";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/Aceternity/draggableCard";
import { Carousel } from "@/components/Aceternity/carousel";
import Image from "next/image";
import { libre } from "../fonts";

export default function About() {
  const [showDragIndicator, setShowDragIndicator] = useState(true);
  const [isFading, setIsFading] = useState(false);

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

  const slideData = [
    {
      src: "/assets/images/photography/image1.jpg",
    },
    {
      src: "/assets/images/photography/image2.jpg",
    },
    {
      src: "/assets/images/photography/image3.jpg",
    },
    {
      src: "/assets/images/photography/image4.jpg",
    },
    {
      src: "/assets/images/photography/image5.jpg",
    },
    {
      src: "/assets/images/photography/image6.jpg",
    },
    {
      src: "/assets/images/photography/image7.jpg",
    },
  ];

  const handleIndicatorClick = () => {
    if (showDragIndicator && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setShowDragIndicator(false);
        setIsFading(false);
      }, 300);
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-neutral-950 to-neutral-800" />
      <main
        className="flex flex-col h-full overflow-y-auto"
        onClick={handleIndicatorClick}
      >
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

          {showDragIndicator && (
            <div
              className={`absolute md:bottom-35 md:left-15 xl:bottom-15 xl:left-20 z-20 cursor-pointer transition-opacity duration-300 ${
                isFading ? "opacity-0" : "opacity-70"
              }`}
            >
              <Image
                src="/assets/images/dragMe.png"
                alt="Drag Me!"
                width={100}
                height={100}
                className="hover:opacity-100 transition-opacity duration-200 md:-rotate-15 xl:-rotate-12"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row w-full h-dvh items-center p-10 gap-10">
            <div className="h-full w-md rounded-lg flex justify-center items-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="max-h-full max-w-full object-contain rounded-lg"
                style={{ maxHeight: "80vh" }}
              >
                <source
                  src="/assets/images/me/portfolioClip.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex flex-4/5">
              <p className="md:text-2xl lg:text-4xl xl:text-5xl font-light text-justify">
                I like making things that people can feel, whether that's a
                smooth interaction, a fun little animation, or a game that pulls
                you in. Design, for me, is part creativity, part curiosity, and
                a little bit of chaos in between.
              </p>
            </div>
          </div>

          <div className="flex flex-col h-[100vh] justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className={`text-3xl font-bold ${libre.className}`}>
                Photography
              </h1>
              <p className="text-2xl">A glimpse through my lens.</p>
            </div>
            <div className="flex items-center relative overflow-hidden w-full">
              <Carousel slides={slideData} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
