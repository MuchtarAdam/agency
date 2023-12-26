import React from "react";
import { Carousel } from 'flowbite-react';
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/IMG_2276.png";

const Home = () => {
    return(
        <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
            <Carousel className="w-full mx-auto">
                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">

                    <img src={banner1} alt="" />

                    <div className="md:w-1/2">
                        <h1 className="mb-4 text-5xl font-semibold leading-snug text-neuturalDGrey md:w-3/4">Lesson and insights <span className="text-brandPrimary">from 10 years</span></h1>

                        <p className="mb-8 text-base text-neuturalGrey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat at iusto expedita. Delectus repellendus, accusamus assumenda quam incidunt officia dolorum ut maiores voluptatum totam recusandae possimus quas blanditiis, sit doloribus.</p>
                        
                        <button className="py-2 text-white transition-all duration-300 rounded px-7 bg-brandPrimary hover:bg-neuturalDGrey hover:-translate-y-3">Register</button>
                    </div>
                    
                </div>

                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">

                    <img src={banner2} alt="" className="w-96" />

                    <div className="md:w-1/2">
                        <h1 className="mb-4 text-5xl font-semibold leading-snug text-neuturalDGrey md:w-3/4">Learn and Earn <span className="text-brandPrimary">in 5 Months</span></h1>

                        <p className="mb-8 text-base text-neuturalGrey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat at iusto expedita. Delectus repellendus, accusamus assumenda quam incidunt officia dolorum ut maiores voluptatum totam recusandae possimus quas blanditiis, sit doloribus.</p>
                        
                        <button className="py-2 text-white transition-all duration-300 rounded px-7 bg-brandPrimary hover:bg-neuturalDGrey hover:-translate-y-3">Register</button>
                    </div>

                </div>

                
            </Carousel>
        </div>
    );
};

export default Home;