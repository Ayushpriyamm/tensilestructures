'use client'
import CTASection from "../components/card/CTASection";
import HeroCard from "../components/card/HeroCard";
import ServiceCard from "../components/card/ServicesCard";


const services = [
  {
    title: "Designing",
    description: "Architectural tensile designs that balance creativity and constructability using cutting-edge software and expert analysis.",
    features: [
      "Form finding precision",
      "Finite Element Analysis (FEA)",
      "Custom patterning solutions",
      "Integrated rainwater analysis"
    ],
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop&crop=faces",
    icon: "🖌️"
  },
  {
    title: "Engineering",
    description: "Robust structural engineering tailored for tensile architecture, built to endure extreme wind, snow, and dynamic forces.",
    features: [
      "Wind & snow load resistance",
      "Advanced structural modeling",
      "Fabric performance optimization",
      "Code-compliant safety standards"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661963236181-9eb0c8d766e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
    icon: "📐"
  },
  {
    title: "Application",
    description: "Expert on-site installation of tensile structures in complex environments across the globe, ensuring safety and precision.",
    features: [
      "Confined space installations",
      "Multi-crane lift coordination",
      "Global deployment capability",
      "Safe handover procedures"
    ],
    image: "https://media.istockphoto.com/id/473683922/photo/civil-engineers-looking-at-blueprints.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSPuQ3vCwKWQvuWe8a_TeHAkjnSqpESwdmW-rQ08UN4=",
    icon: "🏗️"
  }
];



export default function ServicesPage() {

  return (
    <div className="min-h-screen">

      <HeroCard
        heading="Our Services"
        subheading=" We are a leading tensile structure design and engineering company committed to innovation and durability."
        bgImg="/images/t5.png"
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
