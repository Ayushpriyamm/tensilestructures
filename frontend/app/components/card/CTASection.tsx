"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Card } from "@heroui/react";

export default function CTASection() {
    return (
        <section
            className="relative py-24 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1920&h=600&fit=crop&crop=faces')",
            }}
        >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

            {/* Animated glass card */}
            <motion.div
                className="relative z-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 60, rotateX: -6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ scale: 1.015, rotateY: 2, rotateX: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false }}
            >
                <Card className="rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md p-10 text-center m-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ready to Build Something <span className="text-tensile-copper">Amazing</span>?
                    </h2>

                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let’s discuss your tensile structure project and bring your vision to life.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button className="bg-tensile-copper text-white text-lg px-8 py-4 hover:bg-tensile-copper-light shadow-lg cursor-pointer">
                                Start Your Project
                            </Button>
                        </Link>

                        <Link href="/projects">
                            <Button className="border border-white text-white hover:bg-white/10 text-lg px-8 py-4 cursor-pointer">
                                View Portfolio
                            </Button>
                        </Link>
                    </div>
                </Card>
            </motion.div>
        </section>
    );
}
