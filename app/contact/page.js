"use client";
import React from "react";
import Contact from "@/components/Contact";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F0EFEA] text-[#0B3D2E]">
      {/* Header with back button */}
      <header className="sticky  poppins top-0 bg-[#F0EFEA]/95 backdrop-blur-lg z-50 border-b border-[#0B3D2E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 transition-all duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          
          <h1 className="text-lg font-bold">CHAD MATHEW</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="py-12 sm:py-16 lg:py-20">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;