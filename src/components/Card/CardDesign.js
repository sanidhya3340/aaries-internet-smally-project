import React from 'react';
import { Link } from 'react-router-dom';

export default function CardDesign({ name, date, duration, desig, description, imgUrl }) {
    return (
      <div className="bg-red-primary rounded-xl shadow-xl flex flex-col justify-between mt-4 w-72 md:mt-0 md:w-60 lg:w-80">
        <div className="bg-white flex mx-4 my-4 rounded-lg px-4 py-2 items-center">
          <img src={imgUrl} alt="" className="w-24 h-24 md:w-20 md:h-20" />
          <div className="md:ml-4">
            <p className="font-bold text-base md:text-lg lg:text-2xl ">
              {name}
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
              <p className="text-xs md:text-sm ml-1">{date}</p>
            </div>
            <div className="flex items-center">
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
              <p className="text-xs md:text-sm ml-1">{duration}</p>
            </div>
            <div className="flex items-center">
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
              <p className="text-xs md:text-sm ml-1">{desig}</p>
            </div>
          </div>
        </div>
        <div className="mx-4 text-sm mb-4">
          <p className="font-bold">Description</p>
          <p>{description}</p>
        </div>
        <div className="flex justify-between bg-white rounded-b-xl px-4 py-2 items-center">
          <p className="font-bold ">₹10</p>
          <Link
            to="/individual"
            className="bg-red-text px-4 py-2 rounded-full font-bold text-white shadow-lg hover:shadow-2xl"
          >
            I’m interested
          </Link>
        </div>
      </div>
    );
}
