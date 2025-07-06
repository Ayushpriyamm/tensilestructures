"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#f5f5f4] text-[#1e1e1e] border-t border-gray-300 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Tensile Structures</h2>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              Engineering elegance with fabric & steel. We design and build beautiful, durable tensile structures.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Overview */}
          <div>
            <h3 className="text-lg font-medium mb-3">What We Do</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Stadium Roofs</li>
              <li>Walkway Covers</li>
              <li>Parking Sheds</li>
              <li>Architectural Membranes</li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-medium mb-3">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-black transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5 3.657 9.127 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-black transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H17.2v-5.569c0-1.328-.025-3.039-1.852-3.039-1.854 0-2.137 1.446-2.137 2.939v5.669h-3.248V9h3.123v1.561h.045c.434-.82 1.494-1.685 3.074-1.685 3.29 0 3.897 2.165 3.897 4.981v6.595zM5.337 7.433a1.877 1.877 0 1 1 0-3.754 1.877 1.877 0 0 1 0 3.754zM6.963 20.452H3.711V9h3.252v11.452z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-black transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.16 9.16 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 4.13 12.94 12.94 0 0 1-9.4-4.77 4.52 4.52 0 0 0 1.39 6.04A4.48 4.48 0 0 1 2 9.71v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.05.08 4.52 4.52 0 0 0 4.22 3.13 9.05 9.05 0 0 1-5.61 1.94A9.45 9.45 0 0 1 1 20.54 12.78 12.78 0 0 0 7.29 22c8.8 0 13.62-7.28 13.62-13.6 0-.21 0-.42-.02-.63A9.7 9.7 0 0 0 23 3z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <Link href="/privacy" className="hover:underline hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline hover:text-black">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 TensileWorks. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Designed & Developed by{" "}
            <a
              href="https://www.instagram.com/pritech_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:underline"
            >
              Pritech Solutions
            </a>
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
