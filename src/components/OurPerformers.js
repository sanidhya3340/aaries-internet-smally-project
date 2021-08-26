import React from "react";
import { Link } from "react-router-dom";

export default function OurPerformers() {
  return (
    <div className="md:flex md:justify-between mx-4 lg:mx-28 mt-12">
      <div>
        <p className="text-xl md:ext-4xl lg:text-5xl font-bold text-gray-500">
          Our Performers
        </p>
        <p className="text-gray-500 mt-2 lg:text-2xl md:text-lg text-base">
          See Performers from various fields and different parts of India
        </p>
      </div>
      <div>
        <div className="bg-white shadow-lg hover:shadow-xl rounded-xl px-2 py-3 mt-4 md:mt-0 flex items-center lg:mr-8">
          <img
            src="/assets/card/2.png"
            alt=""
            className="md:w-28 md:h-28 lg:w-36 lg:h-36"
          />
          <div className="ml-3">
            <p className="font-bold text-base md:text-lg lg:text-2xl ">
              Bachospati
            </p>
            <div className="flex items-center">
              <p className="text-red-text text-sm md:text-lg ld:text-xl font-bold">
                Live
              </p>
              <img
                src="/assets/card/cicle.png"
                alt=""
                className="ml-2 mt-1 w-2 h-2 md:w-3 md:h-3"
              />
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
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
                Sun 1 Aug 2021 at 3:30 PM
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
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
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
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
              <p className="text-xs md:text-sm ml-1">Stand-up Comedy</p>
            </div>
          </div>
        </div>
        <Link
          to="/performers"
          className="flex flex-row-reverse items-center mt-2 transition duration-500 ease-in-out transform hover:-translate-x-2 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-text"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-red-text ">View All</p>
        </Link>
      </div>
    </div>
  );
}
