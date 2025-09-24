import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaUserAlt, FaGlobe, FaNetworkWired, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiImdb } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const formSubmitData = new FormData();
      formSubmitData.append("name", formData.name);
      formSubmitData.append("email", formData.email);
      formSubmitData.append("subject", formData.subject);
      formSubmitData.append("message", formData.message);
      formSubmitData.append("_subject", `New contact form submission from ${formData.name}`);
      formSubmitData.append("_captcha", "false"); 
      formSubmitData.append("_template", "table"); 

      const response = await fetch("https://formsubmit.co/contact@chadmathew.com", {
        method: "POST",
        body: formSubmitData
      });

      if (response.ok) {
        alert("Message Sent Successfully! Thank you for your interest. We&apos;ll get back to you soon!");

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("Failed to send message. Please try again or contact us directly.");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="text-left mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
          CONTACT
        </h1>
      </div>

      <div className="grid poppins grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Left Column - Image and Social Links */}
        <div className="space-y-6">
          <div className="relative w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/img-1.jpeg"
              alt="Chad Mathew"
              width={500}
              height={600}
              priority
              className="w-full h-auto object-cover rounded-3xl"
              style={{
                aspectRatio: "4/5",
                maxHeight: "450px",
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="mailto:contact@chadmathew.com"
              className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center hover:bg-[#0B3D2E]/80 hover:scale-110 transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>

            <a
              href="https://www.starnow.com/u/chadmathew/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center hover:bg-[#0B3D2E]/80 hover:scale-110 transition-all duration-300"
              title="StarNow"
            >
              <FaStar className="w-5 h-5" />
            </a>

            <a
              href="https://www.backstage.com/u/itschadmathew/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center hover:bg-[#0B3D2E]/80 hover:scale-110 transition-all duration-300"
              title="Backstage"
            >
              <FaUserAlt className="w-5 h-5" />
            </a>

            <a
              href="https://casting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center hover:bg-[#0B3D2E]/80 hover:scale-110 transition-all duration-300"
              title="CastingApp"
            >
              <FaGlobe className="w-5 h-5" />
            </a>

            <a
              href="https://www.castingnetworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center hover:bg-[#0B3D2E]/80 hover:scale-110 transition-all duration-300"
              title="CastingNetworks"
            >
              <FaNetworkWired className="w-5 h-5" />
            </a>

            <a
              href="https://www.imdb.com/name/nm9102781/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center hover:bg-[#0B3D2E]/80 hover:scale-110 transition-all duration-300"
              title="IMDb"
            >
              <SiImdb className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-sm opacity-75 leading-relaxed">
              Ready to collaborate? Drop me a message and let&apos;s create something amazing together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#0B3D2E]/30 rounded-lg focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/80"
                placeholder="Your full name *"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#0B3D2E]/30 rounded-lg focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/80"
                placeholder="your.email@example.com *"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0B3D2E]/30 rounded-lg focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/80"
              placeholder="What&apos;s this about? *"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-[#0B3D2E]/30 rounded-lg focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/80 resize-none"
              placeholder="Tell me about your project, collaboration ideas, or just say hello! *"
            />

            <button
              type="submit"
              className="w-full bg-[#0B3D2E] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0B3D2E]/90 transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>

          <div className="text-center pt-4 border-t border-[#0B3D2E]/20">
            <p className="text-xs opacity-75 mb-3">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
            
            {/* Developer Attribution */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;