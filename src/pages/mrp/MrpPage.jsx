import React, { useEffect, useState } from "react";
import { Alert, Typography } from "@material-tailwind/react";
import AllMrp from "./AllMrp";
import MrpHero from "./MrpHero";
import Footer from "../../components/layouts/Footer";
import { useStateContext } from "../../contexts/NavigationContext";
import { Loader } from "../../components/layouts/Loader";
import { Header } from "../../components/layouts/Header";

export default function MrpPage() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };

    // Check if the user is logged in
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    fetchData();
  }, []);

  const { user, setUser } = useStateContext();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MrpHero />
          {isLoggedIn ? (
            <AllMrp />
          ) : (
            <div class="flex justify-center items-center h-[300px]">
              <div class="md:w-[60%] w-[82%] flex flex-col gap-2">
                <Alert variant="outlined" icon={<IconSolid />}>
                  <Typography class="font-medium">
                    Please log in to view Mars Rover Photos
                  </Typography>
                </Alert>
              </div>
            </div>
          )}
          <Footer />
        </>
      )}
    </>
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
