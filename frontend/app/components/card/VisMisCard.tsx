'use client'
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import React from "react";

export interface VisMisInterface {
    logo: React.ReactNode,
    title: string,
    description: string
}

export default function VisMisCard({ logo, title, description }: VisMisInterface) {
    const MotionCard = motion(Card);
    return (
        <MotionCard
            className="py-4 px-2 rounded-2xl shadow-xl bg-gradient-to-br from-[#f5f5f4] to-white border border-[#e5e5e5] 
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

            <CardBody className="text-2xl font-bold flex flex-col space-y-4">
                <div className="rounded-xl p-4 bg-emerald-500 w-max">
                    {logo}
                </div>
                <h1>{title}</h1>
            </CardBody>
            <CardFooter>
                {description}
            </CardFooter>

        </MotionCard>
    )
}