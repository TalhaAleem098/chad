"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaFilm,
  FaCamera,
  FaUser,
  FaInstagram,
  FaEnvelope,
  FaCircle,
  FaHeart,
} from "react-icons/fa";
import { FaStar, FaUserAlt, FaGlobe, FaNetworkWired } from "react-icons/fa";
import { SiImdb } from "react-icons/si";
import FilmTV from "@/components/FilmTV";
import Media from "@/components/Media";
import Bio from "@/components/Bio";

const Page = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [pathname]);

  const navLinks = [
    { id: "home", label: "HOME", icon: FaHome },
    { id: "film-tv", label: "FILM & TV", icon: FaFilm },
    { id: "media", label: "MEDIA", icon: FaCamera },
    { id: "bio", label: "BIO", icon: FaUser },
    { id: "contact", label: "CONTACT", icon: FaEnvelope },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F0EFEA] text-[#0a2f23]">
      <nav className="fixed top-0 inset-x-0 bg-[#F0EFEA] backdrop-blur-lg z-50">
        <div className="hidden lg:flex max-w-7xl mx-auto px-3 h-12 items-center justify-center">
          <div className="flex items-center justify-between w-full">
            {navLinks.map((link) => {
              const isActive = link.id === "contact" ? pathname === "/contact" : activeSection === link.id;
              if (link.id === "contact") {
                return (
                  <Link
                    key={link.id}
                    href="/contact"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200`}
                  >
                    <FaCircle
                      className={`w-4 h-4 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
                    />
                    <span className="font-extrabold text-[1.5vw]">{link.label}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200`}
                >
                  <FaCircle
                    className={`w-4 h-4 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                  <span className="font-extrabold text-[1.5vw]">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="px-4 h-11 flex items-center justify-between">
            <span className="text-[12px] lg:text-[19px] font-bold">CHAD MATHEW</span>

            <button
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="relative flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 w-10 h-10"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute left-0 top-0 w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-1"
                    }`}
                />
                <span
                  className={`absolute left-0 top-2 w-5 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-3.5"
                    }`}
                />
              </div>
            </button>

          </div>

          <div
            ref={menuRef}
            className={`absolute top-full left-0 right-0 transition-all duration-300 transform ${isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <div className="bg-white/98 backdrop-blur-xl shadow-xl border-t border-gray-200">
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => {
                  const isActive = link.id === "contact" ? pathname === "/contact" : activeSection === link.id;
                  if (link.id === "contact") {
                    return (
                      <Link
                        key={link.id}
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive ? "bg-[#0B3D2E] text-white shadow-md" : "hover:bg-gray-100"}`}
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`flex px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive ? "bg-[#0B3D2E] text-white shadow-md" : "hover:bg-gray-100"}`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>


        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>

      <div className="fixed inset-x-0 top-10 flex items-start lg:items-center pt-10 lg:pt-20 justify-center h-[65vh] z-0 pointer-events-none">
        <h1 className="text-[42vw] lg:text-[38vw] font-druk-xcond text-center leading-none">
          CHAD MATHEW
        </h1>
      </div>

      <main className="relative z-10 bg-transparent">
        <section
          id="home"
          className="relative md:min-h-screen min-h-[60vh] flex items-center justify-center"
        >
          <div className="relative w-full flex justify-center">
            <div className="absolute -top-12 sm:-top-10 lg:-top-12">
              <Image
                src="/images/10.webp"
                alt="Model"
                width={800}
                height={1000}
                priority
                className="rounded-4xl shadow-lg object-cover w-[75vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] h-auto aspect-[5/8]"
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 40vw"
              />

            </div>
          </div>
        </section>

        <section className="min-h-[20vh] bg-[#F0EFEA] flex items-center justify-center">
        </section>

        <section
          id="film-tv"
          className="min-h-screen bg-[#F0EFEA] flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20"
        >
          <FilmTV />
        </section>

        <section
          id="media"
          className="min-h-screen bg-[#F0EFEA] flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20"
        >
          <Media />
        </section>

        <section
          id="bio"
          className="min-h-screen bg-[#F0EFEA] flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20"
        >
          <Bio />
        </section>

        {/* <div className="bg-[#F0EFEA] flex justify-center">< FaCircle size={20} /></div> */}

        {/* <section
          id="contact"
          className="min-h-[60vh] poppins flex items-center justify-center bg-[#F0EFEA] py-12 sm:py-16 lg:py-20"
        >

          <div className="text-center w-full mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Stay Connected</h2>
            <div className=" mx-auto">
              <form className="flex w-full flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-2 border-[#0B3D2E]/20 rounded-full focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm text-[#0B3D2E] placeholder-[#0B3D2E]/60"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0B3D2E] text-white rounded-full font-semibold hover:bg-[#0B3D2E]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

            </div>

          </div>
        </section> */}
      </main>

      <footer className="bg-[#F0EFEA] poppins text-[#0B3D2E] border-t border-[#0B3D2E]/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left text-sm sm:text-base">
            <span>© 2025 Chad Mathew. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href="https://www.starnow.com/u/chadmathew/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StarNow"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#0B3D2E]/20 text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-colors shadow-sm"
            >
              <FaStar className="w-5 h-5" />
            </a>

            <a
              href="https://www.backstage.com/u/itschadmathew/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Backstage"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#0B3D2E]/20 text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-colors shadow-sm"
            >
              <FaUserAlt className="w-5 h-5" />
            </a>

            <a
              href="https://casting.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CastingApp"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#0B3D2E]/20 text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-colors shadow-sm"
            >
              <FaGlobe className="w-5 h-5" />
            </a>

            <a
              href="https://www.castingnetworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CastingNetworks"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#0B3D2E]/20 text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-colors shadow-sm"
            >
              <FaNetworkWired className="w-5 h-5" />
            </a>

            <a
              href="https://www.imdb.com/name/nm9102781/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IMDB"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#0B3D2E]/20 text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-colors shadow-sm"
            >
              <SiImdb className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#0B3D2E]/60 mb-1">
            Made with <FaHeart className="inline w-3 h-3 text-red-500 mx-1" /> by{" "}
            <a
              href="https://dev-mateen-rmas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0B3D2E] hover:text-[#0B3D2E]/70 transition-colors duration-300"
            >
              Mateen Ahmad
            </a>
          </p>
        </div>
      </footer>


    </div>
  );
};

export default Page;