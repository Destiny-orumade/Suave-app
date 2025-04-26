'use client';

import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="flex justify-between items-center py-6 px-6 md:px-12 shadow-md bg-white top-0 z-50">
            <h1 className="text-xl font-bold">Suuave</h1>


            {/* desktop nav */}
            <ul className="hidden md:flex gap-8 text-sm font-medium">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
                <button className="ml-6 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">Sign In</button>
            </ul>


            {/* mobile Hambuger */}
            <div className="md:hidden onClick={() => setIsOpen(!isOpen)}>">
                <div className="space-y-1 cursor-pointer">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </div>
            </div>

            {/* mobile nav */}
            {isOpen && (
                <ul className="absolute top-20 left-0 right-0 bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                    <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">Sign In</button>
                </ul>
            )}
        </nav>
    );
};


export default NavBar;
    
