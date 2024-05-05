import React, { useEffect, useState } from "react";
import TodayApod from './TodayApod';
import AllApod from './AllApod';
import ApodHero from './ApodHero';
import Planets from './Planets';
import Footer from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';
import { Loader } from "../../components/layouts/Loader";

export default function ApodPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header/>
    <ApodHero/>
    <TodayApod/>
    <Planets/>
    <AllApod/>
    <Footer/>
        </>
      )}
    </>
  );
}
