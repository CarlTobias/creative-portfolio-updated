"use client";
import { ColourfulText } from "@/components/Aceternity/colorfulText";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/Aceternity/draggableCard";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const items = [
    {
      image: "/assets/images/me/me.jpeg",
      className: "absolute top-50 left-[15%] rotate-[-5deg]",
    },
    {
      image: "/assets/images/me/me2.jpeg",
      className: "absolute top-25 left-[32%] rotate-[6deg]",
    },
    {
      image: "/assets/images/me/me3.jpg",
      className: "absolute top-68 left-[50%] rotate-[-8deg]",
    },
    {
      image: "/assets/images/me/me4.jpg",
      className: "absolute top-40 left-[65%] rotate-[4deg]",
    },
  ];

  return (
    <main className="flex flex-col h-full overflow-y-auto">
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute z-0 flex flex-col gap-3 px-6 text-left">
          <h1 className="text-6xl font-extrabold opacity-90">
            Kumusta! I'm <ColourfulText text={"Carl"} animated={false} />.
          </h1>

          <h2 className="w-3xl text-5xl font-semibold opacity-90">
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
                className="pointer-events-none relative z-10 h-80 w-64 object-cover rounded-xl mx-auto"
              />
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>

      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row w-full h-dvh items-center p-10 gap-10">
          <div className="bg-blue-900 h-full w-md rounded-lg flex flex- justify-center items-center">
            Fun vertical video doing silly things
          </div>

          <div className="flex flex-4/5">
            <p className="text-4xl font-light">
              <span className="text-5xl font-bold">Carl Tobias </span>
              I bring ideas to life through thoughtful design and interactive
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



{/* <div className="flex flex-col w-full h-full gap-20">
  <div className="flex flex-col w-full h-full">
    <div className="flex flex-col gap-5 px-20">
      <h3 className={`text-[#57A64A] ${fira.className}`}>// About Me</h3>
      <hr className="border-t border-[#57A64A]" />
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">My Backstory</h2>
          <div className="w-3xl flex flex-col gap-10">
            <p className="text-2xl text-justify">
              I'm a graduate of Bath Spa University with a BSc in Creative
              Computing. Originally from the Philippines, I've lived most
              of my life in Dubai, UAE, and often consider myself an
              honorary Emirati.
            </p>

            <p className="text-2xl text-justify">
              I've always been curious about how websites and video games
              are made, but my love for design and development grew later
              in life. Now, every website I visit and every game I play
              inspires me to create.
            </p>

            <p className="text-2xl text-justify">
              Music has always been my first love. There's something about
              hearing people's emotions through rhythmic noise that makes
              me feel deeply connected to the world. I express myself not
              only through music but also through photography and
              videography. Capturing beautiful landscapes and meaningful
              moments is my way of sharing how I see the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col w-full h-full">
    <div className="flex flex-col gap-5 px-20">
      <h3 className={`text-[#57A64A] ${fira.className}`}>
        // Capabilities
      </h3>
      <hr className="border-t border-[#57A64A]" />
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">What Can I Do?</h2>
          <div className="w-3xl flex flex-col gap-10">
            <p className="text-2xl text-justify">
              I am a person driven by creativity and improvement. I love
              the challenge of using my skills to build off of what exists
              to create something new or refine what was. I learn quickly,
              work well independently, and approach problems with
              resourcefulness and resilience. I'm always eager to learn
              something new and enjoy solving challenges through creative
              thinking and collaboration.
            </p>

            <div>
              <p className="text-2xl text-justify">
                These are what my life and school experiences manifest
                into:
              </p>
              <div className="text-xl">
                <ul className="flex flex-col gap-3 list-[square] pt-5 pl-10">
                  <li>Product Design</li>
                  <li>2D Game Development</li>
                  <li>Web Development</li>
                  <li>Graphic Design</li>
                  <li>Photography</li>
                  <li>Videography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">Technical Skills</h2>
          <div className="w-3xl flex flex-col gap-10">
            <p className="text-2xl text-justify">
              Logo Images of Figma, VSCode, Photoshop, Premiere, C++, JS
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col w-full h-full pb-20">
    <div className="flex flex-col gap-5 px-20">
      <h3 className={`text-[#57A64A] ${fira.className}`}>// Career</h3>
      <hr className="border-t border-[#57A64A]" />
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">
            Professional Background
          </h2>
          <div className="w-3xl flex flex-col gap-10">
            <p className="text-2xl text-justify">
              Though I have not had previous work experience in product
              design or game development, I've been in other industries
              learning how the workforce functions. I've learned many
              skills in these jobs like how to communicate with my team,
              or how to deal with people in difficult situations. I also
              learned how to think quickly on my feet and critically
              assess certain situations.
            </p>

            <div className="flex w-full justify-between items-center">
              <div className="flex justify-between items-center gap-3">
                <Image
                  src="/assets/images/workLogos/drcLogo.jpg"
                  alt="DRC Logo"
                  width={75}
                  height={75}
                  className="rounded-sm"
                />
                <p className="text-xl">
                  Guest Relations -{" "}
                  <Link
                    href="https://dubairacingclub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Dubai Racing Club
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-lg">Nov 2024 - Apr 2025</p>
              </div>
            </div>

            <div className="flex w-full justify-between items-center">
              <div className="flex justify-between items-center gap-3">
                <Image
                  src="/assets/images/workLogos/doLogo.png"
                  alt="Dubai Opera Logo"
                  width={75}
                  height={75}
                  className="rounded-sm"
                />
                <p className="text-xl">
                  Food and Beverage Intern -{" "}
                  <Link
                    href="https://www.dubaiopera.com/en-US/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Dubai Opera
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-lg">Sep 2023 - Feb 2025</p>
              </div>
            </div>

            <div className="flex w-full justify-between items-center">
              <div className="flex justify-between items-center gap-3">
                <Image
                  src="/assets/images/workLogos/dauzLogo.png"
                  alt="DAUZ Logo"
                  width={75}
                  height={75}
                  className="rounded-sm"
                />
                <p className="text-xl">
                  Educator -{" "}
                  <Link
                    href="https://www.dubaiopera.com/en-US/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Dubai Aquarium & Underwater Zoo
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-lg">Sep 2023 - Feb 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}