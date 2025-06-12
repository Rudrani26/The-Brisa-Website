import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BASE_PATH = '/The-Brisa-Website';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isLandingPage = location.pathname === BASE_PATH || location.pathname === `${BASE_PATH}/`;

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const elementId = hash.replace('#', '');
            const el = document.getElementById(elementId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleNavClick = (sectionId: string) => {
        if (isLandingPage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = `${BASE_PATH}/#${sectionId}`;
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left - Logo */}
                    <div className="flex-1 flex items-center justify-start">
                        <a href={`${BASE_PATH}`} className="text-xl font-semibold text-blue-800">
                            The Brisa Nature Stay
                        </a>
                    </div>

                    {/* Center - Nav Links */}
                    <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
                        <button onClick={() => handleNavClick('home')} className="text-gray-600 hover:text-blue-500 transition cursor-pointer">
                            Home
                        </button>
                        <button onClick={() => handleNavClick('accommodations')} className="text-gray-600 hover:text-blue-500 transition cursor-pointer">
                            Rooms
                        </button>
                        <button onClick={() => handleNavClick('amenities')} className="text-gray-600 hover:text-blue-500 transition cursor-pointer">
                            Amenities
                        </button>
                        <button onClick={() => handleNavClick('gallery')} className="text-gray-600 hover:text-blue-500 transition cursor-pointer">
                            Gallery
                        </button>
                        <button onClick={() => handleNavClick('contact')} className="text-gray-600 hover:text-blue-500 transition cursor-pointer">
                            Contact
                        </button>
                    </div>

                    {/* Right - Admin Link */}
                    <div className="flex-1 hidden md:flex justify-end items-center">
                        <span
                            onClick={() => navigate('/admin')}
                            className="cursor-pointer text-blue-500 font-semibold hover:underline transition"
                        >
                            Admin
                        </span>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition">
                                Home
                            </button>
                            <button onClick={() => handleNavClick('accommodations')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition">
                                Rooms
                            </button>
                            <button onClick={() => handleNavClick('amenities')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition">
                                Amenities
                            </button>
                            <button onClick={() => handleNavClick('gallery')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition">
                                Gallery
                            </button>
                            <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition">
                                Contact
                            </button>
                            <button
                                onClick={() => navigate('/admin')}
                                className="block w-full text-left px-3 py-2 text-blue-500 font-semibold hover:underline"
                            >
                                Admin
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
