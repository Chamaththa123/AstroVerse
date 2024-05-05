import React, { useState } from "react";
import { ArrowRight } from "../../utils/icons";
import ApodDetail from "./ApodDetail";

export default function ApodCard({ item, maxChars }) {

  const [imageLoading, setImageLoading] = useState(true);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [selectedAPOD, setSelectedAPOD] = useState(null);

  const handleClick = (view) => {
    setSelectedAPOD(view);
    handleOpen();
  };

  return (
    <>
      <div className="md:flex mt-8 font-inter">
        <div className="md:w-[30%] w-full">
        {imageLoading && (
            <div className="relative dot-spinner mt-[45%] ml-[45%]">
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
          {item.media_type === "image" ? (
            <img
              src={item.hdurl}
              alt={item.title}
              className="items-center justify-center w-full h-[200px] rounded-lg"
              onLoad={() => setImageLoading(false)}
            />
          ) : item.media_type === "video" ? (
            <iframe
              src={item.url}
              title={item.title}
              className="mt-4 items-center justify-center w-full  rounded-lg"
              height="200px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="mt-4">Unsupported media type</p>
          )}
        </div>
        <div className="md:w-[80%] w-full md:pl-8 md:py-1 py-5">
          <div className="text-[20px] font-bold">{item.title}</div>
          <div className="text-[15px] py-3">{item.date}</div>
          <div>{truncateText(item.explanation, maxChars)}</div>
          <div className="flex justify-end">
            <button
              className="read-more text-[#ff1d03] font-semibold"
              onClick={() => handleClick(item)}
            >
              <div className="flex">
                Read More &nbsp;
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
      {selectedAPOD && (
        <ApodDetail apod={selectedAPOD} handleOpen={handleOpen} open={open} />
      )}
    </>
  );
}
