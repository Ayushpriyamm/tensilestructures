"use client";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Link from "next/link";
import GlobalNetworkMap from "./components/GlobalNetworkMap";
import LearnMore from "./components/card/LearMoreCard";
import AnimatedCounter from "./components/counter/AnimatedCounter";
import TestimonialCard from "./components/card/TestimonialCard";
import { Button } from "@heroui/react";
import CTASection from "./components/card/CTASection";
import PatronsCarousel from "./components/carousel/PatronCarousel"
import { motion } from 'framer-motion'

export default function Home() {
  const services = [
    {
      title: "Stadium Roofs",
      description: "Large-span tensile roofing systems for sports venues and entertainment facilities.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Car Parking Shades",
      description: "Durable and weather-resistant parking structures with modern design.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Walkway Covers",
      description: "Elegant pedestrian protection systems for urban environments.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop&crop=faces"
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
        className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 text-center bg-[#f5f5f4] dark:bg-[#0a0a0a]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div>
          <AnimatedCounter end={50} suffix="+" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
        </div>
        <div>
          <AnimatedCounter end={20} suffix="+" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
        </div>
        <div>
          <AnimatedCounter end={99} suffix="%" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
        </div>
        <div>
          <AnimatedCounter end={10} suffix="+" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">States Served</p>
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
        viewport={{ once: false, amount: 0.5 }}
      >
        <CTASection />
      </motion.div>

      {/* Patrons Carousel with animation */}
      <motion.div
        className="py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <PatronsCarousel />
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
