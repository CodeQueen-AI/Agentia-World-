import React from "react";
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  colorClass: string;
}

const Card: React.FC<CardProps> = ({ icon, title, colorClass }) => {
  return (
    <div
      className={`relative w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-blue-400 text-center p-6 rounded-xl shadow-lg transform text-white rotate-45 group hover:scale-105 transition-transform duration-500`}
    >
      <div
        className={`absolute inset-0 rounded-xl z-0 bg-gradient-to-br ${colorClass} blur-sm opacity-90 pointer-events-none`}
      ></div>
      <div
        className={`absolute inset-0 border-[3px] border-transparent rounded-xl z-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-md`}
      ></div>
      <div className="transform -rotate-45 z-10">
        <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
        <h2 className="text-lg sm:text-xl font-serif font-semibold">{title}</h2>
      </div>
    </div>
  );
};

const DiamondGrid: React.FC = () => {
  const cards: CardProps[] = [
    { icon: "💬", title: "AI Chatbot Integration", colorClass: "from-[#DD88CF] to-purple-900" },
    { icon: "📊", title: "Data Analytics & Insights", colorClass: "from-pink-500 to-red-500" },
    { icon: "🔍", title: "Recommendation System", colorClass: "from-purple-500 to-indigo-600" },
    { icon: "🖼️", title: "Image Processing (Computer Vision)", colorClass: "from-blue-400 to-teal-500" },
    { icon: "🎤", title: "Voice Command Recognition", colorClass: "from-red-400 to-orange-500" },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 sm:p-8 gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-evenly">
      <div className="hidden lg:flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <Card {...cards[0]} />
          <Card {...cards[1]} />
        </div>
        <div className="flex justify-center">
          <Card {...cards[2]} />
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <Card {...cards[3]} />
          <Card {...cards[4]} />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col items-center text-center hidden lg:flex">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            The Future of Intelligence
          </h1>
          <p className="text-white text-lg sm:text-xl mt-2">
            💡Transforming dreams into intelligent realities! 🤖
          </p>
        </div>
        <Image
          src="/Technology.png"
          alt="Description"
          width={500}
          height={300}
          className="w-4/5 sm:w-3/4 md:w-full h-auto object-cover rounded-xl shadow-lg mt-8 sm:mt-12"
        />
      </div>

      <div className="w-full flex flex-col items-center text-center mt-10 lg:hidden">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The Future of Intelligence
          </h1>
          <p className="text-white text-lg sm:text-xl mt-2">
            💡Transforming dreams into intelligent realities! 🤖
          </p>
        </div>
        <Image
          src="/technology.png"
          alt="img"
          width={500}
          height={300}
          className="w-4/5 sm:w-3/4 md:w-full h-auto object-cover rounded-xl shadow-lg mt-8 sm:mt-12"
        />

        <div className="flex flex-col gap-6 sm:gap-8 mt-10">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <Card {...cards[0]} />
            <Card {...cards[1]} />
          </div>
          <div className="flex justify-center">
            <Card {...cards[2]} />
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <Card {...cards[3]} />
            <Card {...cards[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondGrid;
