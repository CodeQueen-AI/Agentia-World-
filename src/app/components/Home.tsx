import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
      >
        <source src="bg.mp4" type="video/mp4" />
      </video>

      <div className="flex items-center justify-center min-h-screen relative z-10 p-4">
        <div className="text-center text-white max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Step into the Future and Let the Magic Happen! ✨
          </h2>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            AI-Driven Agents for a <br className="hidden sm:block" /> Smarter Business Future
          </h1>

          <div className="relative flex flex-col sm:flex-row justify-center items-center p-6 mb-8">
            <Image
              src="/Home.png"
              alt="Robot"
              width={160}
              height={160}
              className="w-24 h-24 sm:w-40 sm:h-40 object-contain mb-4 sm:mb-0 sm:absolute sm:-top-12 sm:-left-14"
            />
            <div className="text-left sm:ml-20">
              <p className="text-lg sm:text-xl">
                Revolutionize your enterprise with intelligent AI agents that predict trends,
                automate tasks, and provide actionable insights to foster growth.
              </p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-700 text-white border-white border-2 rounded-full px-6 sm:px-8 py-2 sm:py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0FF] hover:to-[#5B21B6] hover:text-white hover:border-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
