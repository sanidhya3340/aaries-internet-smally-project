import React from 'react'

export default function IndividualCard() {
    return (
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl mx-12 md:mx-20 lg:mx-28 my-12 bg-red-primary rounded-3xl shadow-lg cursor-pointer flex flex-col justify-between">
        <div className="border-8 border-white shadow-lg px-4 py-2 flex justify-between items-center bg-red-light rounded-3xl">
          <img src="/assets/card/6.png" alt="shadow-md" />
          <div>
            <div className="text-red-text font-bold text-lg md:text-xl lg:text-3xl md:mr-12">
              Watch <span className="text-gray-800">‘Gagan Devi’</span>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-2xl md:text-4xl font-bold text-gray-800">
                Live
              </p>
              <img
                src="/assets/card/cicle.png"
                alt="smally"
                className="w-3 h-3 mt-1 md:mt-3 ml-2"
              />
            </div>
          </div>
        </div>
        <div className="my-6 pb-6 mx-4">
          <p className="text-gray-600 text-sm">
            Hey guys, Come and watch my show and enjoy every minute while
            listening to your favourite music.
          </p>
          <p className="mt-2 text-gray-600">
            Date & Time : Thu 4th 2021 at 3:00 PM
          </p>
          <p className="mt-2 text-gray-600">Duration : 10 min</p>
          <p className="mt-2 text-gray-600">Performance : Jazz Music</p>
        </div>
        <div className="bg-white rounded-b-3xl flex justify-between px-8 py-4 items-center">
          <p className="font-bold ">₹10</p>
          <button
            to="/individual"
            className="bg-red-text px-4 py-2 rounded-full font-bold text-white shadow-lg hover:shadow-2xl"
          >
            Buy now
          </button>
        </div>
      </div>
    );
}
