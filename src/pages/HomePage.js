import React from "react";
import Navbar from "../components/Navbar";
import HomeHero2 from "../components/HomeHero2";
import Footer from "../components/Footer";
import OurPerformers from "../components/OurPerformers";
import { useTitle } from "../hooks/title";

export default function HomePage() {
  useTitle("Live Events Platforms");
  return (
    <div className="bg-gradient-to-b from-red-primary  to-red-bg">
      {/* <Header /> */}
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row mt-4 mx-16 justify-between">
        <div className="mt-4 md:mt-0">
          <p className="text-red-text text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Live Mini Events <span className="text-gray-600">platform for you.</span>
          </p>
          <p className="text-sm md:text-base md:w-2/5 lg:text-lg text-gray-500 mt-3">
            A platform which lets you Create Live Events upto 10 minutes and
            Experience Elite Performances at just ₹10{" "}
          </p>
        </div>
        <div className=" md:w-3/5 lg:w-1/4">
          <img src="/assets/homePage/hero.png" alt="" className="" />
        </div>
      </div>
      <HomeHero2 />
      <OurPerformers />
      <Footer />
    </div>
  );
}
