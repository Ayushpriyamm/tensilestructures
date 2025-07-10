"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/images/tensile1.jpg",
    title: "Innovative Tensile Structures",
    description:
      "Designing elegant and durable fabric architecture for every space.",
  },
  {
    id: 2,
    image: "/images/tensile7.jpg",
    title: "Functional & Beautiful",
    description:
      "Blending form and function with our custom tensile solutions.",
  },
  {
    id: 3,
    image: "/images/tensile4.jpg",
    title: "Built to Last",
    description:
      "Weather-resistant, low-maintenance structures that stand strong.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Responsive background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <div className="text-center max-w-3xl text-white">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-sm">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
