import React from "react";
import Image from "next/image";

export default function Category() {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h3 className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
                    Category
                </h3>
                <h2 className="text-[#181E4B] font-serif text-5xl font-bold">
                    We Offer Best Services
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center text-center p-8 rounded-[36px] bg-white w-64 group">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                        <Image
                            src="/icon-satellite.png"
                            alt="Satellite"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                    <h4 className="text-[#181E4B] font-bold text-xl mb-4">
                        Calculated Weather
                    </h4>
                    <p className="text-[#5E6282] text-sm leading-relaxed">
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-[36px] bg-white w-64">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                        <Image
                            src="/icon-plane.png"
                            alt="Plane"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                    <h4 className="text-[#181E4B] font-bold text-xl mb-4">
                        Best Flights
                    </h4>
                    <p className="text-[#5E6282] text-sm leading-relaxed">
                        Engrossed listening. Park gate sell they west hard for the.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-[36px] bg-white w-64">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                        <Image
                            src="/icon-mic.png"
                            alt="Microphone"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                    <h4 className="text-[#181E4B] font-bold text-xl mb-4">
                        Local Events
                    </h4>
                    <p className="text-[#5E6282] text-sm leading-relaxed">
                        Barton vanity itself do in it. Preferd to men it engrossed listening.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-[36px] transition-shadow bg-white w-64">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                        <Image
                            src="/icon-gear.png"
                            alt="Gear"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                    <h4 className="text-[#181E4B] font-bold text-xl mb-4">
                        Customization
                    </h4>
                    <p className="text-[#5E6282] text-sm leading-relaxed">
                        We deliver outsourced aviation services for military customers
                    </p>
                </div>
            </div>
        </section>
    );
}
