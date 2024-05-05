import React, { useState, useEffect } from "react";
import "../../assets/css/ImageLoader.css";
import { Dialog, Card } from "@material-tailwind/react";
import { CloseIcon, ProcessingIcon } from "../../utils/icons";

export default function MrpDetails({ mrp, handleOpen, open }) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleClose = () => {
    handleOpen();
  };
  return (
    <>
      <Dialog
        size="md:sm xl"
        open={open}
        className="bg-transparent shadow-none rounded-sm overflow-y-hidden scrollbar-y-style overflow-x-hidden font-inter"
      >
        <Card className="mx-auto w-full p-5 rounded-sm h-[90vh] overflow-y-auto scrollbar-y-style">
          <div className="flex justify-between align-center border-b-2">
            <div className="font-inter text-lg font-bold  pb-5">
              {mrp.rover.name} - {mrp.sol}
            </div>
            <div
              className="font-bold text-[20px] cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="my-3">
            {imageLoading && (
              <div className="dot-spinner mt-[45%] ml-[45%]">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
              </div>
            )}
            <img
              src={mrp.img_src}
              alt={mrp.img_src}
              className="items-center justify-center w-full h-auto rounded-md"
              onLoad={() => setImageLoading(false)}
            />
          </div>
          <div className="my-4 font-inter font-semibold">
            Date : {mrp.earth_date}
          </div>
          <div className=" font-inter font-semibold">
            Rover Camera : {mrp.camera.full_name}
          </div>
          <div className=" font-inter font-semibold mt-5 border-b-2 border-gray-500">
            {mrp.rover.name} Rover Details
          </div>
          <div className="md:flex md:justify-between text-left mt-3">
            <div className="md:w-[50%]">
              <span className="font-inter font-semibold">
                Rover Landing Date :{" "}
              </span>
              <span className="font-inter font-medium">
                {" "}
                {mrp.rover.landing_date}
              </span>
            </div>
            <div className="md:w-[50%]">
              <span className="font-inter font-semibold">
                Rover Launch Date :{" "}
              </span>
              <span className="font-inter font-medium">
                {" "}
                {mrp.rover.launch_date}
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-between text-left md:mt-3">
            <div className="md:w-[50%]">
              <span className="font-inter font-semibold">Rover Status : </span>
              <span className="font-inter font-medium">
                {" "}
                {mrp.rover.status}
              </span>
            </div>
            <div className="md:w-[50%]">
              <span className="font-inter font-semibold">Rover Max Sol : </span>
              <span className="font-inter font-medium">
                {" "}
                {mrp.rover.max_sol}
              </span>
            </div>
          </div>

          <div className="md:flex md:justify-between text-left md:mt-3">
            <div className="md:w-[50%]">
              <span className="font-inter font-semibold">
                Rover Max Date :{" "}
              </span>
              <span className="font-inter font-medium">
                {" "}
                {mrp.rover.max_date}
              </span>
            </div>
            <div className="md:w-[50%]">
              <span className="font-inter font-semibold">
                Rover Total Photos :{" "}
              </span>
              <span className="font-inter font-medium">
                {" "}
                {mrp.rover.total_photos}
              </span>
            </div>
          </div>
        </Card>
      </Dialog>
    </>
  );
}
