"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-full h-[54px] px-[64px] bg-[#F7F7F7] flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <p className="text-sm text-black">
            Phone Number: 956 742 455 678
          </p>
          <span className="border-l border-gray-200 h-5"></span>
          <p className="text-sm text-black">
            Email: info@ddsgnr.com
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-black">
            <FaFacebookF size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="text-black">
            <IoLogoInstagram size={16} />
          </a>
          <a href="#" aria-label="Twitter" className="text-black">
            <FaTwitter size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-black">
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>

      {/* Second Navbar */}
      <div className="flex items-center bg-gray-100 p-4  gap-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />
        
        <nav className="flex justify-between items-center  space-x-4">
          <Link href="/about" className="text-black bg-gray-50 hover:bg-gray-100 px-3 py-2 ">
          About
          </Link>
          <Link href="/achievements" className="text-balck bg-gray-50 hover:bg-gray-100 px-3 py-2">
          Achievements
          </Link>
          <Link href="/courses" className="text-black bg-gray-50 hover:bg-gray-100 px-3 py-2">
  Courses
          </Link>
          <Link href="/services" className="text-black bg-gray-50 hover:bg-gray-100 px-3 py-2">
  Services
          </Link>
          <Link href="/testimonial" className="text-black bg-gray-50 hover:bg-gray-100 px-3 py-2 ">
              Testimonial
          </Link>
        </nav>
        <div className="ml-auto">
          <button
            className="bg-gray-50 text-black border border-black px-4 py-2 rounded hover:bg-gray-500 ml-4"
          >
            Login
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500 ml-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
