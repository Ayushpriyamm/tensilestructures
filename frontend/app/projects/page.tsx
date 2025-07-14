'use client';

import HeroCard from '../components/card/HeroCard';
import { useState } from 'react';
import { Card, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from "@/app/lib/projectData";
import { categories } from '@/app/lib/projectData';

const MotionCard = motion(Card);
const MotionButton = motion(Button);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HeroCard
        bgImg="/images/t1.png"
        heading="Our Projects"
        subheading="Get in touch with our expert team to explore durable, innovative tensile structure solutions tailored to your vision."
      />

      {/* Filter Buttons */}
      <section className="py-8 sticky top-0 z-50 backdrop-blur-md  shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <MotionButton
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`rounded-lg text-sm font-medium px-4 py-2 border ${filter === category
                ? 'bg-[#4169e1] text-white'
                : 'border-black text-black hover:bg-[#4169e1] hover:text-white'
                }`}
              variant="ghost"
            >
              {category}
            </MotionButton>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <MotionCard
              key={index}
              className="group rounded-xl overflow-hidden shadow-md bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
                  {project.year}
                </div>
                {/* <div className="absolute bottom-3 left-3 bg-white text-blue-800 px-3 py-1 text-xs rounded-full shadow">
                  {project.size}
                </div> */}
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs bg-blue-100 text-blue-700 w-fit px-2 py-1 rounded-full">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </p>
                <p className="text-sm text-gray-600">{project.description}</p>
                <Link href={`/projects/${project.slug}`}>
                  <Button className="w-full rounded-lg bg-[#4169e1] text-white text-lg px-4 py-2 hover:opacity-85 shadow-lg cursor-pointer">
                    View Details
                  </Button>
                </Link>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>
    </div>
  );
}
