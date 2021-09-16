import React from "react";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndividualCard from "../components/IndividualCard";
import IndividualCard2 from "../components/IndividualCard2";
import { useTitle } from "../hooks/title";

export default function IndividualPage() {
  useTitle("Pay to Watch Live Performance");
  return (
    <div className="bg-gradient-to-b from-red-primary  to-red-bg">
      <Navbar />
      <div className="px-8 md:px-16 font-semibold text-lg md:text-xl lg:text-4xl w-auto md:w-4/5">
        Watch <span className="text-red-text">Gagan Devi</span> Performing
        ‘Afro-Cuban’ Jazz .
      </div>
      <div className="flex mx-12 md:mx-20 lg:mx-28 justify-between">
        <IndividualCard />
        <IndividualCard2 />
      </div>
      <Footer />
    </div>
  );
}
