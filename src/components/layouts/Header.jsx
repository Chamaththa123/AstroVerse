import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import logo from "./../../assets/images/logo.png";
import menu from "./../../assets/images/menu.png";
import { HeaderLink } from "./HeaderLink";
import { headerItems } from "../../utils/dataArrays";
import { IoMdClose } from "react-icons/io";
import { useStateContext } from "../../contexts/NavigationContext";
import { UserMobileIcon ,UserIcon } from "../../utils/icons";
import { UserLogin } from "../../pages/user/UserLogin";
import UserProfile from "../../pages/user/UserProfile";

export const Header = () => {
  const { user } = useStateContext();

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeNavigation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    config: {
      duration: 800,
      delay: 100,
    },
  });

  useEffect(() => {
    const loaderDelay = 50;

    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  const [visibleMObile, setVisibleMObile] = useState(false);

  const handleFadeIn = () => {
    setVisibleMObile((pre) => !pre);
    document.body.style.overflow = visibleMObile ? "visible" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  const headerColor = currentPath === "/" ? "xl:bg-transparent fixed bg-black" : "bg-black";

  const [newOpen, setNewOpen] = useState(false);
  const newHandleOpen = () => setNewOpen((cur) => !cur);

  const [newProfileOpen, setNewProfileOpen] = useState(false);
  const newProfileHandleOpen = () => setNewProfileOpen((cur) => !cur);

  const handleSignInClick = (e) => {
    // Prevent default navigation behavior
    e.preventDefault();
    // Open the sign-in modal
    newHandleOpen();
  };

  const handleProfileClick = (e) => {
    // Prevent default navigation behavior
    e.preventDefault();
    // Open the sign-in modal
    newProfileHandleOpen();
  };

  return (
    <>
    <animated.section
      ref={ref}
      style={fadeNavigation}
      className={` w-full ${headerColor} inset-0 top-0 left-0 bottom-0 z-50  h-[92px]  font-inter flex items-center justify-between p-[15px] xl:py-[10px] xl:px-[40px]`}
    >
      <Link to="/">
        <img src={logo} className="w-[120px] md:w-[100px]" alt="" />
      </Link>
      <div className="hidden xl:flex w-[70%]  justify-around font-inter">
        {headerItems.map((item, itemindex) => {
          return (
            <HeaderLink url={item.url} title={item.title} key={itemindex} />
          );
        })}

        <div className="flex justify-between mt-[-10px]">
          <div className="text-white mr-4 mt-[3px]">
            <UserIcon />
          </div>
          <div >
            {user ? (
              <Link onClick={handleProfileClick} to="#">
              <div className="text-white text-[13px]">Welcome</div>
              <div className="text-white text-[13px]">{user.firstName}</div>
            </Link>
            ) : (
              <>
                 <Link onClick={handleSignInClick} to="#">
                    <div className="text-white text-[13px]">Welcome</div>
                    <div className="text-white text-[13px]">SignIn / Sign up</div>
                  </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <span className="xl:hidden" onClick={handleFadeIn}>
        <img
          src={menu}
          className=" w-[37px] border-4 border-[#F5F5F5] bg-[#F5F5F5] rounded-md bg-[F5F5F5]"
          alt=""
        />
      </span>
      <div
        className={`fixed w-full inset-0 top-0 left-0 bottom-0 bg-white h-[100vh] p-[20px] transition transform duration-500 ease-in-out fade-up-enter-active ${
          visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `}
      >
        <div className="flex items-center justify-between w-full">
          <Link className="">
            <img src={logo} className=" w-[150px]" alt="" />
          </Link>

          <span onClick={handleFadeIn}>
            <IoMdClose className="text-[20px]" />
          </span>
        </div>
        <div className="flex  mt-[30px]">
          <div className=" mr-4 mt-[10px]">
            <UserMobileIcon />
          </div>
          <div >
            {user ? (
              <Link onClick={handleProfileClick} to="#">
              <div className=" text-[20px]">Welcome</div>
              <div className="text-[20px]">{user?.firstName}</div>
            </Link>
              // <p className="text-white">Welcome, {user.firstName}</p>
            ) : (
              <>
                 <Link onClick={handleSignInClick} to="#">
                    <div className=" text-[20px]">Welcome</div>
                    <div className="text-[20px]">SignIn / Sign up</div>
                  </Link>
              </>
            )}
          </div>
        </div>
        {/* mobile header  */}
        <div className="w-full flex mt-[80px] flex-col gap-3">
          {headerItems.map((item, itemindex) => {
            return (
              <div className="p-[16px] pb-[15px] font-press-start font-bold  text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]">
                <Link to={item.url}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </animated.section>
    <UserLogin
    handleOpen={newHandleOpen}
    open={newOpen}/>
        <UserProfile
        handleOpen={newProfileHandleOpen}
        open={newProfileOpen}/>
    </>
  );
};
