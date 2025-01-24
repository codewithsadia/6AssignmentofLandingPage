import React from "react";
import Image from "next/image";
import Link from "next/link";
const Courses = () => {
  return (
    <div id="courses" className="w-full bg-gray-200 p-8">
      {/* Heading Section */}
      <h1 className="text-black text-[56px] text-center font-bold mb-4">Courses</h1>
      <h2 className="text-black text-[18px] text-center font-bold mb-4">
        Your Ultimate Guide to Learning
      </h2>
      <p className="text-black text-[16px] text-center mb-8">
        Popular <br /> <br /> Recommended <br /> <br /> Best Price
      </p>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center">
        <Image src="/images/A6-1.png" alt="Course 1" width={300} height={300} className="rounded-lg" />
        <Image src="/images/A6-2.png" alt="Course 2" width={300} height={300} className="rounded-lg" />
        <Image src="/images/A6-3.png" alt="Course 3" width={300} height={300} className="rounded-lg" />
        <Image src="/images/As6.2.png" alt="Course 4" width={300} height={300} className="rounded-lg" />
        <Image src="/images/A6.png" alt="Course 5" width={300} height={300} className="rounded-lg" />
        <Image src="/images/As6-6..png" alt="Course 6" width={300} height={300} className="rounded-lg" />
      </div>

      {/* Button Section */}
      <div className="text-center mt-8">
        <button className="text-black border border-black rounded-md px-6 py-2  hover:bg-emerald-500">
         <Link href="/achivements"> View All Courses </Link>
        </button>
      </div>
    </div>
  );
};

export default Courses;
