"use client";
import { useState, useRef, useEffect } from "react";
import { MacbookScroll } from "@/components/Aceternity/macbookScroll";
import { libre } from "@/app/fonts";

export default function PortfolioPage() {
  const wooflesImages = [
    "/assets/images/woofles/wooflesHome.png",
    "/assets/images/woofles/wooflesLogin.png",
    "/assets/images/woofles/wooflesProfile.png",
    "/assets/images/woofles/wooflesEditProfile.png",
    "/assets/images/woofles/wooflesSettings.png",
  ];

  const pinoyTnTImages = [
    "/assets/images/pinoytnt/pinoytnt1.png",
    "/assets/images/pinoytnt/pinoytnt2.png",
    "/assets/images/pinoytnt/pinoytnt3.png",
    "/assets/images/pinoytnt/pinoytnt4.png",
    "/assets/images/pinoytnt/pinoytnt5.png",
    "/assets/images/pinoytnt/pinoytnt6.png",
    "/assets/images/pinoytnt/pinoytnt7.png",
    "/assets/images/pinoytnt/pinoytnt8.png",
    "/assets/images/pinoytnt/pinoytnt9.png",
    "/assets/images/pinoytnt/pinoytnt10.png",
  ];

  const [wooflesIndex, setWooflesIndex] = useState(0);
  const [pinoyTnTIndex, setPinoyTnTIndex] = useState(0);

  useEffect(() => {
    const wooflesInterval = setInterval(() => {
      setWooflesIndex((prev) => (prev + 1) % wooflesImages.length);
    }, 5000);

    const pinoyTnTInterval = setInterval(() => {
      setPinoyTnTIndex((prev) => (prev + 1) % pinoyTnTImages.length);
    }, 5000);

    return () => {
      clearInterval(wooflesInterval);
      clearInterval(pinoyTnTInterval);
    };
  }, []);

  const currentWooflesImage = wooflesImages[wooflesIndex];
  const currentPinoyTnTImage = pinoyTnTImages[pinoyTnTIndex];

  return (
    <main className="flex flex-col h-full overflow-y-auto pt-14">
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="flex flex-col w-full h-full justify-center items-center mb-20">
          <h1 className="text-3xl font-bold">Selected Works</h1>
          <p className="text-lg">
            Projects that I've worked on from 2022 - Now
          </p>
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-transparent px-4 py-10">
        {/* <div className="flex flex-col gap-1 w-full px-20">
          <h3 className={`text-xl text-[#EEEEEE] ${libre.className}`}>
            Woofles
          </h3>
          <h2 className="text-2xl font-bold">Pet Social Media Website</h2>
        </div> */}

        <div className="relative w-full h-[300vh]">
          <MacbookScroll
            src="/assets/images/woofles/wooflesSignUp.png"
            showGradient={false}
            badge={
              <a href="https://woofles.onrender.com">
                <div className="px-3 py-1 text-white text-sm rounded-lg -rotate-6">
                  <img
                    src="/assets/images/woofles/wooflesLogo.png"
                    alt="Woofles Logo"
                    className="h-10 w-10"
                  />
                </div>
              </a>
            }
          />
        </div>
      </div>

      <div className="flex gap-10 w-full px-20">
        <div className="flex flex-col flex-1/3 gap-3">
          <h2 className="text-2xl font-bold">Challenge / Problem</h2>
          <p className="text-justify">
            Social media is flooded with pet content, but there isn’t a
            dedicated space just for animals. I wanted to design and build a
            platform where pet owners could share photos, videos, and connect
            through pet communities, events, and festivals — without worrying
            about overposting.
          </p>
        </div>

        <div className="flex flex-col flex-1/3 gap-3">
          <h2 className="text-2xl font-bold">My Role</h2>
          <p className="text-justify">
            I was responsible for the full development of the website. This
            included planning the platform’s features, building both front-end
            and back-end, and integrating tools for state management and media
            handling.
          </p>
        </div>

        <div className="flex flex-col flex-1/3 gap-3">
          <h2 className="text-2xl font-bold">Process</h2>
          <p className="text-justify">
            -Chose the MERN stack as the foundation.
          </p>
          <p className="text-justify">
            -Implemented Zustand for efficient state management.
          </p>
          <p className="text-justify">
            -Integrated Cloudinary for smooth image and video uploads.
          </p>
          <p className="text-justify">
            -Encountered (and solved) many challenges along the way. From
            database structuring to managing media storage, it taught me a lot
            about handling real-world development hurdles.
          </p>
        </div>

        <div className="flex flex-col flex-1/3 gap-3">
          <h2 className="text-2xl font-bold">Result</h2>
          <p className="text-justify">
            Woofles became my first fully functioning website, complete with
            user accounts, media uploads, and community features. It stands as a
            showcase of my growth as a developer and my ability to bring a
            concept to life.
          </p>
        </div>

        <div className="flex flex-col flex-1/3 gap-3">
          <h2 className="text-2xl font-bold">Reflection / Learnings</h2>
          <p className="text-justify">
            This project taught me how to balance both front-end and back-end
            development in a full-stack environment. I learned the value of
            testing, debugging, and iterating, and it showed me that persistence
            pays off when tackling technical obstacles. If I were to continue
            developing Woofles, I’d explore adding friend connections, event
            RSVPs, and a mobile-friendly redesign.
          </p>
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-transparent px-4 py-10">
        <div className="flex flex-col gap-1 w-full px-20">
          <h3 className={`text-xl text-[#EEEEEE] ${libre.className}`}>
            Pinoy Travels & Tourism
          </h3>
          <h2 className="text-2xl font-bold">
            Redesigning the Website for a Travel Agency
          </h2>
        </div>

        <div className="flex flex-row w-full gap-30 justify-between px-20">
          <div className="flex flex-col flex-2/3 gap-10 w-full justify-between items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">What</h2>
              <p className="text-justify">
                My team and I redesigned the website for Pinoy Travels &
                Tourism, a travel agency. We reached out to the company and
                offered a complete website remodel to practice the theory
                lessons we’ve learned to improve its design, user experience,
                and functionality.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">Why</h2>
              <p className="text-justify">
                We saw the agency’s current website and wanted to enhance the
                visual appeal, usability, and overall performance of it to
                ensure that their users can have a smoother and more
                user-friendly experience.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">How</h2>
              <p className="text-justify">
                During this project, the team and I maintained constant
                communication with the company so that the redesign can match
                their needs while maintaining their brand identity. We also
                looked for their feedback to ensure that the final product was
                up to their standards. And we split the work evenly to
                streamline efficiency and ensure a balanced workload.
              </p>
            </div>
          </div>

          <div className="flex flex-1/2 justify-center">
            <div>
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[170px] w-[300px] md:h-[400px] md:w-[600px]">
                <div className="rounded-xl overflow-hidden h-[140px] md:h-[368px]">
                  <img
                    src={currentPinoyTnTImage}
                    className="h-[140px] md:h-[368px] w-full rounded-xl object-cover object-top"
                    alt="Pinoy TnT preview"
                  />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[600px]"></div>
              <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[30px] max-w-[83px] md:h-[50px] md:max-w-[142px]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
