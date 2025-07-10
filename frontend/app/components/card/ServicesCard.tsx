"use client";

import { Card } from "@heroui/react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({ service, index }: { service: any; index: number }) {
    const MotionCard = motion(Card);
    return (
        <MotionCard
            key={index}
            className="bg-gradient-to-br shadow-2xl from-[#f5f5f4] to-white opacity-80  rounded-2xl hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)] group  transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 40, rotateX: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{
                scale: 1.015,
                rotateX: 1,
                rotateY: 2,
                transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false }}
        >
            {/* Image section */}
            <div className="relative overflow-hidden rounded-t-lg">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  transition-all duration-300" />

            </div>

            {/* Content section */}
            <div className="p-6">
                <h3 className="text-xl font-semibold  mb-3">{service.title}</h3>
                <p className="text-[#64748b] mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                    {service.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[#64748b]">
                            <svg className="w-4 h-4 text-amber-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                <Button className="w-full rounded-md bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 px-8 
                          shadow-md hover:shadow-xl hover:opacity-95 cursor-pointer transition-all duration-300">
                    <Link href="/contact">Get Quote</Link>
                </Button>
            </div>
        </MotionCard>
    );
}
