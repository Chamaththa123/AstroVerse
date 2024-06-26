import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import hero from "./../../assets/images/FloatinginSpace.mp4";
import { Header } from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { HomeVideo1 } from "./HomeVideo1";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const loaderDelay = 200;

    setTimeout(() => {
      if (inView) {
        setIsVisible(false);
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <>
      <Header />
      <section
        ref={ref}
        className="overflow-hidden w-full xl:h-screen md:h-[60vh]  bg-black xl:mt-[-40px] mt-[90px] relative flex items-center justify-center font-inter"
      >
        <div className="absolute top-0 left-0 w-full z-50 bg-[#0c2051]"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full xl:h-screen h-[80vh] object-cover"
        >
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-80"></div>
        <div className="absolute w-full xl:h-screen h-[80vh] flex items-center flex-col justify-center gap-[30px]">
          <div className="text-center text-[#F2F9FF] xl:text-[90px] font-bold xl:leading-[100px] text-[45px] leading-[50px] md:mt-0 mt-4">
            AstroVerse
          </div>
          <div className="text-center text-white xl:text-2xl font-medium  xl:leading-10 text-lg leading-[30px]">
            {" "}
            Discover Worlds Beyond: Journey Through the Planets!{" "}
          </div>
        </div>
      </section>
      <section>
        <HomeVideo1 />
      </section>
      <section className="-mt-10">
        <Footer />
      </section>
    </>
  );
};
