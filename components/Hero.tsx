import Image from "next/image";

export default function Hero() {
    return (
        <section className="container mx-auto px-6 pt-12 pb-24 flex items-center">
            {/* right-box */}
            <div className="w-1/2 text-left ">
                <h3 className="text-[#DF6951] font-bold text-xl uppercase mb-4">
                    Best Destinations around the world
                </h3>
                <h1 className="text-[#181E4B] font-serif text-7xl font-bold leading-tight mb-6">
                    Travel, enjoy
                    <br />
                    and live a new
                    <br />
                    and full life
                </h1>
                <p className="text-[#5E6282] text-lg leading-relaxed mb-8 max-w-lg">
                    Built Wicket longer admire do barton vanity itself do in it. Preferred
                    to sportsmen it engrossed listening. Park gate sell they west hard for
                    the.
                </p>
                <div className="flex items-center space-x-6">
                    <button className="bg-[#F1A501] text-white px-8 py-4 rounded-xl shadow-lg font-medium">
                        Find out more
                    </button>
                    <button className="flex items-center space-x-3">
                        <span className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center text-white shadow-lg">
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                        <span className="text-[#5E6282] font-medium">
                            Play Demo
                        </span>
                    </button>
                </div>
            </div>

            {/* image-side/left-side */}
            <div className="w-1/2 relative">
                <div className="relative w-full h-[700px]">
                    <Image
                        src="/Image.png"
                        alt="Traveler"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
