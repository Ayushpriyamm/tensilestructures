// WhyChooseSection.tsx
'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const features = [
  "40+ Years of Engineering Excellence",
  "Trusted by Leading Architects & Developers",
  "Designed for Harsh Indian Environments",
  "Aesthetic & Durable Structures",
  "Cutting-edge Fabric Technology",
  "Custom Solutions for Every Industry",
]

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="bg-[#f5f9ff] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Divinam Structuray?
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The market leader in tensile membrane structures, Divinam Structuray has been trusted by developers for decades. Our lightweight yet robust fabric designs enhance aesthetics while standing strong against time and weather.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircleIcon className="h-7 w-7 text-[#1e3a8a]" />
              <span className="text-gray-800 text-base font-medium">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
