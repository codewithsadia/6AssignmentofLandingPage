import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"], // Load desired font weights
  subsets: ["latin"],
});

const About = () => {
  return (
    <div id="hero" className={`flex flex-col lg:flex-row items-center lg:items-start p-8 gap-8 ${roboto.className}`}>
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h1 className="text-black text-[56px] lg:text-[65px] font-bold mb-4">
          Learn new skills online with ease
        </h1>
        <h6 className="text-gray-700 text-[18px] lg:text-[20px] mb-6">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </h6>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="bg-black text-white hover:bg-blue-900 border-black font-medium text-center px-6 py-3 rounded">
            <Link href="/courses">Start Learning Now </Link>
          </button>
          <button className="border border-black text-black  hover:bg-blue-400 text-center px-6 py-3 rounded">
           <Link href="/courses"> Explore Courses </Link>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex flex-col items-center">
        {/* Main Image */}
        <Image
          src="/images/lady.png"
          alt="Learning illustration"
          width={500}
          height={400}
          className="rounded-lg mb-6"
        />
      </div>
    </div>
  );
};

export default About;
