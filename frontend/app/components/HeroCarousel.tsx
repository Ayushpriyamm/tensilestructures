"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/t1.png",
    title: "Setting the Standard in Tensile Design",
    description:
      "Pioneering the future of architectural membranes with innovation, elegance, and precision.",
  },
  {
    id: 2,
    image: "/images/t2.png",
    title: "Where Engineering Meets Art",
    description:
      "Crafting expressive tensile forms that merge structural integrity with iconic design.",
  },
  {
    id: 3,
    image: "/images/t3.png",
    title: "Engineered to Endure",
    description:
      "All-weather performance and unmatched durability for every environment.",
  },
  {
    id: 4,
    image: "/images/t4.png",
    title: "Designing Landmarks, Not Just Structures",
    description:
      "Creating bold, recognizable silhouettes that define skylines and spaces.",
  },
  {
    id: 5,
    image: "/images/t5.png",
    title: "Global Expertise, Local Execution",
    description:
      "Delivering world-class tensile solutions—on time, on spec, and on budget.",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Background */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <div className="text-center max-w-3xl text-white">
                  {index === activeIndex && (
                    <>
                      <motion.h2
                        key={slide.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md"
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.p
                        key={slide.description}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-sm"
                      >
                        {slide.description}
                      </motion.p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
