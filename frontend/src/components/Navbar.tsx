import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold text-blue-800">
                                The Brisa Nature Stay
                            </h1>
                        </a>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-gray-600 hover:text-blue-500 transition">
                            Home
                        </a>
                        <a href="#accommodations" className="text-gray-600 hover:text-blue-500 transition">
                            Rooms
                        </a>
                        <a href="#amenities" className="text-gray-600 hover:text-blue-500 transition">
                            Amenities
                        </a>
                        <a href="#gallery" className="text-gray-600 hover:text-blue-500 transition">
                            Gallery
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-500 transition">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="focus:outline-none">
                            <svg
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
