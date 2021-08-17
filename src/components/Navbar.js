import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="flex flex-col md:flex-row justify-between md:px-12 py-4 items-center">
            <div className="flex items-center ">
                <div className="mb-2 bg-red-primary md:px-1 md:py-1 rounded-lg flex items-center justify-center">
                    <img
                        src="/assets/navbar/smally.png"
                        alt=""
                        className="w-6 h-6"
                    />
                </div>
                <div className="ml-2">
                    <img
                        src="/assets/navbar/Smally-name.png"
                        alt=""
                        className="w-28"
                    />
                </div>
            </div>
            <div className="flex items-center md:mr-16">
                <Link to="/" className="mx-2 hover:text-red-text hover:underline">Home</Link>
                <Link to="/" className="mx-2 hover:text-red-text hover:underline">About</Link>
                <Link to="/" className="mx-2 hover:text-red-text hover:underline">Services</Link>
                <Link to="/" className="mx-2 hover:text-red-text hover:underline">Host</Link>
            </div>
        </div>
    )
}
