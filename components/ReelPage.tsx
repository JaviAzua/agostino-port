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
    <div className="min-h-[80vh] flex justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2.3,
        }}
      >
        {hasWindow && (
          <div className="relative h-[70vh] md:h-[80vh] w-[90vw]">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              playsinline
              muted={true}
              playing={true}
              url={"https://www.youtube.com/watch?v=HtReHGjxXfM"}
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ReelPage;
