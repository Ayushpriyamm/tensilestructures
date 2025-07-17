'use client'

import { Card, CardHeader, CardBody, Image, CardFooter } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface LearnMoreInterface {
    title: string,
    description: string,
    image: string
}

const MotionCard = motion(Card);

export default function LearnMore({ title, description, image }: LearnMoreInterface) {
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
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                    src={image}
                    width={270}
                    height={180}
                />
            </CardBody>

            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-semibold text-xl text-[#1e1e1e] tracking-tight">
                    {title}
                </h4>
                <small className="text-[#666666] text-sm mt-1">{description}</small>
            </CardHeader>

            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <Link
                    href="/services"
                    className="text-[#1e3a8a] hover:text-tensile-copper-light font-medium inline-flex items-center group"
                >
                    Learn More
                    <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </CardFooter>
        </MotionCard>
    );
}
