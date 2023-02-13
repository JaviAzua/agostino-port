"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";
import { motion } from "framer-motion";

type Props = {};

function ReelPage({}: Props) {
  const url = "https://www.youtube.com/watch?v=HtReHGjxXfM";
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
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
        className="relative h-[80vh] w-[90vw]"
      >
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          playing={true}
          url={url}
          style={{ position: "absolute", inset: 0 }}
        />
      </motion.div>
    </div>
  );
}

export default ReelPage;
