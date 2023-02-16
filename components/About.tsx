"use client";

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

type Props = {};

function About({}: Props) {
  const [mainText, setMainText] = useTypewriter({
    words: ["Video editor", "Animator", "Script writer", "Video maker"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <h2 className="ml-10 md:ml-0 text-gray-500 flex text-center justify-center font-semibold text-2xl tracking-[2rem]">
        About
      </h2>
      <div className="max-w-[80%] min-h-[60vh] mx-auto flex justify-center items-center p-5">
        <div className="pt-10 flex flex-col lg:flex-row gap-10 justify-center items-center ">
          <div className="relative py-10 w-52 h-52 sm:w-60 sm:h-60  md:w-80 md:h-80">
            <Image
              src={"/FotoGonza.jpeg"}
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
              <p className="textParraf">
                {`As a professional video editor with a background in cinematic arts, I bring a unique perspective to the art of video editing. I have a passion for crafting visually stunning and engaging videos that effectively communicate a message to the audience. I approach every project with the understanding that the images I'm working with have their own tempo and story to tell, and it's my job to carefully craft these elements into a cohesive final product.`}
              </p>
              <br />
              <p className="textParraf">
                {`I have five years of experience working as a freelance video editor and two years of experience working as the Director of Content and Communications for an architecture firm. In this role, I gained valuable experience in creating videos for social media, marketing, podcasts, YouTube channels and more.`}
              </p>
              <br />
              <p className="textParraf ">
                {`If you're looking for a video editor who is passionate about the art of video editing and has the skills and experience to create visually stunning and engaging videos that effectively communicate your message, I would love to hear from you. Let's work together to create something amazing.`}
              </p>
            </div>
            <div className="flex gap-5 justify-center md:justify-end">
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
    </>
  );
}

export default About;
