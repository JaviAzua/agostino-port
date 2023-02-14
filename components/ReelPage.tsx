"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

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
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          playsinline
          muted={true}
          playing={true}
          url={"https://vimeo.com/798770150"}
          loop
          style={{ position: "absolute", inset: 0, zIndex: 5 }}
        />
      )}
    </>
  );
}

export default ReelPage;
