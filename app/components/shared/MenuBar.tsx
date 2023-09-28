"use client";

import React, {useState} from 'react';
import Image from "next/image";
const MenuBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="p-4 flex justify-between items-center w-screen text-[#333333]">
            <div className="flex items-center">
                <Image
                    className="h-8 w-8 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <nav className="ml-4 space-x-4">
                    <a href="#" className="text-white"> Menu1 </a>
                    <a href="#" className="text-white"> Menu2 </a>
                    < a href="#" className="text-white"> Menu 3 </a>
                    < a href="#" className="text-white"> Menu 4 </a>
                    < a href="#" className="text-white"> Menu 5 </a>
                </nav>
            </div>
            <div className="relative">
                <button onClick={toggleMenu} className="text-white focus:outline-none"> icon</button>
                {
                    isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                            <ul>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">EN</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">DE</a>
                                </li>
                            </ul>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default MenuBar;
