// IndustriesSection.tsx
'use client'

import { motion } from 'framer-motion'
import {
  Dumbbell,
  Store,
  Hotel,
  School,
  Landmark,
  Train,
  Factory,
  CalendarCheck,
} from 'lucide-react'

const industries = [
  { title: 'Sports & Recreation', icon: Dumbbell },
  { title: 'Retail & Commercial', icon: Store },
  { title: 'Hospitality & Tourism', icon: Hotel },
  { title: 'Schools & Universities', icon: School },
  { title: 'Government & Local Council', icon: Landmark },
  { title: 'Transport & Infrastructure', icon: Train },
  { title: 'Mining, Industrial & Agriculture', icon: Factory },
  { title: 'Event Venues & Exhibition', icon: CalendarCheck },
]

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Shade Structures for All Industries
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                className="bg-[#f5f9ff] rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6 group hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-[#1e3a8a]/10 rounded-full p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-[#1e3a8a] w-10 h-10" />
                </div>
                <h3 className="text-[#1e3a8a] text-lg font-semibold">
                  {industry.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
