"use client"
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen((prev) => !prev);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='bg-primary p-4 md:p-6 lg:p-8 top-0 left-0 w-full'>
            <div className="container w-full mx-auto flex justify-between items-center">
                <div className="text-black flex items-center sm:text-xl md:text-2xl font-bold">
                    <img
                        src="/astro-logo.png"
                        alt="Logo"
                        className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-2 rounded-xl"
                    />
                    <a className='' href="#home">கற்பக விநாயகர் ஜோதிடம்</a>
                </div>
                <div className="hidden sm:flex space-x-4 text-black">
                    <a href="#home" className="hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">முகப்பு</a>
                    <a href="#about" className="hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">எங்களை பற்றி</a>
                    <a href="#star" className="hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">நட்சத்திரங்கள்</a>
                    <a href="#rasi" className="hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">இராசிகள்</a>
                    <a href="#contact" className="hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">தொடர்பு</a>
                </div>
                <div className="sm:hidden">
                    <button onClick={(event) => { event.stopPropagation(); toggleMenu(event); }} className="text-black focus:outline-none">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div ref={menuRef} onClick={toggleMenu} className="absolute right-2 mt-4 w-56 bg-secondary border border-yellow-400 rounded-lg shadow-sm shadow-yellow-400 p-4 space-y-4 text-black">
                    <a href="#home" className="block hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">முகப்பு</a>
                    <a href="#about" className="block hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">எங்களை பற்றி</a>
                    <a href="#star" className="block hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">நட்சத்திரங்கள்</a>
                    <a href="#rasi" className="block hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">இராசிகள்</a>
                    <a href="#contact" className="block hover:text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl">தொடர்பு</a>
                </div>
            )}
        </nav>
    );
}