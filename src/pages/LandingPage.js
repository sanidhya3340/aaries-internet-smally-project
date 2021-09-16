import React from 'react'
import Cards from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { useTitle } from '../hooks/title';

export default function Home() {
    useTitle("List of Performers at Smally");
    return (
      <div className="bg-gradient-to-b from-red-primary  to-red-bg">
        <Navbar />
        <div className="mx-16">
          <div className="flex flex-col md:flex-row ">
            <p className=" text-lg sm:text-3xl md:text-4xl text-red-text font-bold">
              Live Mini Events{" "}
            </p>
            <p className="md:ml-1 text-gray-600 text-lg sm:text-3xl md:text-4xl font-bold">
              platform for you at just ₹10
            </p>
          </div>
          <p className="text-gray-400 font-semibold">
            Watch these Artists Performing Live!
          </p>
        </div>
        <div className="flex justify-center">
          <Cards />
        </div>
        <Footer />
      </div>
    );
}
