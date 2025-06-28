"use client";
import { fira } from "@/app/fonts";
import { ColourfulText } from "@/components/Aceternity/colorfulText";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 text-[#EEEEEE]">
      <div className="flex w-screen h-screen justify-between items-center pl-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-extrabold">
              Kumusta! I'm <ColourfulText text={"Carl"} animated={false} />.
            </h1>

            <h1 className="w-200 text-5xl font-semibold">
              An aspiring UI/UX Designer and Game Developer with a love for
              Photography, Videography and Music.
            </h1>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className={`text-[#57A64A] ${fira.className}`}>// About Me</h1>

            <div className="flex flex-col gap-10">
              <p className="w-150 text-2xl text-justify">
                I'm a graduate of Bath Spa University with a BSc in Creative
                Computing. Originally from the Philippines, I've lived most of
                my life in Dubai, UAE, and often consider myself an honorary
                Emirati.
              </p>

              <p className="w-150 text-2xl text-justify">
                I've always been curious about how websites and video games are
                made, but my love for design and development grew later in life.
                Now, every website I visit and every game I play inspires me to
                create.
              </p>

              <p className="w-150 text-2xl text-justify">
                Music has always been my first love. There's something about
                hearing people's emotions through rhythmic noise that makes me
                feel deeply connected to the world. I express myself not only
                through music but also through photography and videography.
                Capturing beautiful landscapes and meaningful moments is my way
                of sharing how I see the world.
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/assets/images/me/me.png"
            alt="Logo Carl"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </main>
  );
}
