import React, { useState } from "react";
import "../../assets/css/ImageLoader.css";
import { ArrowRight } from "../../utils/icons";
import MrpDetails from "./MrpDetails";

export default function MrpCard({ data }) {
  const [imageLoading, setImageLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [selectedMRP, setSelectedMRP] = useState(null);

  const handleClick = (view) => {
    setSelectedMRP(view);
    handleOpen();
  };
  return (
    <>
      <div>
        <div className="w-full font-inter">
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
            src={data.img_src}
            alt={data.img_src}
            className="items-center justify-center w-full h-[250px] rounded-md"
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="md:w-[100%] w-full md:py-1 py-5">
          <div className="flex justify-between">
            <div className="text-[15px]">Rover: {data.rover.name}</div>
            <div className="text-[15px]">Sol: {data.sol}</div>
          </div>
          <button
            onClick={() => handleClick(data)}
            className="read-more text-[#ff1d03] font-semibold"
          >
            <div className="flex">
              Read More &nbsp;
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
      {selectedMRP && (
        <MrpDetails mrp={selectedMRP} handleOpen={handleOpen} open={open} />
      )}
    </>
  );
}
