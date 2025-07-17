import { Card, CardFooter, Image } from "@heroui/react";
import { motion } from "framer-motion";

interface RecentWorkCardInterFace {
    image: string;
    title: string;
}

export default function RecentWorkCard({ image, title }: RecentWorkCardInterFace) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="w-fit h-fit"
        >
            <Card
                isFooterBlurred
                radius="lg"
                className="relative border-none rounded-xl shadow-2xl sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] 
                   overflow-hidden transition-all duration-500 ease-in-out"
            >
                <Image
                    alt={title}
                    src={image}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out aspect-square"
                />

                <CardFooter
                    className="justify-center py-1 absolute bottom-1 w-[calc(100%_-_8px)] ml-1 z-10 
                     bg-black/40 text-white text-xs sm:text-sm backdrop-blur-md rounded-md 
                     transition-all duration-300"
                >
                    <p className="text-center">{title}</p>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
