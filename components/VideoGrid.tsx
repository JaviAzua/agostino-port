"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { VideoGridT } from "@/types";

type Props = {
  video: VideoGridT;
};

function VideoGrid({ video }: Props) {
  const [hasWindow, setHasWindow] = useState(false);

  const [descrip, setDescrip] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <div className="relative min-w-full flex flex-col cursor-pointer bg-black/50 justify-center">
          <div
            onClick={() => setDescrip(!descrip)}
            className="text-center select-none rounded-sm z-40 hover:scale-125 duration-300 py-2"
          >
            <h4 className="text-lg font-bold tracking-widest py-1 ">
              {video.name}
            </h4>
            <span className="text-sm "></span>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className={`${
              descrip ? "block" : "hidden"
            } absolute bottom-0 left-0 w-full bg-blackB py-2`}
          >
            <p className="max-w-[80%] mx-auto font-semibold">
              {video.description}
            </p>
          </motion.div>
          <ReactPlayer
            light={true}
            url={video.url}
            width={"100%"}
            loop
            playsinline
            muted
            controls={true}
          />
        </div>
      )}
    </>
  );
}

export default VideoGrid;
