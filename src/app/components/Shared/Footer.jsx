"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#4B52FF] text-white py-12 relative z-10">
      <div className="md:container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:pb-[70px] text-center md:text-left">
          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold">
            Cybersecurity, at the
            <br /> speed of simplicity
          </h2>

          {/* Contact Info */}
          <div className="mt-6 md:mt-0 space-y-3">
            <div className="flex items-center justify-start md:justify-start space-x-2">
              <GrLocation
                className="bg-white w-8 h-8 text-primary border border-primary rounded-full flex items-center justify-center p-1"
                size={20}
              />
              <span>Singapore - HQ, USA, Bangladesh</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MdOutlineEmail
                className="bg-white w-8 h-8 text-primary border border-primary rounded-full flex items-center justify-center p-1"
                size={20}
              />
              <span>reachus@axiler.com</span>
            </div>
          </div>
        </div>

        {/* Logo & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-center">
          <Image
            src="/assets/logo/Axiler-Logo-use-dark.png"
            alt="Axiler Logo"
            width={120}
            height={100}
          />

          <nav className="flex-1 flex justify-center space-x-6 text-sm mt-6 md:mt-0">
            <Link href="/use-case/website-security" className="hover:underline">
              Overview
            </Link>
            <Link href="/pricing" className="hover:underline">
              Pricing
            </Link>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
            <Link href="/about" className="hover:underline">
              About us
            </Link>
          </nav>

          <div className="flex justify-center space-x-4 mt-6 md:mt-0">
            <Link
              href="https://www.facebook.com/people/Axiler/61570381045035/"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/axiler"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white opacity-50 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-center">
          <p>© All Rights Reserved by Axiler</p>
          <div className="flex justify-center space-x-6 mt-3 md:mt-0">
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
