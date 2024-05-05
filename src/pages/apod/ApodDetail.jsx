import React, { useState, useEffect } from "react";
import { Dialog, Card } from "@material-tailwind/react";
import { CloseIcon, ProcessingIcon } from "../../utils/icons";

export default function ApodDetail({ apod, handleOpen, open }) {
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
              {apod.title}
            </div>
            <div
              className="font-bold text-[20px] cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="my-3">
            {apod.media_type === "image" ? (
              <img
                src={apod.url}
                alt={apod.title}
                className="items-center justify-center w-full md:h-[400px] h-auto rounded-lg"
              />
            ) : apod.media_type === "video" ? (
              <iframe
                src={apod.url}
                title={apod.title}
                className="mt-4 items-center justify-center w-full  rounded-lg"
                height="200px"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="mt-4">Unsupported media type</p>
            )}
          </div>
          <div className="my-4 font-inter font-semibold">
          Date : {apod.date}
          </div>

          <div className="font-inter font-normal">
          {apod.explanation}
          </div>
        </Card>
      </Dialog>
    </>
  );
}
