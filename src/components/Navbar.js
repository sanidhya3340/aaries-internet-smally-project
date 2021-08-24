import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-12 py-4 items-center">
      <Link to="/" className="flex items-center ">
        <div className="mb-2 bg-red-primary md:px-1 md:py-1 rounded-lg flex items-center justify-center">
          <img src="/assets/navbar/smally.png" alt="" className="w-6 h-6" />
        </div>
        <div className="ml-2">
          <img src="/assets/navbar/Smally-name.png" alt="" className="w-28" />
        </div>
      </Link>
      <div className="flex items-center md:mr-16">
        <Link>
          <button className="shadow-md hover:shadow-lg bg-red-text text-white font-bold py-2 px-8 rounded-full">
            Create Account
          </button>
        </Link>
        <Link className="ml-3">
          <button className="shadow-md hover:shadow-lg text-red-text bg-white font-bold py-2 px-16 rounded-full">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
