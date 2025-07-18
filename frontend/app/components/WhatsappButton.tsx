import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsappButton() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => setShowPopup(true), 1000); // Show after 1s
        const hideTimer = setTimeout(() => setShowPopup(false), 6000); // Hide after 6s
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col gap-2">
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm"
                    >
                        💬 Send us a message
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href="https://wa.me/919811600501"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="w-16 h-16 rounded-full"
                />
            </a>
        </div>
    );
}
