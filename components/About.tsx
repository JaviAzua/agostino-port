"use client";

import { AboutT } from "@/types";
import Image from "next/image";
import React from "react";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeillustrator,
  SiBlender,
  SiAdobephotoshop,
  SiAbletonlive,
} from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "@/lib/client";

type Props = {
  aboutDB: AboutT;
};

function About({ aboutDB }: Props) {
  const Words = aboutDB.machineText.map((w) => w);
  const url = urlFor(aboutDB.photo && aboutDB.photo).url();

  const [mainText, setMainText] = useTypewriter({
    words: [Words[0], Words[1], Words[2], Words[3]],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <article className="overflow-hidden">
      <h2 className=" text-gray-500 flex text-center justify-center font-semibold text-2xl tracking-[2rem]">
        About
      </h2>
      <div className="max-w-[80%] min-h-[60vh] mx-auto flex justify-center items-center p-5">
        <div className="pt-10 flex flex-col lg:flex-row gap-10 justify-center items-center ">
          <div className="relative py-10 w-52 h-52 sm:w-60 sm:h-60  md:w-80 md:h-80">
            <Image
              src={url}
              alt=""
              fill
              className="object-cover rounded-full "
            />
          </div>

          <div className="max-w-[70%] md:max-w-[50%]">
            <div className=" py-10">
              <h3 className="min-h-5 text-4xl md:text-5xl text-center lg:text-left font-bold mb-10">
                {mainText} <Cursor cursorColor="#E79E22" />
              </h3>
              {aboutDB.bigText.map((parraf) => (
                <div key={parraf}>
                  <p className="textParraf">{parraf}</p>
                  <br />
                </div>
              ))}
            </div>
            <div className="flex md:gap-5 justify-center ">
              <SiAdobepremierepro className="iconAbout" />
              <SiAdobeaftereffects className="iconAbout" />
              <SiAdobeaudition className="iconAbout" />
              <SiAdobeillustrator className="iconAbout" />
              <SiAdobephotoshop className="iconAbout" />
              <SiBlender className="iconAbout" />
              <SiAbletonlive className="iconAbout" />
            </div>
          </div>
          <br />
        </div>
      </div>
    </article>
  );
}

export default About;
