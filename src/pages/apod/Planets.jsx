import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { planet } from "../../utils/dataArrays";
import hero from "./../../assets/images/apod-hero/planet.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Planets() {

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 200;
  const fadeUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      duration: 800,
      delay: prevDelay + 100,
      easing: easings.easeInSine,
    },
  });

  useEffect(() => {
    const loaderDelay = 100;
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section
      ref={ref}
      className="relative w-full font-inter px-[5%] md:px-[7%] md:h-[300px] h-[200px] pt-[40px] overflow-hidden"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-60"></div>
      <animated.div
        style={fadeScreen}
        className="flex flex-col w-full item center justify-center slider-container absolute inset-0"
      >
        <Slider {...settings} className="md:block hidden">
          {planet.slice(0, 9).map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex items-center justify-evenly">
                <img src={item.img} className="w-[80px] md:w-[120px]" />
              </div>
            );
          })}
        </Slider>
        <Slider {...settingsMobile} className="md:hidden block">
          {planet.slice(0, 9).map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex items-center justify-evenly">
                <img src={item.img} className="w-[80px] md:w-[120px]" />
              </div>
            );
          })}
        </Slider>
      </animated.div>
    </section>
  );
}
