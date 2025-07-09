import { Card, CardBody, CardFooter } from "@heroui/react";
import { motion } from "framer-motion";
import React from "react";

interface ValuesInterface {
    logo: React.ReactNode,
    title: string,
    description: string
}
export default function Values({ logo, title, description }: ValuesInterface) {
     const MotionCard = motion(Card);
    return (
        <MotionCard className="bg-gradient-to-br shadow-2xl from-[#f5f5f4] to-white opacity-80  rounded-2xl hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)]
                 "
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
            viewport={{ once: false }}>
            <CardBody>
                <div className="w-max p-2 space-y-2">{logo}</div>
                <div className="text-lg sm:text-2xl font-bold">{title}</div>
            </CardBody>
            <CardFooter>
                <h1 className="text-gray-600">{description}</h1>
            </CardFooter>
        </MotionCard>
    )
}