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
import RecentWorkCard from "./components/card/RecentWorkCard";
import WhatsappButton from "./components/WhatsappButton"
import {
  Dumbbell,
  Store,
  Hotel,
  School,
  Landmark,
  Train,
  Factory,
  CalendarCheck,
  MoveRight
} from "lucide-react";
import { Button } from "@heroui/react";
import CertificatesSection from "./components/CertificateSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustriesSection from "./components/IndustriesSection";



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

  const RecentWorks = [

    {
      image: "/recentWorks/p1.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p2.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p3.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p4.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p5.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p6.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p7.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p8.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p9.jpeg",
      title: ""
    },
    {
      image: "/recentWorks/p10.jpeg",
      title: ""
    }


  ];


  const industries = [
    {
      title: "Sports & Recreation",
      icon: Dumbbell,
    },
    {
      title: "Retail & Commercial",
      icon: Store,
    },
    {
      title: "Hospitality & Tourism",
      icon: Hotel,
    },
    {
      title: "Schools & Universities",
      icon: School,
    },
    {
      title: "Government & Local Council",
      icon: Landmark,
    },
    {
      title: "Transport & Infrastructure",
      icon: Train,
    },
    {
      title: "Mining, Industrial & Agriculture",
      icon: Factory,
    },
    {
      title: "Event Venues & Exhibition",
      icon: CalendarCheck,
    },
  ];

  


  return (
    <div className="flex flex-col  justify-center  space-y-2">
      <HeroCarousel></HeroCarousel>

      {/* About Section*/}
      {/* <div className="flex flex-col py-10 px-4 sm:px-6 lg:px-8 justify-center space-y-4 ">
        <h1 className="text-center text-4xl font-bold bg-[#4169e1] p-2 text-white">About Divinam Structuray</h1>
        <h3 className="text-center text-2xl font-medium " >Innovative Tensile Membrane Structures | Shade Systems | Custom Architectural Designs</h3>
        <div className="flex flex-col sm:flex-row p-4 gap-4 sm:gap-0">
          <div className="w-full sm:w-[60%]">
            <p>
              Divinam Structuray is a forward-thinking leader in the field of tensile architecture,
              offering end-to-end solutions in custom-designed fabric structures.
              Our portfolio includes premium tensile roofing systems,
              modular shade canopies, architectural facades, entryway
              covers, outdoor seating shelters, car parking shades, and
              specialized commercial tensile installations for diverse environments.
            </p>
            <br />
            <p>
              We specialize in the design, engineering, fabrication, and installation of lightweight tensile membrane structures using advanced architectural fabrics
              such as <span className="font-bold">PVC, PTFE, ETFE, and HDPE Shade Mesh</span> . Each project is executed with a focus on durability, functionality,
              and a signature modern design that enhances both aesthetics and performance.
            </p>
          </div>
          <div className="relative w-full sm:w-[40%] h-36 sm:h-auto mx-auto ">
            <Image
              src="/images/circle1.png"
              alt="Decorative circle"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={false}
            />
          </div>
        </div>


      </div> */}

      {/* About Section*/}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/t14.jpg" // Replace with your about image
              alt="About Divinam Structuray"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              About Divinam Structuray
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Divinam Structuray is a forward-thinking leader in the field of tensile architecture, offering end-to-end solutions in custom-designed fabric structures. Our portfolio includes premium tensile roofing systems, modular shade canopies, architectural facades, entryway covers, outdoor seating shelters, car parking shades, and specialized commercial tensile installations for diverse environments.
            </p>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              With a commitment to quality, innovation, and client satisfaction, we aim to redefine spaces with structures that stand the test of time.
            </p>
          </div>
        </div>
      </section>


      <WhyChooseSection />

      {/* Our Expertise Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white inline-block bg-[#4169e1] px-6 py-2 rounded-md shadow-md mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in creating innovative tensile structures that push the boundaries of architecture and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <LearnMore
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>


      {/* Analytics Counter Section */}
      <section className="bg-gradient-to-r from-[#3556c9] to-[#4169e1] py-14 px-4 sm:px-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            { end: 50, label: 'Projects Completed', suffix: '+' },
            { end: 20, label: 'Years Experience', suffix: '+' },
            { end: 99, label: 'Client Satisfaction', suffix: '%' },
            { end: 10, label: 'States Served', suffix: '+' }
          ].map(({ end, label, suffix }, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <AnimatedCounter end={end} suffix={suffix} />
              <p className="mt-2 text-base sm:text-lg font-medium text-white">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <IndustriesSection />
      <CertificatesSection />


      {/* Recent Works Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Most Trusted Tensile Shade & Weather Protection Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Divinam Structuray, we specialize in custom-designed tensile membrane structures that blend premium weather protection with modern design aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {RecentWorks.map((recentWork, index) => (
            <RecentWorkCard key={index} image={recentWork.image} title={recentWork.title} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
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


      {/* Patrons Carousel Section */}
      <section className="bg-gray-50 py-14">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <PatronsCarousel />
        </motion.div>
      </section>


      <CTASection />

      {/* Get A Quote Section */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/t14.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark Overlay */}
        </div>

        {/* Foreground Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center mx-auto z-10 text-center  backdrop-blur-md rounded-xl shadow-lg"
        >
          <QuoteForm />
        </motion.div>
      </section>



      {/* OUR SERVICES CONTENT */}
      {/* <div className=" py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tensile-blue mb-4 bg-[#4169e1] text-white p-2">Our Expertise</h2>
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
      </div> */}

      {/*Analytics Counter*/}
      {/* <motion.div
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
      </motion.div> */}


      {/* Testimonials Section */}
      {/* <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tensile-blue mb-4 bg-[#4169e1] text-white p-2">What Our Clients Say</h2>
            <p className="text-xl text-tensile-gray">Trusted by industry leaders worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} name={testimonial.name} company={testimonial.company} quote={testimonial.quote} rating={testimonial.rating} />
            ))}
          </div>
        </div>
      </section> */}

      {/*Recent works*/}
      {/* <section className="px-4 md:px-12 lg:px-24 py-10 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Most Trusted Tensile Shade & Weather Protection Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            At Divinam Structuray, we take pride in delivering a wide range of custom-designed tensile membrane structures
            crafted with architectural precision and high-performance materials.
            Our solutions combine modern design aesthetics with engineered functionality, ensuring ease of installation,
            long-lasting durability, and premium weather protection.
            <br /><br />
            We provide architectural shade and shelter solutions for a variety of environments — 
            from sporting arenas and school campuses to retail plazas, commercial complexes, 
            hospitality venues, industrial zones, and public infrastructure spaces. 
            Every project is a reflection of our commitment to quality, innovation, and seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 mx-auto">
          {RecentWorks.map((recentWork, index) => (
            <RecentWorkCard key={index} image={recentWork.image} title={recentWork.title} />
          ))}
        </div>
      </section> */}


      {/* <section className="flex flex-col sm:flex-row justify-center space-y-4 py-20 items-stretch">
        
        <div className="relative w-full sm:w-1/3 h-72 sm:h-auto rounded-xl overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/images/tensile8.png"
              alt="Card background"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={false}
            />
          </div>
        </div>

      
        <div className="w-full sm:w-2/3 px-2 flex flex-col justify-center ">
          <h2 className="text-3xl mx-auto sm:text-4xl font-bold text-gray-800 mb-4">
            Shade Structures For All Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            At Divinam Structuray, we design and deliver high-performance tensile fabric structures tailored to meet the unique needs of various industries. Whether it's stadiums, schools, or industrial facilities, our innovative solutions combine design excellence, weather resistance, and long-lasting durability.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
            {industries.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-xl shadow-xl p-6 flex flex-col items-center justify-center space-y-4 hover:shadow-2xl transition-all"
              >
                <item.icon className="h-12 w-12 text-blue-600" />
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <Link href="/services" className="flex justify-center p-4 my-4">
            <Button className="rounded-lg border border-white bg-blue-500 hover:opacity-85 text-white text-lg px-8 py-4 cursor-pointer">
              View Services
            </Button>
          </Link>
        </div>


      </section> */}


      {/* <section className="flex flex-col sm:flex-row-reverse justify-center space-y-4 py-10 items-stretch">
        
        <div className="relative w-full sm:w-1/3 h-72 sm:h-auto rounded-xl overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/images/t14.jpg"
              alt="Card background"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={false}
            />
          </div>
        </div>

        
        <div className="w-full sm:w-2/3 px-2 flex flex-col justify-center ">
          <h2 className="text-3xl mx-auto sm:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Divinam Structure?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            As a market leader in tensile membrane structures, Divinam Structure has been the trusted choice of architects and developers seeking modern, lightweight, and durable solutions. Our tensile fabric structures are engineered to withstand the toughest conditions while enhancing the architectural elegance of any development. With decades of industry expertise, we deliver fabric structures that are both functional and visually striking—perfect for any project.
          </p>

          <Link href="/about" className="flex justify-center">
            <Button className="rounded-lg border border-white bg-blue-500 hover:opacity-85 text-white text-lg p-4 sm:px-8 py-4 cursor-pointer">
              why choose Divinam Structuray <MoveRight />
            </Button>
          </Link>
        </div>


      </section> */}

      {/* CTA Section */}
      {/* <motion.div
        className="py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <CTASection />
      </motion.div> */}

      {/* Patrons Carousel with animation */}
      {/* <motion.div
        className="py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <PatronsCarousel />
      </motion.div> */}

      {/* <div className="">
        <CertificatesSection />
      </div> */}

      {/*  Get A Quote */}
      {/* <motion.div initial={{ opacity: 0, y: 60 }}
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
      </motion.div> */}


        <WhatsappButton/>
     

    </div>
  );
}
