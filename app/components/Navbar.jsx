"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Header Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-surface bg-opacity-90 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "bg-surface bg-opacity-80 shadow-sm" : ""
          }`}
        >
          <li>
            <a className="font-Ovo text-textPrimary hover:text-accentGreen transition-colors" href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo text-textPrimary hover:text-accentGreen transition-colors" href="#about">About Me</a>
          </li>
          <li>
            <a className="font-Ovo text-textPrimary hover:text-accentGreen transition-colors" href="#education">Education</a>
          </li>
          <li>
            <a className="font-Ovo text-textPrimary hover:text-accentGreen transition-colors" href="#skills">Skills</a>
          </li>
          <li>
            <a className="font-Ovo text-textPrimary hover:text-accentGreen transition-colors" href="#experience">Experience</a>
          </li>
          <li>
            <a className="font-Ovo text-textPrimary hover:text-accentGreen transition-colors" href="#projects">Projects</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-border rounded-full font-Ovo text-textPrimary hover:border-accentGreen hover:text-accentGreen transition-colors"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-surface text-textPrimary transition-transform duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#education">Education</a></li>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className="font-Ovo hover:text-accentGreen transition-colors" onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
