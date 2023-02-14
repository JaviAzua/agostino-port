"use client";

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function About({}: Props) {
  const [mainText, setMainText] = useTypewriter({
    words: ["Gonzalo Agostino", "Editor", "Writter", "VFX/SFX"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <h2 className="ml-10 md:ml-0 text-center font-semibold text-2xl tracking-[2rem]">
        About
      </h2>
      <div className="max-w-[80%] min-h-[60vh] mx-auto flex justify-center items-center">
        <div className="pt-10 flex flex-col lg:flex-row gap-10 justify-center items-center flex-1">
          <div className="relative w-[15rem] h-[20rem] md:w-80 md:h-96 rounded-lg">
            <Image
              src={"/FotoGonza.jpeg"}
              alt=""
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div className="flex-[2]">
            <h3 className="min-h-5 text-4xl font-semibold">
              {mainText} <Cursor />
            </h3>
            <p>
              If you’re a business, I want to create videos for your social
              media, marketing, podcasts, YouTube channel, and more. If you are
              an artist, designer, or creative agency, I want to make polished
              and aesthetically sophisticated (or even experimental) videos for
              your clients, your own portfolio. Looking forward to hearing from
              you to see what we can do together! Ask me about fixed-rate,
              guaranteed pricing as I am price-flexible for the right project.
            </p>
            <br />
            <p>
              I have five years working as a freelance video editor and two
              years working for an architecture firm as Director of Content and
              Communications. I write my own scripts in Spanish and am also able
              to collaborate with professional English-speaking copywriters and
              script-writers.
            </p>
            <br />
            <p>
              I work with: ◦ Adobe Premiere Pro ◦ Adobe After Effects ◦ Adobe
              Audition ◦ Adobe Illustrator ◦ Blender ◦ Adobe Photoshop ◦ Ableton
              Live
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
