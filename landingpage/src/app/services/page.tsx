
import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div id='services' className="w-full bg-gray-100 py-8 px-4">
      {/* Heading Section */}
      <h1 className="text-black text-[30px] text-center font-bold mb-4">
        Explore Courses By Category
      </h1>
      <h6 className="text-black text-[18px] text-center mb-6">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </h6>

      {/* Course Images in Single Line */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center">
        <Image src="/images/design-5.png" alt="Design 1" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design2.png" alt="Design 2" width={200} height={200} className="rounded-lg" />
        <Image src="/images/desin3.png" alt="Design 3" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design-4.png" alt="Design 4" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design-5.png" alt="Design 5" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design6.png" alt="Design 6" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design7.png" alt="Design 7" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design8.png" alt="Design 8" width={200} height={200} className="rounded-lg" />
        <Image src="/images/design-9.png" alt="Design 9" width={200} height={200} className="rounded-lg" />
      </div>

      {/* View All Courses Button */}
      <div className="text-center mt-6">
        <button className="text-black border border-black rounded-md px-6 py-2 hover:bg-black hover:text-white">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Services;
