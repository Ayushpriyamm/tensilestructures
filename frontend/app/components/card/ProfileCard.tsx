import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import React from "react";

interface ProfileCardInterface{
    image:string,
    name:string,
    role:string,
    bio:string
}

export default function ProfileCard({image,name,role,bio}:ProfileCardInterface) {
    const MotionCard = motion(Card);
    return (
        <MotionCard
            className="bg-gradient-to-br shadow-2xl from-[#f5f5f4] to-white opacity-80  rounded-2xl hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)] px-8 py-4 sm:px-16 sm:py-8"
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
        >            <div className="w-32 sm:w-40 h-32 sm:h-40 bg-gray-500 rounded-full overflow-hidden mx-auto">
                <img src={image} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="text-center">
               <h3 className="text-xl font-semibold text-tensile-blue mb-2">{name}</h3>
                  <p className=" text-lg font-bold  mb-3">{role}</p>
                  <p className="">{bio}</p>
            </div>
        </MotionCard>
    )
}