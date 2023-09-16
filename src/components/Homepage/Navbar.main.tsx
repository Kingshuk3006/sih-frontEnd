'use client';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`sticky top-0 z-50 px-4 py-4 w-screen justify-between items-center flex flex-row  ${
        open ? 'flex-col' : 'flex-row'
      }  text-white font-semibold bg-[#221389] shadow-lg`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center gap-4">
          <Link href="/">
            <img src="/Frame.svg" className="w-12" />
          </Link>
          <a href="/" className=" font-bold text-lg holtwood">
            DERMACURE.AI
          </a>
        </div>

        <div className=" hidden md:flex md:items-center md:gap-3">
          <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
            <a href="/#home">Home</a>
          </ul>
          <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
            <a href="/#benefits">Benefits</a>
          </ul>
          <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
            <a href="/#testimonial">Testimonial</a>
          </ul>
          <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
            <a href="/#contact">Contact Us</a>
          </ul>
          <ul>
            <Link href="/auth/login">
              <button className="h-[52px] w-[148px] rounded-3xl bg-white text-[#221389]">
                Register/Login
              </button>
            </Link>
          </ul>
        </div>

        <div className="md:hidden ">
          <button onClick={toggleMenu} className="block text-white">
            {open ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } w-full py-4 md:hidden flex flex-col items-center gap-2`}
      >
        <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
          <a href="/#home">Home</a>
        </ul>
        <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
          <a href="/#benefits">Benefits</a>
        </ul>
        <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
          <a href="/#testimonial">Testimonial</a>
        </ul>
        <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
          <a href="/#contact">Contact Us</a>
        </ul>
        {/* You can add more menu items here */}
        <Link href="/auth/login">
          <button className="h-[52px] w-[148px] rounded-3xl bg-white text-[#221389]">
            Register/Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
