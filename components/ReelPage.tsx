"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { HiSpeakerWave } from "react-icons/hi2";

function ReelPage() {
  const [hasWindow, setHasWindow] = useState(false);
  const [muted, setMuted] = useState(false);

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
            onClick={() => setMuted(!muted)}
            className="absolute z-[99] top-32 cursor-pointer w-12 h-12 "
          />
          <div>
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              playsinline
              muted={muted}
              playing={true}
              url={"https://vimeo.com/799147188"}
              loop
              style={{ position: "absolute", inset: 0, zIndex: 5 }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ReelPage;
