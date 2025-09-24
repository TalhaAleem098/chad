import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

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

      const response = await fetch("https://formsubmit.co/aleemtalha098@gmail.com", {
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
      <div className="text-left mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
          CONTACT
        </h1>
      </div>

      <div className="grid poppins grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Column - Image and Social Links */}
        <div className="space-y-8">
          <div className="relative w-full overflow-hidden rounded-4xl">
            <Image
              src="/images/img-1.jpeg"
              alt="Chad Mathew"
              width={600}
              height={750}
              priority
              className="w-full h-auto object-cover rounded-[60px]"
              style={{
                aspectRatio: "4/5",
                maxHeight: "600px",
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Connect With Me</h2>
            <div className="space-y-4">
              <a
                href="mailto:contact@chadmathew.com"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm opacity-75">contact@chadmathew.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/chadmathew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <p className="text-sm opacity-75">@chadmathew</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/chadmathew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm opacity-75">Chad Mathew</p>
                </div>
              </a>

              <a
                href="https://twitter.com/chadmathew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaTwitter className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <p className="text-sm opacity-75">@chadmathew</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg opacity-75 leading-relaxed">
              Ready to collaborate? Drop me a message and let&apos;s create something amazing together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#0B3D2E]/20 rounded-xl focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#0B3D2E]/20 rounded-xl focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#0B3D2E]/20 rounded-xl focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                placeholder="What&apos;s this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-[#0B3D2E]/20 rounded-xl focus:border-[#0B3D2E] focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                placeholder="Tell me about your project, collaboration ideas, or just say hello!"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B3D2E] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-[#0B3D2E]/90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
            >
              Send Message
            </button>
          </form>

          <div className="text-center pt-6 border-t border-[#0B3D2E]/20">
            <p className="text-sm opacity-75">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;