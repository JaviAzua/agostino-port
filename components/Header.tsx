"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-around py-6 z-50">
      <div>
        <Image
          src={"/logoW.svg"}
          alt=""
          width={160}
          height={200}
          className="cursor-pointer"
        />
      </div>
      <div>
        <motion.ul
          initial={{
            opacity: 0,
            translateX: 300,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.9 }}
          className="flex gap-5 md:gap-20"
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
