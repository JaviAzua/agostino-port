"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

function ReelPage() {
  const [hasWindow, setHasWindow] = useState(false);
  const [ismuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            playsinline
            volume={0.5}
            muted={ismuted}
            playing={true}
            url={"https://vimeo.com/799147188"}
            loop
            style={{ position: "absolute", inset: 0, zIndex: 5 }}
          />
          {ismuted ? (
            <HiSpeakerXMark
              onClick={() => setIsMuted(!ismuted)}
              className="absolute sm:bottom-20 opacity-80 md:bottom-[25%] lg:bottom-[20%] left-[5%] lg:left-14 z-[45] cursor-pointer w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12  "
            />
          ) : (
            <HiSpeakerWave
              onClick={() => setIsMuted(!ismuted)}
              className="absolute sm:bottom-20 opacity-80 md:bottom-[25%] lg:bottom-[20%] left-[5%] lg:left-14 z-[45] cursor-pointer w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12  "
            />
          )}
        </>
      )}
    </>
  );
}

export default ReelPage;
