'use client';

import HeroCard from "../components/card/HeroCard";
import Values from "../components/card/ValuesCard";
import VisMisCard from "../components/card/VisMisCard";
import ProfileCard from "../components/card/ProfileCard";
import { Check, Eye, Lightbulb, Award, Earth, Handshake } from 'lucide-react';
import CTASection from "../components/card/CTASection";
import TestimonialCard from "../components/card/TestimonialCard";
import WhatsappButton from "../components/WhatsappButton";


const testimonials = [
  {
    name: "Ananya Mehta",
    company: "Chief Design Officer, DLF ",
    quote: "Divinam structures delivered an exceptional stadium roof that perfectly balances functionality with architectural beauty.",
    rating: 5
  },
  {
    name: "Amit Rao",
    company: "Manager – Real Estate & Facilities, Wipro Limited",
    quote: "Their walkway covers have transformed our city center. The quality and design exceeded our expectations.",
    rating: 4
  },
  {
    name: "Rhea Kapoor",
    company: "Rhea Kapoor",
    quote: "Professional service from concept to completion. The tensile structures are both stunning and practical.",
    rating: 5
  },

];
const members = [
  {
    image: "/images/umang.jpg",
    name: "Umang Sethi",
    role: "CEO",
    bio: "With a visionary approach and deep industry insight, Umang Sethi leads the company as CEO. He is passionate about pushing boundaries in tensile architecture and driving innovation across all fronts.",
  },
  {
    image: "/images/ks.jpg",
    name: "KS Tiwari",
    role: "CFO",
    bio: "KS Tiwari oversees the company’s financial health with strategic foresight. As CFO, he manages budgets, optimizes investments, and ensures sustainable growth through sound financial planning.",
  },
  {
    image: "/images/khushi.jpg",
    name: "Khushi Singh",
    role: "Projects and Operations",
    bio: "Khushi Singh ensures seamless execution of all projects and operational workflows. With a detail-oriented mindset, she bridges teams and timelines to deliver excellence at every stage.",
  },
  {
    image: "/images/khushNawaz.jpeg",
    name: "Khush Nawaj",
    role: "Production",
    bio: "Khush Nawaj plays a pivotal role in managing on-ground production with precision and efficiency. With a hands-on approach and deep technical knowledge, he ensures that every tensile structure is built to the highest standards of quality and durability.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-700">

      {/* Hero Section */}
      <HeroCard
        heading="About Us"
        subheading="We are a leading tensile structure design and engineering company committed to innovation and durability."
        bgImg="/images/t10.avif"
      />

      {/* Our Story */}
      <section className="flex flex-col sm:flex-row justify-center gap-10 px-4 sm:px-6 py-16 sm:py-24 items-center bg-gray-50">
        <div className="w-full space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900">Our Story</h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-600">
            <p>
              At <strong>Divinam Structuray</strong>, we are pioneers in delivering high-performance tensile structures that seamlessly blend design innovation with engineering excellence. Our structures are crafted to offer superior design flexibility—pushing the boundaries of what traditional building materials can achieve.
            </p>
            <p>
              Lightweight, durable, and architecturally elegant, our solutions serve a wide range of purposes—from expansive shade canopies and sheltered walkways to canopies, skylights, and temporary modular buildings.
            </p>
            <p>
              Driven by a passion for structural creativity and sustainability, we work closely with architects, developers, and organizations to deliver signature tensile installations that define space and inspire interaction.
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 max-w-md sm:max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=faces"
            alt="Modern tensile structure"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
          <div className="absolute bg-blue-700 -bottom-6 -right-4 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">15+</span>
            <p className="text-xs text-white text-center">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="flex flex-col sm:flex-row justify-center gap-10 py-20 px-4 sm:px-6 bg-white">
        <VisMisCard
          logo={<Check color="white" />}
          title="Mission"
          description="To design and deliver exceptional tensile structures that combine aesthetics, performance, and practicality—empowering spaces to become more functional, adaptable, and visually striking. We are committed to providing cost-effective, eco-conscious, and innovative solutions that exceed expectations and transform architectural landscapes across industries."
        />
        <VisMisCard
          logo={<Eye color="white" />}
          title="Vision"
          description="To be recognized as a leading force in tensile architecture, known for shaping iconic structures that span possibilities—literally and figuratively. We aim to set new standards in design adaptability, structural elegance, and sustainable construction, making Divinam Structuray a name synonymous with architectural brilliance and engineering trust."
        />
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-4">Our Core Values</h2>
        <p className="text-lg text-gray-600 mb-10">The principles that guide everything we do</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Values
            logo={<Lightbulb color="#d9c917" size={48} strokeWidth={2.5} />}
            title="Innovation"
            description="Pushing the boundaries of what's possible in tensile architecture"
          />
          <Values
            logo={<Award color="blue" size={48} strokeWidth={2.5} />}
            title="Quality"
            description="Uncompromising standards in materials, craftsmanship, and service"
          />
          <Values
            logo={<Earth color="green" size={48} strokeWidth={2.5} />}
            title="Sustainability"
            description="Environmentally conscious solutions for a better future"
          />
          <Values
            logo={<Handshake color="orange" size={48} strokeWidth={2.5} />}
            title="Partnership"
            description="Building lasting relationships with clients and communities"
          />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">Leadership Team</h2>
          <p className="text-lg text-gray-600">Meet the experts behind our success</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <ProfileCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>



      </section>
      <CTASection />

      <section className="bg-white py-16 px-4 sm:px-8 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white bg-[#4169e1] inline-block px-6 py-2 rounded-md shadow-md">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">Trusted by industry leaders across sectors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
      <WhatsappButton/>
    </div>
  );
}
