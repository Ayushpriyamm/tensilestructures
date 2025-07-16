'use client'

import HeroCard from "../components/card/HeroCard";

export default function PartnersPage() {
  return (

     <div className=" min-h-screen">
              <HeroCard
                bgImg='/images/t14.jpg'
                heading="Our Partners"
                subheading="We are a leading tensile structure design and engineering company committed to innovation and durability."
              />
            </div>
    // <div className="p-8 min-h-screen">
    //   <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
    //   <p className="text-lg">
    //     We are a leading tensile structure design and engineering company
    //     committed to innovation and durability.
    //   </p>
    // </div>
  );
}
