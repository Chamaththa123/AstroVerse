import React, { useState, useEffect } from "react";
import { Alert, Typography } from "@material-tailwind/react";
export default function TodayApod() {
  const [apodData, setApodData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=XsIc7cYfjDxsHguj7E693VDCsxqAbfxnzt1LfAtQ&date=${formattedDate}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }

        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };

    fetchApod();
  }, [formattedDate]);

  useEffect(() => {
    if (apodData && apodData.media_type === "image") {
      const image = new Image();
      image.onload = () => {
        setImageLoading(false);
      };
      image.src = apodData.hdurl;
    }
  }, [apodData]);

  if (!apodData || Object.keys(apodData).length === 0) {
    return (
      <div className="px-[5%] font-inter">
        <Alert variant="ghost" icon={<IconSolid />}>
          <Typography className="font-medium">
            No photos available for the today.
          </Typography>
        </Alert>
      </div>
    );
  }

  return (
    <section className="md:py-[1%] md:px-[7%] px-[5%] font-inter mb-6">
      <div>
        {apodData && (
          <div>
            <div className="xl:flex">
              <div className="xl:w-[50%] w-full">
                <h2 className="text-[25px] font-semibold mt-4 md:w-[85%]">
                  {apodData.title}
                </h2>
                <div className="text-gray-500 font-medium">{formattedDate}</div>
                <div className="border-2 my-[1%]"></div>
                <p className="mt-6 leading-8 font-normal font-inter xl:block hidden">
                  {apodData.explanation}
                </p>
                <div className="mt-3 font-inter xl:block hidden">
                  &copy;<i>{apodData?.copyright}</i>
                </div>
              </div>
              <div className="xl:w-[50%] w-full">
                {apodData.media_type === "image" ? (
                  <div className="float-right md:w-[85%] w-full mt-4 ">
                    {imageLoading ? (
                      <div>
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
                      </div>
                    ) : (
                      <img
                        src={apodData.hdurl}
                        alt={apodData.title}
                        className="w-full md:h-[540px] h-[350px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                ) : apodData.media_type === "video" ? (
                  <iframe
                    src={apodData.url}
                    title={apodData.title}
                    className="mt-10 items-center xl:mb-0 mb-5 justify-center xl:w-full w-full h-[415px] rounded-md xl:ml-8"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="mt-4">Unsupported media type</p>
                )}
              </div>
            </div>
            <p className="leading-8 font-medium font-inter block xl:hidden">
              {apodData.explanation}
            </p>
            <div className="mt-3 font-inter block md:hidden">
              &copy;<i>{apodData?.copyright}</i>
            </div>
          </div>
        )}
      </div>
      <div></div>
      <div></div>
    </section>
  );
}

function IconSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
