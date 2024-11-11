// eslint-disable-next-line no-unused-vars
import React from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            {/* left side */}
            <div className="flex items-center md:gap-16 gap-4">
                <Link to="/">
                <HiMiniBars3CenterLeft className="size-6" />
                </Link>
                {/* search input */}
                <div className="relative sm:w-72 w-40 space-x-2">
                    <IoSearchOutline  className="absolute"/>
                    <input type="text" placeholder="Search here" 
                    className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                </div>
            </div>


            {/* right side */}
            <div>
                nav items
            </div>
        </nav>
        </header>
  )
}

export default NavBar