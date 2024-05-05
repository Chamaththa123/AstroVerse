import React, { useEffect, useState } from "react";
import { useSpring, animated, easings, useInView } from "react-spring";
import hero from "./../../assets/images/apod-hero/apod-hero-3.jpg";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { apod } from "../../utils/dataArrays";
export default function ApodHero() {
  const [isVisible, setIsVisible] = useState(true); // Set initial state to true
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeOver = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    config: {
      duration: 1000,
      delay: 500,
    },
  });

  const fadeScreen = useSpring({
    opacity: isVisible ? 0 : 1,

    config: {
      duration: 800,
      delay: 500,
    },
  });

  useEffect(() => {
    const loaderDelay = 200;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(false); // Set isVisible to false after the loading delay
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="overflow-hidden w-full xl:h-screen md:h-[60vh] h-[400px] md:mt-[-50px] mt-[-40px] relative flex items-center justify-center font-inter"
    >
      <div className="absolute top-0 left-0 w-full z-50 bg-[#0c2051]"></div>
      <img
        src={hero}
        className=" w-full xl:h-screen h-[80vh] object-cover"
        alt=""
      />
      <div className="absolute  top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-70"></div>

      <div className="absolute w-full xl:h-screen flex  flex-col">
        <div className="md:text-left text-center text-[#F2F9FF] xl:text-[55px] md:px-[5%] px-[5%] font-bold xl:leading-[5px] text-[30px] leading-[50px] md:mt-[15%] mt-0">
          Astronomy Picture of the Day
        </div>
        <div className="bg-[#DCDCDC03] backdrop-filter backdrop-blur-[10px] transition-all"></div>
        <div className="md:w-[40%] text-left text-white xl:text-[18px] font-medium md:px-[5%] px-[5%] xl:leading-[25px] text-lg leading-[30px] bottom-0">
          <div className="bg-[#DCDCDC03] font-inter text-base backdrop-filter backdrop-blur-[10px] transition-all p-3 rounded-lg mt-[56%] md:block hidden">
            Dive into the cosmos with our Astronomy Picture of the Day (APOD)
            hero section! Explore the breathtaking wonders of the universe
            through stunning imagery captured by NASA's powerful telescopes and
            spacecraft.
          </div>
        </div>
      </div>
    </section>
  );
}
