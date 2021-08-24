import React from 'react'


//components
import Navbar from '../components/Navbar'
// import Header from '../components/Header'
import HomeHero2 from '../components/HomeHero2'
import Footer from '../components/Footer'
import OurPerformers from '../components/OurPerformers'

export default function HomePage() {
    return (
        <div className="bg-gradient-to-b from-red-primary  to-red-bg">
            {/* <Header /> */}
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row mt-4 mx-16 justify-between">
                <div>
                    <p className="text-red-text text-lg font-bold sm:text-xl lg:text-2xl" >Live Mini Events platform for you.</p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-3" >A platform which lets you Create Live Events upto 10 minutes and Experience Elite Performances at just 10 </p>
                    
                </div>
                <div className=" md:w-3/5 lg:w-1/4">
                    <img src="/assets/homePage/hero.png" alt="" className="" />
                </div>
            </div>
            <HomeHero2 />
            <OurPerformers />
            <Footer />
        </div>
    )
}
