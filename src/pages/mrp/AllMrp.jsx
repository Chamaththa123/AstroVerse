import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Input } from "@material-tailwind/react";
import MrpCard from "./MrpCard";

export default function AllMrp() {
  const [mrpData, setMrpData] = useState([]);
  const [date, setDate] = useState("2017-06-03");
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCameraChange = (selectedOption) => {
    setSelectedCamera(selectedOption);
  };

  useEffect(() => {
    const fetchMrp = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=XsIc7cYfjDxsHguj7E693VDCsxqAbfxnzt1LfAtQ`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch MRP data");
        }
        const data = await response.json();
        setMrpData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMrp();
  }, [date]);

  const filteredPhotos = mrpData.photos
    ? mrpData.photos.filter((photo) => {
        if (!selectedCamera) return true;
        return photo.camera.name === selectedCamera.value;
      })
    : [];

  const cameraOptions = [
    { value: "CHEMCAM", label: "CHEMCAM" },
    { value: "FHAZ", label: "FHAZ" },
    { value: "MARDI", label: "MARDI" },
    { value: "RHAZ", label: "RHAZ" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="md:py-[0%] md:px-[7%] px-[5%] font-inter">
      <div className="md:flex my-10">
        <div className="md:w-[20%] w-full">
          <label htmlFor="start" className="font-inter font-normal">Select Date</label>
          <Input
            id="dateInput"
            type="date"
            className="mt-1 p-2 border border-gray-300 rounded-md"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="md:w-[20%] w-full md:pl-[2%] md:mt-0 mt-5">
          <label htmlFor="end" className="font-inter font-normal">Select Camera</label>
          <Select
            id="cameraSelect"
            options={cameraOptions}
            value={selectedCamera}
            onChange={handleCameraChange}
            isClearable
          />
        </div>
      </div>

      {mrpData.photos && mrpData.photos.length > 0 ? (
        <div className="mt-1 md:flex md:flex-wrap md:justify-between">
          {currentItems.map((photo) => (
            <div key={photo.id} className="md:w-1/4 w-full md:mb-5 p-4">
              <MrpCard data={photo} />
            </div>
          ))}
        </div>
      ) : (
        <p>No photos available for the selected date and camera.</p>
      )}

      <div className="flex justify-center mt-10">
        <ul className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(mrpData.photos?.length / itemsPerPage) },
            (_, i) => (
              <li key={i} className="mx-1">
                <button
                  onClick={() => paginate(i + 1)}
                  className={`py-2 px-4 bg-gray-300 text-black rounded-[50%] ${
                    currentPage === i + 1 ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
