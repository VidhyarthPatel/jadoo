
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/Jadoo.png"
                        alt="Jadoo Logo"
                        width={115}
                        height={34}
                        priority
                    />
                </Link>

                <li className="flex items-center space-x-12">
                    <Link
                        href="#"
                        className="text-[#181E4B] font-medium"
                    >
                        Destinations
                    </Link>
                    <Link
                        href="#"
                        className="text-[#181E4B] font-medium"
                    >
                        Hotels
                    </Link>
                    <Link
                        href="#"
                        className="text-[#181E4B] font-medium"
                    >
                        Flights
                    </Link>
                    <Link
                        href="#"
                        className="text-[#181E4B] font-medium"
                    >
                        Bookings
                    </Link>
                    <Link
                        href="#"
                        className="text-[#181E4B] font-medium"
                    >
                        Login
                    </Link>
                    <button className="border border-[#181E4B] px-5 py-2 rounded-md font-medium">
                        Sign up
                    </button>
                    <span className="font-medium">EN</span>
                </li>
            </div>
        </nav>
    );
}
