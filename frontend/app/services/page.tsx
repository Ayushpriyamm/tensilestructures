'use client'
import CTASection from "../components/card/CTASection";
import HeroCard from "../components/card/HeroCard";
import ServiceCard from "../components/card/ServicesCard";


const services = [
  {
    title: "Stadium Roofs",
    description: "Large-span tensile roofing systems designed for sports venues, entertainment facilities, and arenas. Our stadium roofs combine structural integrity with aesthetic appeal.",
    features: ["Weather-resistant materials", "Large span capabilities", "Acoustic optimization", "Energy efficiency"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=faces",
    icon: "🏟️"
  },
  {
    title: "Car Parking Shades",
    description: "Durable and cost-effective parking shade structures that provide protection from sun and weather while enhancing the aesthetic appeal of parking areas.",
    features: ["UV protection", "Weather durability", "Easy maintenance", "Custom designs"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop&crop=faces",
    icon: "🚗"
  },
  {
    title: "Walkway Covers",
    description: "Elegant pedestrian protection systems that seamlessly integrate with urban environments while providing weather protection and architectural interest.",
    features: ["Pedestrian safety", "Weather protection", "Architectural integration", "Low maintenance"],
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop&crop=faces",
    icon: "🚶"
  },
  {
    title: "Architectural Membranes",
    description: "Custom membrane structures for unique architectural applications, including facades, canopies, and artistic installations that push design boundaries.",
    features: ["Custom fabrication", "Artistic freedom", "Structural innovation", "Material variety"],
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop&crop=faces",
    icon: "🎨"
  },
  {
    title: "Amphitheater Covers",
    description: "Specialized acoustic and weather protection solutions for outdoor performance venues, combining superior sound quality with weather resistance.",
    features: ["Acoustic engineering", "Weather protection", "Audience comfort", "Stage integration"],
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=600&h=400&fit=crop&crop=faces",
    icon: "🎭"
  },
  {
    title: "Swimming Pool Enclosures",
    description: "Retractable and permanent pool covers that extend swimming seasons while reducing maintenance costs and improving safety.",
    features: ["Season extension", "Safety enhancement", "Energy savings", "Retractable options"],
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop&crop=faces",
    icon: "🏊"
  }
];


export default function ServicesPage() {

  return (
    <div className="min-h-screen">

      <HeroCard
        heading="Our Services"
        subheading=" We are a leading tensile structure design and engineering company committed to innovation and durability."
        bgImg="/images/tensile4.jpg"
      />


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tensile-blue mb-4">What We Offer</h2>
            <p className="text-xl text-tensile-gray max-w-3xl mx-auto">
              From concept to completion, we deliver innovative tensile structures that combine form, function, and durability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

        </div>
      </section >

      <div
        className="py-10"
      >
        <CTASection />
      </div>
    </div>


  );
}
