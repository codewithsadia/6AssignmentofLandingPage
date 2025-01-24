import React from "react";
import Image from "next/image";

const Achievements = () => {
  return (
    <div id="achievements" className="w-full bg-gray-100 py-8 px-4">
      {/* Heading Section */}
      <h1 className="text-black text-[58px] text-center font-bold mb-4">
        Our Achievements
      </h1>
      <h6 className="text-black text-[18px] text-center mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        <br/>
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </h6>

      {/* Images Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        <Image
          src="/images/s1.png"
          alt="Design 1"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <Image
          src="/images/s2.png"
          alt="Design 2"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <Image
          src="/images/s3.png"
          alt="Design 3"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <Image
          src="/images/s4.png"
          alt="Design 4"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Achievements;
