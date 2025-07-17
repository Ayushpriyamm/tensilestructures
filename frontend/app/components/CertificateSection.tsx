// CertificatesSection.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const certificates = [
    '/cert/cert1.jpeg',
    '/cert/cert2.jpeg',
    '/cert/cert3.jpeg',
    '/cert/cert4.jpeg',
    '/cert/cert5.jpeg',
    '/cert/cert6.jpeg',
    '/cert/cert7.jpeg',
    '/cert/cert8.jpeg',
]

const CertificatesSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section id="certificates" className="bg-[#f9fafb] py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Certificates & Awards
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certificates.map((src, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage(src)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="relative w-full h-60 group-hover:opacity-90 transition">
                                <Image
                                    src={src}
                                    alt={`Certificate ${index + 1}`}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm  flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-auto p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 text-gray-700 hover:text-red-500"
                            >
                                <X size={28} />
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Full View Certificate"
                                width={800}
                                height={1000}
                                className="mx-auto max-h-[80vh] w-auto object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default CertificatesSection
