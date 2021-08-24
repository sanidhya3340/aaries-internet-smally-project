import React from 'react'
import Cards from '../components/Card'

//import Componentts
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
// import Header from "../components/Header";

export default function Home() {
    return (
        
        <div className="bg-gradient-to-b from-red-primary  to-red-bg">
            {/* <Header /> */}
            <Navbar />
        <div className="mx-16">
            <div className="flex flex-col md:flex-row ">
                <p className=" text-lg md:text-2xl text-red-text font-bold">Live Mini Events </p>
                <p className="md:ml-1 text-gray-600 text-lg md:text-2xl font-bold">platform for you at just ₹10</p>
            </div>
            <p className="text-gray-400 font-semibold" >Watch these Artists Performing Live!</p>
        </div>
            {/* <p>Helo</p> */}
        <div className="flex justify-center">
            <Cards />
        </div>
            <Footer />

        </div>
    )
}
