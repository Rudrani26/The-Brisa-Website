import React from "react";

export default function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <svg
                            className="w-full h-64 text-blue-100"
                            viewBox="0 0 400 300"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect fill="#E6F7FF" width="400" height="300" rx="10" />
                            <path fill="#87CEEB" d="M0 200 L400 200 L400 290 L0 290 Z" />
                            <path
                                fill="#FFF"
                                d="M0 220 Q100 180 200 220 T400 220 L400 290 L0 290 Z"
                            />
                            <path
                                fill="#FFD700"
                                d="M350 50 A15 15 0 0 1 380 50 A15 15 0 0 1 350 50"
                            />
                            <path
                                fill="#FFF"
                                opacity="0.5"
                                d="M50 150 Q100 100 150 150 T250 150 T350 150 L350 200 L50 200 Z"
                            />
                            <path fill="#4682B4" d="M100 250 L120 250 L120 290 L100 290 Z" />
                            <path fill="#4682B4" d="M150 240 L170 240 L170 290 L150 290 Z" />
                            <path fill="#4682B4" d="M200 260 L220 260 L220 290 L200 290 Z" />
                            <path fill="#4682B4" d="M250 245 L270 245 L270 290 L250 290 Z" />
                            <path fill="#4682B4" d="M300 255 L320 255 L320 290 L300 290 Z" />
                        </svg>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold heading text-blue-800 mb-4">
                            Welcome to The Brisa Nature Stay
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Nestled on the pristine coastline where azure waters meet golden sands, our resort offers an unparalleled beachfront experience. Every room provides spectacular ocean views, allowing you to wake up to the soothing sound of waves and breathtaking sunrises.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our award-winning resort combines luxury accommodations with authentic coastal charm, creating the perfect backdrop for your dream vacation. Whether you're seeking a romantic getaway, family adventure, or peaceful retreat, Azure Shores Resort promises an unforgettable stay.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "Beachfront Access",
                                "Luxury Spa",
                                "Fine Dining",
                                "Water Activities",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center bg-blue-50 px-4 py-2 rounded-md"
                                >
                                    <svg
                                        className="w-5 h-5 text-blue-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
