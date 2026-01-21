import Category from "@/components/Category";
import Destinations from "@/components/Destinations";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-screen overflow-y-auto relative">
      <div className="absolute top-0 right-0 -z-10">
        <Image
          src="/Decore.png"
          alt="decoration"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>
      <Navbar />
      <Hero />
      <Category />
      <Destinations />
    </main>
  );
}
