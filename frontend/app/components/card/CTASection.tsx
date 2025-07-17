// CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#1e3a8a] text-white py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/80 backdrop-blur-sm z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Whether it's a sports complex or a commercial venture, Divinam
          Structuray delivers quality tensile solutions tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1e3a8a] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
