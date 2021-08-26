import React from 'react'
import { Link } from 'react-router-dom';


//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IndividualCard from "../components/IndividualCard";

export default function IndividualPage() {
    return (
      <div className="bg-gradient-to-b from-red-primary  to-red-bg">
        <Navbar />
        <div className="mx-8 lg:mx-36 md:flex md:justify-between md:items-center mt-16">
          <div className="font-semibold text-base md:text-lg lg:text-xl mr-8 w-auto md:w-3/5">
            I will be Performing “Afro-Cuban” Jazz Music honouring people who
            have made it popular among us.
          </div>
          <div className="hidden md:visible mt-4 md:mt-0 bg-red-light md:flex md:flex-col md:justify-between  pt-6 rounded-2xl shadow-lg hover:shadow-xl">
            <div className="px-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs md:text-sm ml-1">
                Thu 4 Aug 2021 at 3:00 PM
              </p>
            </div>
            <div className="px-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm ml-1">Duration : 10 min</p>
            </div>
            <div className="px-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <p className="text-xs md:text-sm ml-1">Jazz Music</p>
            </div>
            <div className="bg-white flex items-center justify-between px-6 py-2 mt-3 rounded-b-xl">
              <p className="text-gray-500 font-bold text-sm md:text-base">₹10</p>
              <Link>
                <button className="bg-red-text text-white font-bold text-sm rounded-full px-5 py-1">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <IndividualCard />
        <Footer />
      </div>
    );
}
