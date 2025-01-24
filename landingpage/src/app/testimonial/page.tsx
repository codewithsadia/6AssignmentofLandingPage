import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-full bg-white">
      {/* Team Section */}
      <div className="w-full text-center py-6">
        <h1 className="text-black text-[48px] font-bold mb-4">Our Team</h1>
        <p className="text-gray-600 text-[18px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Team Images */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 justify-items-center">
          <Image src="/images/As6-4.png" alt="Design 1" width={200} height={200} className="rounded-lg" />
          <Image src="/images/As6-1.png" alt="Design 2" width={200} height={200} className="rounded-lg" />
          <Image src="/images/As6-2.png" alt="Design 3" width={200} height={200} className="rounded-lg" />
          <Image src="/images/as6-5.png" alt="Design 4" width={200} height={200} className="rounded-lg" />
          <Image src="/images/as6-6.png" alt="Design 5" width={200} height={200} className="rounded-lg" />
          <Image src="/images/as6-7.png" alt="Design 6" width={200} height={200} className="rounded-lg" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full text-center py-6">
        <h1 className="text-black text-[48px] font-bold mb-4">Customer Testimonials</h1>
        <p className="text-gray-600 text-[18px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Testimonial Images */}
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/images/one.png" alt="Design 1" width={400} height={400} className="rounded-lg" />
          <Image src="/images/three.png" alt="Design 2" width={400} height={400} className="rounded-lg" />
          <Image src="/images/one.png" alt="Design 3" width={400} height={400} className="rounded-lg" />
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full text-center py-6">
        <h1 className="text-black text-[24px] font-bold mb-4">
          Subscribe to our newsletter
        </h1>
        <p className="text-gray-600 text-[16px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Subscribe Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="border border-gray-400 px-6 py-3 rounded-md text-black hover:bg-emerald-400">
            Enter Your Name
          </button>
          <button className="bg-black text-white hover:bg-blue-700 px-6 py-3 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

 {/* image Section */}
      <Image
                  src="/images/logo.png"
                  alt="Sample Image"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
      {/* Table Section */}
      <div className="w-full bg-white">
      {/* Table Section */}
      <div className="overflow-x-auto py-6">
        <table className="table-auto border-collapse border border-gray-300 w-full text-center">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Courses</th>
              <th className="border border-gray-300 px-4 py-2">Resources</th>
              <th className="border border-gray-300 px-4 py-2">About Us</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {/* Content Rows */}
            <tr>
              <td className="border border-gray-300 px-4 py-2">Business</td>
              <td className="border border-gray-300 px-4 py-2">Career</td>
              <td className="border border-gray-300 px-4 py-2">Contact</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Technology</td>
              <td className="border border-gray-300 px-4 py-2">Learning</td>
              <td className="border border-gray-300 px-4 py-2">FAQ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Design</td>
              <td className="border border-gray-300 px-4 py-2">Interview Preparation</td>
              <td className="border border-gray-300 px-4 py-2">Terms & Conditions</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Programming</td>
              <td className="border border-gray-300 px-4 py-2">Jobs</td>
              <td className="border border-gray-300 px-4 py-2">Partners</td>
            </tr>
          </tbody>
        </table>
      </div>
</div>
    </div>
  );
};

export default Testimonial;
