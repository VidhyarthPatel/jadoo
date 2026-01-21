import React from "react";
import Image from "next/image";

export default function Destinations() {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h3 className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
                    Top Selling
                </h3>
                <h2 className="text-[#181E4B] font-serif text-5xl font-bold">
                    Top Destinations
                </h2>
            </div>

            <div className="flex justify-between items-center gap-8">

                <div className="bg-white rounded-[24px] shadow-lg overflow-hidden w-80">
                    <div className="h-80 w-full relative">
                        <Image
                            src="/destination-rome.png"
                            alt="Rome, Italy"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4 text-[#5E6282] font-medium text-lg">
                            <span>Rome, Italy</span>
                            <span>$5,42k</span>
                        </div>
                        <div className="flex items-center text-[#5E6282] font-medium">
                            <svg
                                className="w-5 h-5 mr-2 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>10 Days Trip</span>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-[24px] shadow-lg overflow-hidden w-80">
                    <div className="h-80 w-full relative">
                        <Image
                            src="/destination-london.jpg"
                            alt="London, UK"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4 text-[#5E6282] font-medium text-lg">
                            <span>London, UK</span>
                            <span>$4.2k</span>
                        </div>
                        <div className="flex items-center text-[#5E6282] font-medium">
                            <svg
                                className="w-5 h-5 mr-2 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>12 Days Trip</span>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-[24px] shadow-lg overflow-hidden w-80 relative">
                    <div className="h-80 w-full relative">
                        <Image
                            src="/destination-europe.png"
                            alt="Full Europe"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4 text-[#5E6282] font-medium text-lg">
                            <span>Full Europe</span>
                            <span>$15k</span>
                        </div>
                        <div className="flex items-center text-[#5E6282] font-medium">
                            <svg
                                className="w-5 h-5 mr-2 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>28 Days Trip</span>
                        </div>
                    </div>
                    <div className="absolute -right-12 bottom-12 -z-10 w-24 h-24 border-2 border-gray-300 rounded-full opacity-50 hidden"></div>
                </div>
            </div>
        </section>
    );
}
