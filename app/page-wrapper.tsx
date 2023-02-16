"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function PageWrapper({ children }: Props) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default PageWrapper;
