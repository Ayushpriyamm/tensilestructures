"use client";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center">
      <HeroCarousel></HeroCarousel>
      {/* <div className="p-4 text-center">
        For more than a decade, DIVINAM STRUCTURAY has been a front runner in
        fabric structure design and technology. We have achieved this through an
        unyielding commitment to innovation and excellence, dedicated to being a
        ground breaking, cutting-edge design/build company for many years to
        come. We offer our clients Complete Design Development, Engineering,
        Manufacturing, Project Management, and Application.
      </div> */}
    </div>
  );
}
