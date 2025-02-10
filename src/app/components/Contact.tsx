'use client'
import { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 md:p-8">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 md:mb-4">Contact Us</h1>
        <p className="text-xs md:text-sm text-gray-200 leading-relaxed max-w-md md:max-w-2xl">
          Have questions or just want to say hello&#63; Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-2xl text-white w-full max-w-md md:max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 md:p-4 bg-transparent text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 md:p-4 bg-transparent text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 md:p-4 bg-transparent text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 md:h-32"
          />
          <button
            type="submit"
            className="w-full p-3 md:p-4 bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-400 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
