"use client";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center">
      <HeroCarousel></HeroCarousel>

      <div className="flex flex-col sm:flex-col p-4 text-center space-y-4 sm:space-y-2">
        <div className="p-2">
          <h1 className="font-bold text-2xl sm:text-4xl">About Us</h1>
        </div>
        <div className="p-2 space-y-2">
          <p className="">
            For more than a decade, DIVINAM STRUCTURAY has been a front runner
            in fabric structure design and technology. We have achieved this
            through an unyielding commitment to innovation and excellence,
            dedicated to being a ground breaking, cutting-edge design/build
            company for many years to come. We offer our clients Complete Design
            Development, Engineering, Manufacturing, Project Management, and
            Application.
          </p>
          <Link href={"/about"}>
            <button className="bg-blue-400 px-4 py-2 cursor-pointer hover:opacity-90 rounded-lg">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
