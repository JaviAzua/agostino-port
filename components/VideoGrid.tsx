"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  video: {
    title: string;
    description: string;
    url: string;
  };
};

function VideoGrid({ video }: Props) {
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <div
          onMouseOver={() => setPlaying(true)}
          onMouseLeave={() => setPlaying(false)}
          className="relative min-w-full flex justify-center group"
        >
          <div className="absolute bottom-0 left-0 opacity-0 bg-orangeL/50  rounded-sm z-40 group-hover:opacity-100  flex  flex-col max-w-[80%]  transition-all duration-1000">
            <h4 className="text-lg font-bold tracking-widest">{video.title}</h4>
            <p className="">{video.description}</p>
          </div>
          <ReactPlayer url={video.url} width={"100%"} muted playing={playing} />
        </div>
      )}
    </>
  );
}

export default VideoGrid;
