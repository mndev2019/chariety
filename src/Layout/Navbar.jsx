import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import logo from '../../src/assets/Image/logo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const location = useLocation();




    useEffect(() => {
        // Scroll to the bottom when the page changes
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    }, [location]);




    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-semibold items-center">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/programs"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    Programs
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    How to Help
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    to="/donate"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    Donate
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/testimonies"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    Testimonies
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "text-[#1A237E]" : "hover:text-[#1A237E]"}
                    onClick={() => setIsOpen(false)}
                >
                    Contact Us
                </NavLink>
            </li>

        </ul>
    );


    return (
        <>
            <section className={`py-4 lg:px-20 px-10 w-full ${location.pathname === '/' ? 'absolute' : 'relative'}`}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <NavLink to='/'>
                            <img src={logo} alt='Logo' className='h-[80px]' />
                            {/* <p className='text-black font-xl text-bold'>
                                Logo
                            </p> */}
                        </NavLink>

                        {/* Navbar links for larger screens */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navlist}

                            {/* Search and Cart icons for desktop view */}

                        </div>

                        {/* Sidebar icon for mobile */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                <CiMenuFries className='text-3xl' />
                            </button>
                        </div>


                    </div>
                </div>

                {/* Sidebar menu for mobile */}
                <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`} style={{ width: '50%' }}>
                    <div className="p-6">
                        {/* Close button inside the sidebar */}
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu}>
                                <IoClose className='text-2xl' />
                            </button>
                        </div>
                        {navlist}
                    </div>
                </div>
            </section >
        </>
    );
};

export default Navbar;
