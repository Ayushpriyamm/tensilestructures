'use client'
import { title } from "process";
import HeroCard from "../components/card/HeroCard";
import Values from "../components/card/ValuesCard";
import VisMisCard from "../components/card/VisMisCard";
import { Check, Eye, Lightbulb, Award, Earth, Handshake } from 'lucide-react';
import ProfileCard from "../components/card/ProfileCard";

const members = [
  {
    image: "/images/umang.jpg",
    name: "Umang Sethi",
    role: "CEO",
    bio: "With a visionary approach and deep industry insight, Umang Sethi leads the company as CEO. He is passionate about pushing boundaries in tensile architecture and driving innovation across all fronts."
  },
  {
    image: "/images/khushi.jpg",
    name: "Khushi Singh",
    role: "Projects and Operations",
    bio: "Khushi Singh ensures seamless execution of all projects and operational workflows. With a detail-oriented mindset, she bridges teams and timelines to deliver excellence at every stage."
  },
  {
    image: "/images/ks.jpg",
    name: "KS Tiwari",
    role: "CFO",
    bio: "KS Tiwari oversees the company’s financial health with strategic foresight. As CFO, he manages budgets, optimizes investments, and ensures sustainable growth through sound financial planning."
  }
];


export default function AboutPage() {
  return (
    <div className="min-h-screen">

      <HeroCard
        heading="About Us"
        subheading="We are a leading tensile structure design and engineering company
        committed to innovation and durability."
        bgImg="/images/tensile8.png"
      />

      {/*Our Story*/}

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-6 py-16 sm:py-20 items-center" >
        <div className="text  w-full space-y-2 sm:space-y-8 ">
          <h1 className="text-4xl sm:text-6xl font-bold">Our story</h1>
          <h1 className="p-1">
            At Divinam Structuray, we are pioneers in delivering high-performance tensile structures that seamlessly blend design innovation with engineering excellence. Our structures are crafted to offer superior design flexibility—pushing the boundaries of what traditional building materials can achieve.

            Lightweight, durable, and architecturally elegant, our solutions serve a wide range of purposes—from expansive shade canopies and sheltered walkways to canopies, skylights, and temporary modular buildings. Whether enhancing modern campuses, commercial complexes, or public spaces, we bring vision to life through form and function.

            Driven by a passion for structural creativity and sustainability, we work closely with architects, developers, and organizations to deliver signature tensile installations that define space and inspire interaction.


          </h1>
        </div>
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=faces"
            alt="Modern tensile structure"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bg-emerald-700 -bottom-8 -right-4 w-24 h-24 bg-tensile-copper rounded-full flex flex-col items-center justify-center">
            <span className="text-white font-bold text-lg ">15+</span>
            <h1 className="text-xs text-center  text-white">years of experience</h1>
          </div>
        </div>
      </div>

      {/*Our Mission Vison*/}
      <div className=" flex flex-col sm:flex-row justify-center gap-10 py-10 sm:py-20 px-4 sm:px-6 ">
        <VisMisCard logo={<Check />} title="Mission" description="To design and deliver exceptional tensile structures that combine aesthetics, performance, and practicality—empowering spaces to become more functional, adaptable, and visually striking.We are committed to providing cost-effective, eco-conscious, and innovative solutions that exceed expectations and transform architectural landscapes across industries."
        />
        <VisMisCard logo={<Eye />} title="Vision" description="To be recognized as a leading force in tensile architecture, known for shaping iconic structures that span possibilities—literally and figuratively.We aim to set new standards in design adaptability, structural elegance, and sustainable construction, making Divinam Structuray a name synonymous with architectural brilliance and engineering trust." />

      </div>

      <div className=" flex flex-col  justify-center gap-4 px-4 py-10 sm:py-20 sm:px-6">
        <div className="flex flex-col justify-center text-center p-2">
          <h1 className=" text-3xl sm:text-5xl font-bold">Our Core Values</h1>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="flex flex-col  sm:flex-row justify-center gap-4 ">
          <Values logo={<Lightbulb color="#d9c917" size={48} strokeWidth={3} />} title="Innovation" description="Pushing the boundaries of what's possible in tensile architecture"></Values>
          <Values logo={<Award color="blue" size={48} strokeWidth={3} />} title="Quality" description="Uncompromising standards in materials, craftsmanship, and service"></Values>
          <Values logo={<Earth color="green" size={48} strokeWidth={3} />} title="Sustainability" description="Environmentally conscious solutions for a better future"></Values>
          <Values logo={<Handshake color="orange" size={48} strokeWidth={3} />} title="Partnership" description="Building lasting relationships with clients and communities"></Values>

        </div>
      </div>

      <div className="py-10 px-4 sm:py-20 sm:px-6 flex flex-col  justify-center gap-4 bg-gray-200">
        <div className="text-center p-4">
          <h2 className="text-4xl font-bold ">Leadership Team</h2>
          <p className="text-xl ">Meet the experts behind our success</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {members.map((member, index) => (
            <ProfileCard key={index} image={member.image} name={member.name} role={member.role} bio={member.bio} ></ProfileCard>
          ))}
        </div>
      </div>

      {/* <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        We are a leading tensile structure design and engineering company
        committed to innovation and durability.
      </p> */}
    </div>
  );
}
