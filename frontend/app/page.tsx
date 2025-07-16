"use client";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Link from "next/link";
import GlobalNetworkMap from "./components/GlobalNetworkMap";
import LearnMore from "./components/card/LearMoreCard";
import AnimatedCounter from "./components/counter/AnimatedCounter";
import TestimonialCard from "./components/card/TestimonialCard";
import CTASection from "./components/card/CTASection";
import PatronsCarousel from "./components/carousel/PatronCarousel"
import { motion } from 'framer-motion'
import QuoteForm from "./components/QuoteForm";

export default function Home() {
  const services = [
    {
    title: "Designing",
    description: "Architectural tensile designs that balance creativity and constructability using cutting-edge software and expert analysis.",
    
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop&crop=faces",
    icon: "🖌️"
  },
  {
    title: "Engineering",
    description: "Robust structural engineering tailored for tensile architecture, built to endure extreme wind, snow, and dynamic forces.",
    
    image: "https://plus.unsplash.com/premium_photo-1661963236181-9eb0c8d766e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
    icon: "📐"
  },
  {
    title: "Application",
    description: "Expert on-site installation of tensile structures in complex environments across the globe, ensuring safety and precision.",
    
    image: "https://media.istockphoto.com/id/473683922/photo/civil-engineers-looking-at-blueprints.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSPuQ3vCwKWQvuWe8a_TeHAkjnSqpESwdmW-rQ08UN4=",
    icon: "🏗️"
  }
  ];

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

  return (
    <div className="flex flex-col  justify-center  space-y-2">
      <HeroCarousel></HeroCarousel>

      {/* OUR SERVICES CONTENT */}

      <div className=" py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tensile-blue mb-4">Our Expertise</h2>
            <p className="text-xl text-tensile-gray max-w-3xl mx-auto">
              We specialize in creating innovative tensile structures that push the boundaries of architecture and engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto" >
            {services.map((service, index) => (
              <LearnMore
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>


      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 text-center bg-[#4169e1]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div>
          <AnimatedCounter end={50} suffix="+" />
          <p className="mt-1 text-sm text-white">Projects Completed</p>
        </div>
        <div>
          <AnimatedCounter end={20} suffix="+" />
          <p className="mt-1 text-sm text-white">Years Experience</p>
        </div>
        <div>
          <AnimatedCounter end={99} suffix="%" />
          <p className="mt-1 text-sm text-white">Client Satisfaction</p>
        </div>
        <div>
          <AnimatedCounter end={10} suffix="+" />
          <p className="mt-1 text-sm text-white">States Served</p>
        </div>
      </motion.div>


      {/* Testimonials Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tensile-blue mb-4">What Our Clients Say</h2>
            <p className="text-xl text-tensile-gray">Trusted by industry leaders worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} name={testimonial.name} company={testimonial.company} quote={testimonial.quote} rating={testimonial.rating} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <motion.div
        className="py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <CTASection />
      </motion.div>

      {/* Patrons Carousel with animation */}
      <motion.div
        className="py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <PatronsCarousel />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center  justify-center py-10 px-4 sm:px-8 lg:px-0 bg-gradient-to-br from-gray-200 to-white"
      >
        <div className="w-1/3 aspect-[3/5] hidden sm:block   ">
            <img src="/images/tensile8.png" alt="" className="h-full w-auto object-cover rounded-2xl" />
        </div>
        <div className="">
          <QuoteForm />
        </div>
      </motion.div>



      {/* AOUT US CONTENT */}
      {/* <div className="flex flex-col sm:flex-col p-2 sm:p-4 space-y-2 sm:space-y-4">
        <div className="p-2  text-center">
          <h1 className="font-bold text-2xl sm:text-4xl">About Us</h1>
        </div>
        <div className="sm:p-2 space-y-2">
          <p className="px-10 sm:px-20 ">
            For more than a decade, DIVINAM STRUCTURAY has been a front runner
            in fabric structure design and technology. We have achieved this
            through an unyielding commitment to innovation and excellence,
            dedicated to being a ground breaking, cutting-edge design/build
            company for many years to come. We offer our clients Complete Design
            Development, Engineering, Manufacturing, Project Management, and
            Application.
          </p>
          <Link href={"/about"} className="flex justify-center">
            <button className="bg-blue-400 px-4 py-2 cursor-pointer hover:opacity-90 rounded-lg">
              Read More
            </button>
          </Link>
          <div className="min-h-screen  text-white py-10 px-4">
            <h1 className="text-3xl md:text-5xl text-center font-bold mb-4">
              Global Network
            </h1>
            <p className="text-center mb-6 text-lg">
              Worldwide Locations — Headquarters, Offices, and Production Units
            </p>
            <GlobalNetworkMap />
          </div>
        </div>
      </div> */}

    </div>
  );
}
