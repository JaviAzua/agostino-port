"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { HiSpeakerWave } from "react-icons/hi2";

function ReelPage() {
  const [hasWindow, setHasWindow] = useState(false);
  const [ismuted, setIsMuted] = useState(true);

  console.log(ismuted);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <>
          <HiSpeakerWave
            onClick={() => setIsMuted(!ismuted)}
            className="absolute lg:top-32 z-50 cursor-pointer w-12 h-12 "
          />

          <ReactPlayer
            width={"100%"}
            height={"100%"}
            playsinline
            volume={1}
            muted={ismuted}
            playing={true}
            url={"https://vimeo.com/799147188"}
            loop
            style={{ position: "absolute", inset: 0, zIndex: 5 }}
          />
        </>
      )}
    </>
  );
}

export default ReelPage;
