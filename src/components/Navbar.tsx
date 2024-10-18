'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaBars,FaTimes } from "react-icons/fa";

function Navbar() {
  // Home, Current News, Safety Tips, History, Resources, Stories, Contact
    const [menuOpen, setMenuOpen] = useState(false);
  const handleOnClick = () => {
    // Toggle navigation menu on click
    const navMenu = document.querySelector('.nav-menu');
    navMenu?.classList.toggle('hidden');
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-[#1E3A8A] text-white items-center     lg:flex lg:gap-x-2 lg:py-9 lg:h-8 lg:w-auto       md:flex md:gap-x-2 md:py-8 md:h-7 md:w-auto          sm:gap-x-[30rem] sm:flex sm:justify-between sm:py-4 sm:h-[70px] sm:w-auto          flex justify-between py-4 h-[65px] pr-5">
      <div className="cursor-pointer lg:pl-[30px] lg:pr-[0px]     md:pl-[20px] md:pr-[0px]   sm:pl-[40px]  sm:w-auto        pl-[40px]  w-auto">
        <span className="lg:font-semibold lg:text-3xl md:font-semibold md:text-[26px]      sm:font-semibold sm:text-[26px]        font-semibold text-[26px]">StromSafe</span>
      </div>

      <ul className="lg:space-x-6 lg:flex lg:items-center lg:text-[14px]    md:space-x-6 md:flex md:items-center md:text-[11px] sm:hidden hidden ">
        <li className=" hover:text-[#f59e0b]"><Link href="./">HOME</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./currentnews">CURRENT NEWS</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./safetytips">SAFETY TIPS</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./history">HISTORY</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./resources">RESOURCES</Link></li>
      </ul>

      <div className="lg:hidden md:hidden sm:block  sm:pr-8 sm:relative pr-5 relative ">
      {menuOpen ? (
          <FaTimes className="cursor-pointer" onClick={handleOnClick} />
        ) : (
          <FaBars className="cursor-pointer" onClick={handleOnClick} />
        )}
          <ul className="nav-menu hidden  ${menuOpen ? 'block' : 'hidden'} absolute right-0 text-[#1F2937] sm:space-y-2 sm:items-center sm:text-[13px] sm:size-44 sm:py-2 sm:px-6 sm:mt-[28px] sm:bg-[#F3F4F6]              space-y-2 items-center text-[12px] size-44 py-2 px-6 mt-[28px] bg-[#F3F4F6]">
          <li className=" hover:text-[#f59e0b]"><Link href="./">HOME</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./currentnews">CURRENT NEWS</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./safetytips">SAFETY TIPS</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./history">HISTORY</Link></li>
        <li className=" hover:text-[#f59e0b]"><Link href="./resources">RESOURCES</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


