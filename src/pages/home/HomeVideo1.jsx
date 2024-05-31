import React from "react";
import hero from "./../../assets/images/videoplayback.mp4";

export const HomeVideo1 = () => {
  return (
    <section className="overflow-hidden w-full xl:h-screen md:h-[60vh]  bg-black xl:mt-[-40px] mt-[90px] relative flex items-center justify-center font-inter">
      <div className="absolute top-0 left-0 w-full z-50 bg-[#0c2051]"></div>
      <video
        autoPlay
        loop
        muted
        className="w-full xl:h-screen h-[80vh] object-cover"
      >
        <source src={hero} type="video/mp4" />
      </video>
      <div className="absolute w-full top-0 flex items-start md:py-[3%] md:px-[7%] px-[5%] font-inter">
        <div className="text-left text-[#F2F9FF] xl:text-[50px] font-bold text-[35px] md:mt-0 mt-4">
          The Beauty Of Earth
        </div>
      </div>
      <div className="absolute w-full top-20  items-left md:py-[3%] md:px-[7%] px-[5%] font-inter">
        <div className="text-left w-[50%] text-[#F2F9FF] xl:text-[15px] font-medium text-[35px] md:mt-4 mt-4 leading-5">
          From the serene landscapes of lush forests to the awe-inspiring
          grandeur of mountain peaks, our mission is to celebrate and preserve
          the natural wonders that make Earth unique.
        </div>
      </div>
    </section>
  );
};
