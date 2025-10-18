"use client";
import { useState, useRef, useEffect } from "react";
import { MacbookScroll } from "@/components/Aceternity/macbookScroll";
import { TabletScroll } from "@/components/Aceternity/tabletScroll";
import { libre, pacifico, monts, league } from "@/app/fonts";

export default function PortfolioPage() {
  const tabletTitle = (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl lg:text-4xl font-semibold text-black dark:text-white">
        Web Redesign
      </h1>
      <h1
        className={`${league.className} md:text-6xl lg:text-7xl font-bold mt-1 leading-none`}
      >
        Pinoy Travels & Tourism
      </h1>
    </div>
  );

  const tabletContent = (
    <img
      src="/assets/images/pinoyTnT/pinoyTnTPages.png"
      className="h-full w-full object-cover"
    />
  );

  return (
    <main className="flex flex-col h-full overflow-y-auto pt-14 items-center">
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="flex flex-col w-full h-full justify-center items-center text-center px-4">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl ${libre.className}`}>
            Case
          </h1>
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold">Studies</p>
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-8 lg:gap-10 items-center justify-center bg-transparent px-4 py-8 lg:py-10">
        <div className="relative w-full h-auto lg:h-[225vh]">
          <MacbookScroll
            src="/assets/images/woofles/wooflesClip.mp4"
            showGradient={false}
            badge={
              <a href="https://woofles.onrender.com">
                <div className="px-3 py-1 text-white text-sm rounded-lg -rotate-6">
                  <img
                    src="/assets/images/woofles/wooflesLogo.png"
                    alt="Woofles Logo"
                    className="h-8 w-8 lg:h-10 lg:w-10"
                  />
                </div>
              </a>
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-16 lg:gap-50 w-[90vw] max-w-7xl 2xl:max-w-8xl">
        <div className="flex flex-col gap-6 lg:gap-10 w-full h-[100vh] justify-center">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              01
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Problem
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              Social media is flooded with pet content, but there isn't a lot of
              platforms that dedicate a space just for animals.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              I wanted to design and build a platform where pet owners could
              share photos, videos, and connect through pet communities, events,
              and festivals — without worrying about overposting.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full min-h-[50vh] lg:h-[100vh] justify-center">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              02
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Creative
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              A warm and welcoming visual identity that blends playful character
              with modern simplicity.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              Warm neutrals, bright accents, and friendly typefaces build a
              cozy, pet-centered visual experience. Every element was designed
              to feel inviting and playful, reflecting the joyful bond between
              pets and their owners.
            </p>
          </div>

          <div className="flex flex-row justify-evenly items-center gap-8 lg:gap-4 mt-6 lg:mt-10">
            <img
              src="/assets/images/woofles/wooflesColorScheme.png"
              className="md:w-sm lg:w-md xl:w-2xl rounded-2xl"
            />
            <div className="flex flex-col gap-6 lg:gap-10 items-center text-center lg:text-left">
              <p
                className={`md:text-6xl lg:text-7xl xl:text-9xl ${pacifico.className}`}
              >
                Pacifico
              </p>
              <p
                className={`md:text-4xl lg:text-5xl xl:text-6xl ${monts.className}`}
              >
                Montserrat
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              03
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Technical
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              The platform works with the use of the MERN tech stack along with
              libraries like Zustand and Cloudinary.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              To create a social media platform, the technical part needs to
              deal with a number of things such as account creation and access,
              photo/video uploads, information storage, etc.
            </p>
          </div>

          <div className="flex flex-col justify-evenly items-center gap-6 lg:gap-4 mt-6 lg:mt-10">
            <img
              src="/assets/images/woofles/wooflesMERN.png"
              className="w-full"
            />
            <div className="flex flex-row justify-center items-center">
              <img
                src="/assets/images/woofles/wooflesZustand.png"
                className="md:w-sm lg:w-lg xl:w-xl"
              />
              <img
                src="/assets/images/woofles/wooflesCloudinary.png"
                className="md:w-2xs lg:w-sm xl:w-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full h-[100vh] justify-center">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              04
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Learned
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              This project taught me how to balance both front-end and back-end
              development in a full-stack environment.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              I learned the value of testing, debugging, and iterating, and it
              showed me that persistence pays off when tackling technical
              obstacles. If I were to continue developing Woofles, I'd explore
              adding friend connections, event RSVPs, and a more mobile-friendly
              redesign.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <TabletScroll titleComponent={tabletTitle}>
          {tabletContent}
        </TabletScroll>
      </div>

      <div className="flex flex-col gap-16 lg:gap-50 w-[90vw] max-w-7xl 2xl:max-w-8xl">
        <div className="flex flex-col gap-6 lg:gap-10 w-full h-[100vh] justify-center">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              01
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Problem
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              The agency's website was outdated and didn't reflect its
              credibility or cater to modern user expectations.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              Pinoy Travels & Tourism's website lacked strong visual hierarchy,
              consistent branding, and intuitive navigation. It felt dated and
              was difficult for users to explore services or make inquiries
              smoothly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full h-[100vh] justify-center">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              02
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Creative
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              The company wanted a clean and travel-inspired redesign that
              captures the spirit of exploration and trust.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              Our goal was to modernize the brand's online presence by
              introducing a more welcoming visual direction. The redesign
              prioritized readability, consistency, and visual flow to create a
              sense of familiarity.
            </p>
          </div>

          <div className="flex flex-row justify-evenly items-center gap-8 lg:gap-4">
            <img
              src="/assets/images/pinoyTnT/pinoyTnTColorScheme.png"
              className="md:w-md lg:w-xl xl:w-2xl rounded-2xl"
            />
            <div className="flex flex-col items-center text-center lg:text-left">
              <p
                className={`md:text-6xl lg:text-7xl xl:text-9xl font-bold ${league.className}`}
              >
                League
              </p>
              <p
                className={`md:text-4xl lg:text-5xl xl:text-6xl ${league.className}`}
              >
                Spartan
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              03
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Technical
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              We worked closely with the company to ensure the website
              maintained their brand identity, using effective communication and
              collaborative design tools.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              We collected feedback to align our technical decisions with their
              goals, streamlining content structure, improved responsiveness
              across devices, and implemented cleaner navigation flows. Work was
              divided evenly within the team to ensure consistency and efficient
              progress from design to deployment.
            </p>
          </div>

          <img
            src="/assets/images/pinoyTnT/pinoyTnTDesComm.png"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 w-full h-[100vh] justify-center">
          <div className="flex gap-5 items-center">
            <h1
              className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE] ${libre.className}`}
            >
              04
            </h1>
            <h1 className={`text-6xl lg:text-8xl xl:text-9xl text-[#EEEEEE]`}>
              The Learned
            </h1>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-0">
            <p className="text-justify text-xl lg:text-2xl xl:text-4xl font-semibold">
              he project strengthened my ability to translate client feedback
              into clear design and technical outcomes.
            </p>
            <p className="text-justify text-base lg:text-lg xl:text-2xl">
              I learned the importance of structured communication, consistent
              documentation, and balancing creativity with usability. This
              experience also improved how I manage teamwork dynamics and adapt
              designs to meet both aesthetic and functional needs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
