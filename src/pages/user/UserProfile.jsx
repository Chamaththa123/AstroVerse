import React, { useState } from "react";
import { Dialog, Card } from "@material-tailwind/react";
import { CloseIcon } from "../../utils/icons";
import { useStateContext } from "../../contexts/NavigationContext";
import background from "../../assets/images/apod-hero/planet.jpg";
import profile from "../../assets/images/userprofile.png";

export default function UserProfile({ handleOpen, open }) {
  const { user, setUser } = useStateContext();

  const handleClose = () => {
    handleOpen();
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Dialog
        size="sm"
        open={open}
        className="bg-transparent shadow-none rounded-sm font-inter"
      >
        <>
          <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg relative h-32 overflow-hidden">
              <div
                className="absolute top-0 right-0 p-2 cursor-pointer"
                onClick={handleClose}
              >
                <CloseIcon />
              </div>
              <img
                className="object-cover object-top w-full"
                src={background}
                alt="background"
              />
            </div>

            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src={profile}
                alt="profile"
              />
            </div>
            <div className="text-center my-10 mb-10 gap-4">
              <h2 className="text-gray-800 font-semibold font-inter pb-2 text-lg">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-gray-800 font-inter text-lg ">{user?.email}</p>
              <br />
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
              <br />
              <br />
              <br />
            </div>
          </div>
        </>
      </Dialog>
    </>
  );
}
