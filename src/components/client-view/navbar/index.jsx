'use client'

import { useState } from "react";

const menuItems = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "experience",
        label: "Experience"
    },
    {
        id: "project",
        label: "Project"
    },
    {
        id: "contact",
        label: "Contact"
    },
];

export default function Navbar(){

    const [activeLink, setActiveLink] = useState("home");
    const [scrollActive, setScrollActive] = useState(false);


    return (
    <>
    <header className={`fixed top-0 w-full z-30 bg-white transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4" }`}>
    
    <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">

            </div>

        </div>

    </nav>


        
    </header>
        
    </>
    ) 
    
}