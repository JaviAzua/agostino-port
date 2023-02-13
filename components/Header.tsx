"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-around py-6">
      <motion.div
        initial={{
          scale: 3,
          translateX: 200,
          translateY: 400,
        }}
        animate={{
          scale: 1,
          translateX: 0,
          translateY: 0,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          src={"/logo.svg"}
          alt=""
          width={160}
          height={200}
          className="cursor-pointer"
        />
      </motion.div>
      <div>
        <motion.ul
          initial={{
            opacity: 0,
            translateX: 300,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.9 }}
          className="flex gap-20"
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="listItem"
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="listItem"
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="listItem"
          >
            Contact
          </motion.li>
        </motion.ul>
      </div>
    </header>
  );
}

export default Header;
