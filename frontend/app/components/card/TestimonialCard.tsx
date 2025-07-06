'use client'
import { Card, CardHeader, CardBody, Image, CardFooter } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface LearnMoreInterface {
    name: string,
    company: string,
    quote: string,
    rating: any
}


const MotionCard = motion(Card);

export default function TestimonialCard({ name, company, quote, rating }: LearnMoreInterface) {
    return (
        <MotionCard
            isFooterBlurred
            className="py-4 px-2 rounded-2xl shadow-xl bg-gradient-to-br from-[#f5f5f4] to-white border border-[#e5e5e5] backdrop-blur-sm
                 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)] transition-shadow duration-300
                 transform will-change-transform"
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
            <CardBody className="overflow-visible py-2 px-4">
                <div className="flex mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
            </CardBody>

            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-semibold text-xl text-[#1e1e1e] tracking-tight">
                    {name}
                </h4>
                <small className="text-[#666666] text-sm mt-1">{company}</small>
            </CardHeader>

            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <small className="text-[#666666] text-sm mt-1">{quote}</small>
            </CardFooter>
        </MotionCard>
    );
}
