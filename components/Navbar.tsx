
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-10">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-wrap items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/Jadoo.png"
                            alt="Jadoo Logo"
                            width={115}
                            height={34}
                            priority
                        />
                    </Link>

                    <button
                        className="md:hidden p-2 text-[#181E4B]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Image
                            src={isOpen ? "/close.png" : "/menu.png"}
                            alt="Menu"
                            width={24}
                            height={24}
                            className="cursor-pointer"
                        />
                    </button>

                    <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto bg-white md:bg-transparent rounded-lg md:rounded-none mt-2 md:mt-0 p-4 md:p-0 shadow-lg md:shadow-none`}>
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
                            <ul
                                className="text-[#181E4B] font-medium"
                            >
                                Destinations
                            </ul>
                            <ul
                                className="text-[#181E4B] font-medium"
                            >
                                Hotels
                            </ul>
                            <ul
                                className="text-[#181E4B] font-medium"
                            >
                                Flights
                            </ul>
                            <ul
                                className="text-[#181E4B] font-medium"
                            >
                                Bookings
                            </ul>
                            <ul
                                className="text-[#181E4B] font-medium"
                            >
                                Login
                            </ul>
                            <button className="border border-[#181E4B] px-5 py-2 rounded-md font-medium">
                                Sign up
                            </button>
                            <span className="font-medium">EN</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
