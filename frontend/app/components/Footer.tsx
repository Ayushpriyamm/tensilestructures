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
      className="bg-[#4169e1] text-[#f5f5f4] border-t border-gray-300 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {/* Brand Info */}
          <div>
            <img src="/Logo.png" alt="Brand Logo" className=" " />
            <h2 className="text-2xl font-semibold mb-3">DIVINAM STRUCTURAY</h2>
            <p className="text-sm text-[#f5f5f4] max-w-xs leading-relaxed">
              Engineering elegance with fabric & steel. We design and build beautiful, durable tensile structures.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-[#f5f5f4]">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Overview */}
          <div>
            <h3 className="text-lg font-medium mb-3 ">What We Do</h3>
            <ul className="space-y-2 text-sm text-[#f5f5f4]">
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
              <a href="https://www.facebook.com/people/Divinam-Structuray/100077207922072/?_rdr" aria-label="Facebook" className="text-[#f5f5f4] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5 3.657 9.127 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-[#f5f5f4] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H17.2v-5.569c0-1.328-.025-3.039-1.852-3.039-1.854 0-2.137 1.446-2.137 2.939v5.669h-3.248V9h3.123v1.561h.045c.434-.82 1.494-1.685 3.074-1.685 3.29 0 3.897 2.165 3.897 4.981v6.595zM5.337 7.433a1.877 1.877 0 1 1 0-3.754 1.877 1.877 0 0 1 0 3.754zM6.963 20.452H3.711V9h3.252v11.452z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="text-[#f5f5f4] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.16 9.16 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 4.13 12.94 12.94 0 0 1-9.4-4.77 4.52 4.52 0 0 0 1.39 6.04A4.48 4.48 0 0 1 2 9.71v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.05.08 4.52 4.52 0 0 0 4.22 3.13 9.05 9.05 0 0 1-5.61 1.94A9.45 9.45 0 0 1 1 20.54 12.78 12.78 0 0 0 7.29 22c8.8 0 13.62-7.28 13.62-13.6 0-.21 0-.42-.02-.63A9.7 9.7 0 0 0 23 3z" />
                </svg>
              </a>

              {/* ✅ Instagram */}
              <a href="https://www.instagram.com/divinamstructuray/" aria-label="Instagram" className="text-[#f5f5f4] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.248 2.417.415.58.21.996.46 1.435.898.44.44.69.856.898 1.435.167.457.36 1.246.415 2.417.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.248 1.96-.415 2.417-.21.58-.46.996-.898 1.435-.44.44-.856.69-1.435.898-.457.167-1.246.36-2.417.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.248-2.417-.415a3.872 3.872 0 0 1-1.435-.898 3.872 3.872 0 0 1-.898-1.435c-.167-.457-.36-1.246-.415-2.417-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.056-1.17.248-1.96.415-2.417.21-.58.46-.996.898-1.435.44-.44.856-.69 1.435-.898.457-.167 1.246-.36 2.417-.415 1.266-.058 1.65-.07 4.85-.07Zm0 1.8c-3.14 0-3.507.012-4.742.068-.948.043-1.462.2-1.8.333a2.072 2.072 0 0 0-.742.482 2.072 2.072 0 0 0-.482.742c-.133.338-.29.852-.333 1.8-.056 1.235-.068 1.602-.068 4.742s.012 3.507.068 4.742c.043.948.2 1.462.333 1.8.114.287.273.54.482.742.202.202.455.368.742.482.338.133.852.29 1.8.333 1.235.056 1.602.068 4.742.068s3.507-.012 4.742-.068c.948-.043 1.462-.2 1.8-.333.287-.114.54-.273.742-.482.202-.202.368-.455.482-.742.133-.338.29-.852.333-1.8.056-1.235.068-1.602.068-4.742s-.012-3.507-.068-4.742c-.043-.948-.2-1.462-.333-1.8a2.072 2.072 0 0 0-.482-.742 2.072 2.072 0 0 0-.742-.482c-.338-.133-.852-.29-1.8-.333-1.235-.056-1.602-.068-4.742-.068ZM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324Zm0 1.8a4.362 4.362 0 1 0 0 8.724 4.362 4.362 0 0 0 0-8.724Zm5.738-.978a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-600">
{/*               <Link href="/privacy" className="hover:underline text-[#f5f5f4] hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline text-[#f5f5f4] hover:text-white">
                Terms of Service
              </Link> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-sm text-[#f5f5f4] ">
            &copy; 2025 DIVINAM STRUCTURAY. All rights reserved.
          </p>
          <p className="text-sm text-[#f5f5f4]  mt-2">
            Designed & Developed by{" "}
            <a
              href="https://www.instagram.com/pritech_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              Pritech Solutions
            </a>
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
