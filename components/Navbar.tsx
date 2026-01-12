"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header className="w-full px-4 md:px-8 py-4 bg-white flex flex-col md:flex-row justify-between md:items-center overflow-hidden shadow-md">
            <div className="w-full md:w-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold font-title">Apples To Oaks</h1>
                <button className="flex md:hidden flex-col gap-2" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <div className={`w-8 bg-black h-1 rounded-2xl ${navbarOpen && 'rotate-45 translate-y-3'} transition-all duration-500`}/>
                    <div className={`w-8 bg-black h-1 rounded-2xl ${navbarOpen && 'rotate-45 opacity-0'} transition-all duration-500`}/>
                    <div className={`w-8 bg-black h-1 rounded-2xl ${navbarOpen && '-rotate-45 -translate-y-3'} transition-all duration-500`}/>
                </button>
            </div>
            <ul className={`${navbarOpen ? 'max-h-96 mt-4' : 'max-h-0 mt-0'} overflow-hidden flex flex-col md:flex-row gap-4 md:gap-8 md:max-h-full transition-[max-height,margin] duration-500 ease-in-out`}>
                <li><Link href='/' className="relative no-underline text-black after:block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full hover:text-brand transition-all duration-300">Home</Link></li>
                <li><Link href='/about' className="relative no-underline text-black after:block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full hover:text-brand transition-all duration-300">About</Link></li>
                <li><Link href='/services' className="relative no-underline text-black after:block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full hover:text-brand transition-all duration-300">Services</Link></li>
                <li><Link href='/contact' className="relative no-underline text-black after:block after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full hover:text-brand transition-all duration-300">Contact</Link></li>
            </ul>
        </header>
    );
}