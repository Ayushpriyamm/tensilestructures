'use client'
import { Card } from "@heroui/react";
import HeroCard from "../components/card/HeroCard";
import QuoteForm from "../components/QuoteForm";
import WhatsappButton from "../components/WhatsappButton";

const contactInfo = [
  {
    title: "Headquarters",
    details: ["Lotus Villas - DLF Phase 4, Gurugram, Hamilton Ct Rd, Sector 28, DLF Phase IV, Gurugram, Haryana 122002"],
    icon: "📍"
  },
  {
    title: "Phone",
    details: ["+91 9811600501"],
    icon: "📞"
  },
  {
    title: "Email",
    details: ["umangsethi15@gmail.com"],
    icon: "✉️"
  },
  {
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"],
    icon: "🕐"
  }
];


export default function ContactPgae() {
  return (
    <div className=" min-h-screen">
      <HeroCard
        bgImg='/images/t12.webp'
        heading="Contact Us"
        subheading="Get in touch with our expert team to explore durable, innovative tensile structure solutions tailored to your vision."
      />

      <div className="main div flex flex-col sm:flex-row justify-center gap-4 py-10 px-5 items-center text-blue-900" >
        <div className="sm:w-3/4">
          <QuoteForm />
        </div>
        <div className=" flex flex-col">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white shadow-xl rounded-lg">
                <div className="p-0">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-tensile-blue mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-tensile-gray text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <WhatsappButton/>
    </div>


  );
}
