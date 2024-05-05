import React, { useEffect, useState } from "react";
import { useSpring, animated, easings, useInView } from "react-spring";
import hero from "./../../assets/images/mrp-hero/mrp-hero-1.jpg";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { apod } from "../../utils/dataArrays";
export default function MrpHero() {
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
      className="overflow-hidden w-full xl:h-[600px] md:h-[60vh] h-[380px]  mt-[-40px] relative flex items-center justify-center font-inter"
    >
      <img
        src={hero}
        className=" w-full xl:h-screen h-[380px] object-cover"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-70"></div>

      <div className="absolute flex  flex-col">
        <div className="w-full md:text-center md:px-0 px-[5%] text-center text-[#F2F9FF] md:text-[55px] text-[23px] text-bold">
          Explore the Mysteries of Mars
          <br /> Through the Lens of NASA's Rovers
        </div>
        <div className="bg-[#DCDCDC03] backdrop-filter backdrop-blur-[10px] transition-all"></div>
      </div>
    </section>
  );
}
