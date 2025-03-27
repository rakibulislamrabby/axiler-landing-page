"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { FiShield, FiCheckCircle, FiCloud } from "react-icons/fi";
import {
  CloudComplianceAuditsSVG,
  CloudSecurityAssessmentsSVG,
  CloudSecurityConsultingSVG,
  CloudSecurityfireSuiteSVG,
  CloudSecuritySuiteSVG,
  CostOptimizationSVG,
  LogAnalyzerSVG,
  ManagedDetectionAndResponseSVG,
  MeghEyeASMSVG,
  MeghOpsFirewallSVG,
  SecurityMonitoringandIncidentResponseSVG,
  SecurityTrainingandAwarenessSVG,
  VAPTSVG,
} from "../../../../public/assets/svgs/svg-exports";
const navLinks = [
  { id: 1, href: "/use-case", label: "Use Case", hasDropdown: true },
  { id: 2, href: "/pricing", label: "Pricing" },
  { id: 3, href: "/about", label: "About Us" },
  { id: 4, href: "/contact", label: "Contact Us" },
];

const dropdownItems = [
  {
    id: 1,
    href: "/use-case/website-security",
    label: "Website Security",
    icon: <CloudComplianceAuditsSVG className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 2,
    href: "/use-case/compliance",
    label: "Complete Compliance",
    icon: < LogAnalyzerSVG className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 3,
    href: "/use-case/cloud-security",
    label: "Cloud Security",
    icon: <CloudSecuritySuiteSVG className="w-5 h-5 text-gray-500" />,
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null); // <-- Fix applied here
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 px-6 lg:px-0  z-30 transition-all ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="lg:container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/Axiler-Logo-use-Light.png"
            alt="Axiler Logo"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                ref={dropdownRef}
              >
                <button className="flex items-center gap-1 transition-all hover:text-gray-900">
                  {link.label}
                  <AiOutlineDown
                    size={14}
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 w-64 bg-white shadow-lg rounded-xl py-3 "
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="flex items-center px-4 py-2 my-1 text-gray-700 hover:bg-gray-100"
                        >
                          <span className="mr-2 text-primary font-semibold">
                            {item.icon}
                          </span>
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.id}
                href={link.href}
                className="relative group transition-all hover:text-gray-900"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Desktop Get Trial Button */}
        <Link href="/trial">
          <button className="hidden lg:block border border-gray-400 rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:bg-gray-800">
            Get Trial
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-40 p-6 flex flex-col space-y-6 lg:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col items-center text-center space-y-4 text-gray-800 font-medium">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.id} className="w-full">
                      <button
                        onClick={() =>
                          setOpenDropdownId(
                            openDropdownId === link.id ? null : link.id
                          )
                        }
                        className="w-full flex justify-center items-center gap-2 hover:text-gray-900"
                      >
                        <span>{link.label}</span>
                        <AiOutlineDown
                          className={`transition-transform ${
                            openDropdownId === link.id
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdownId === link.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-2 space-y-2"
                          >
                            {dropdownItems.map((item) => (
                              <Link
                                key={item.id}
                                href={item.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdownId(null);
                                }}
                                className="block text-sm text-gray-600 hover:text-gray-800"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile Get Trial Button */}
              <div className="mt-auto text-center">
                <button className="border border-gray-400 rounded-full px-6 py-2 bg-black text-white font-semibold transition hover:bg-gray-800">
                  Get Trial
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
