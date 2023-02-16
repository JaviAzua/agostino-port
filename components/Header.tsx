"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

function Header({}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      } sticky top-0 flex items-center justify-around py-8 z-50 select-none`}
    >
      <div>
        <Link to="/" spy={true} smooth={true} duration={500}>
          <Image
            src={"/logoW.svg"}
            alt=""
            width={160}
            height={200}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* hamburguesa */}

      {/* navbar */}
      <div>
        <div className="md:hidden ">
          <GiHamburgerMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer w-10 h-10"
          />
          {menuOpen && (
            <motion.div
              initial={{
                x: 10,
                opacity: 0,
                y: 20,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              className="bg-black absolute z-20 left-32 right-0 shadow-md"
            >
              <ul className="py-10 text-2xl font-semibold flex flex-col gap-20">
                <Link
                  onClick={() => setMenuOpen(!menuOpen)}
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <li className="burguerMenu">About</li>
                </Link>
                <Link
                  onClick={() => setMenuOpen(!menuOpen)}
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <li className="burguerMenu">Projects</li>
                </Link>
                <Link
                  onClick={() => setMenuOpen(!menuOpen)}
                  to={"contactB"}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <li className="burguerMenu">Contact</li>
                </Link>
              </ul>
            </motion.div>
          )}
        </div>
        <motion.ul
          initial={{
            opacity: 0,
            translateX: 300,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.9, delay: 2 }}
          className="hidden md:flex gap-5 md:gap-20"
        >
          <Link to="about" spy={true} smooth={true} duration={500}>
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
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
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
          </Link>
          <Link to={"contactB"} spy={true} smooth={true} duration={500}>
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
          </Link>
        </motion.ul>
      </div>
    </header>
  );
}

export default Header;
