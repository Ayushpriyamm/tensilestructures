"use client";

import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { label } from "framer-motion/client";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="white"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    // { label: "Partners", href: "/partners" },
    // { label: "Awards & Certificates", href: "/awards" },
    // { label: "Clients", href: "/clients" },
  ];
  const navItemsMobile = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" }
    // { label: "Partners", href: "/partners" },
    // { label: "Awards & Certificates", href: "/awards" },
    // { label: "Clients", href: "/clients" },
  ];

  return (
    <Navbar className="w-full p-4 absolute top-0 left-0 z-50 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4">
        {/* Left: Mobile Toggle */}


        {/* Center: Logo */}
        <Link href="/">
          <NavbarBrand className="flex items-center">

            <img src="/Logo.png" alt="Brand Logo" className="w-20 " />
            <p className="font-bold hidden sm:block text-white">
              DIVINAM STRUCTURAY
            </p>
            <p className="font-bold text-sm block sm:hidden text-white text-center">DIVINAM STRUCTURAY</p>
          </NavbarBrand>
        </Link>

        {/* Right: Desktop Links */}
        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          {navItems.map(({ label, href }) => (
            <NavbarItem key={label}>
              <Link color="foreground" className="text-white hover:text-white/70 hover:border-b-4 border-blue-900 transition duration-200 px-2" href={href}>
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Contact Button */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" className="text-white hover:text-white/70 hover:border-b-4 border-blue-900 hidden sm:block" href="/contact" variant="flat">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>

        <div className="sm:hidden ">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <AlignJustify className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (same content as desktop) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white px-4 py-4 space-y-2 absolute top-full left-0 w-full shadow-md z-50  right-0"
          >
            {navItemsMobile.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block text-blue-900 border-b-1 font-medium py-1"
                onClick={() => setIsMenuOpen(false)} // close menu on click
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
