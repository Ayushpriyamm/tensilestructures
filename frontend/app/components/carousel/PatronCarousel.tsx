"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const patrons = [
  {
    name: "ITC",
    logo: "images/ITC.svg", // make sure logos are in public/patrons/
  },
  {
    name: "Unitech",
    logo: "images/unitech.svg",
  },
  {
    name: "DLF",
    logo: "images/DLF.svg",
  },
  {
    name: "Wipro",
    logo: "images/wipro.svg",
  },
  {
    name: "Tulip Infratech",
    logo: "images/tulip.png",
  },
  {
    name: "M3M",
    logo: "images/m3m.png",
  },
  {
    name: "Azim Premji Foundations",
    logo: "images/azim.png",
  },
];

export default function PatronsCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mb-12">
          We’re proud to have collaborated with India’s most respected construction giants and infrastructure pioneers. Their continued trust reflects our commitment to engineering excellence, design innovation, and long-term value.
        </p>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {patrons.map((patron, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-100  rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center h-48">
                  <img
                    src={patron.logo}
                    alt={patron.name}
                    className="h-28 object-contain mb-4"
                  />
                  <p className="text-sm text-gray-700 font-medium text-center">{patron.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}