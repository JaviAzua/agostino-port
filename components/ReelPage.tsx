"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

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
          url={"https://www.youtube.com/watch?v=HtReHGjxXfM"}
          style={{ position: "absolute", inset: 0 }}
        />
      )}
    </>
  );
}

export default ReelPage;
