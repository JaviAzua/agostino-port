"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-blackB" : "bg-transparent"
      } sticky top-0 flex items-center justify-around py-6 z-50 transition-all duration-[100] ease-in`}
    >
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
