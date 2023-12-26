import React, { useEffect, useState } from "react";
import logo from '../assets/Logo.png';
import { Link } from "react-scroll";

import {FaXmark, FaBars} from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() =>{
        const handleScroll = () => {
            if(Window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.addEventListener('scroll', handleScroll);
        };
    });

    // navItems array

    const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"},
    ];

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white md:bg-transparent">
            <nav className={`p-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className="flex items-center justify-between gap-8 text-base">
                    <a href="" className="flex space-x-3 text-2xl font-semibold item-center">
                        
                        <img src={logo} alt="Nexcent" className="items-center inline-block w-10"/>

                    <span className="text-[#263238]">NEXCENT</span>
                    
                    </a>

                    <ul className="hidden space-x-12 md:flex">
                        {
                            navItems.map(({ link, path }) => (
                                <Link key={path} spy={true} smooth={true} offset={-100} className="block text-base cursor-pointer text-gray900 hover:text-brandPrimary first:font-medium" to={path}>{link}</Link>
                            ))
                        }
                    </ul>

                    <div className="items-center hidden space-x12 lg:flex">

                         <a href="" className="hidden lg:flex item-center text-brandPrimary hover:text-gray900">Login</a>

                        <button className="px-4 py-2 text-white transition-all duration-300 rounded hover:bg-neuturalDGrey bg-brandPrimary">Sign Up</button>

                    </div>

                    <div className="md:hidden">
                        <button 
                        onClick={toggleMenu}
                        className="focus:outline-none focus:text-gray-500 text-neuturalDGrey">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6"/>) : (<FaBars className="w-6 h-6"/>)
                            }
                        </button>
                    </div>

                </div>
            
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => (
                            <Link key={path} spy={true} smooth={true} offset={-100} className="block text-base cursor-pointer text-gray900 hover:text-brandPrimary first:font-medium" to={path}>{link}</Link>
                        ))
                    }
                </div>

            </nav>

            
        </header>
    );
};

export default Navbar;