import React from "react";

export default function QuoteCard() {
  const blogData = [
    {
      image: "/1.png",
      title: "AI for Business Smarter Moves",
      description:
        "🚀 Businesses are now leveraging AI to automate routine tasks, optimize decision-making processes, and maintain a competitive edge in today's dynamic market environment.",
    },
    {
      image: "/2.png",
      title: "AI Meets the Future",
      description:
        "🌍 Ethical considerations in AI include addressing biases, safeguarding data privacy, and ensuring transparency to build responsible and trustworthy systems.",
    },
    {
      image: "/3.png",
      title: "Changing the Game",
      description:
        "⚡ AI-driven technologies are reshaping industries by streamlining operations, optimizing workflows, and fostering innovation for a smarter future.",
    },
    {
      image: "/4.png",
      title: "AI Powerhouse",
      description:
        "💡 AI is becoming a creative powerhouse, solving complex challenges and driving unprecedented growth and innovation across global sectors.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-5 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#da5fc6] to-[#4635B1] text-center">
        AI Secrets Revealed
        <br /> What’s Next for the World?
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-pink-500 rounded-full mb-1"></div>
      <div className="w-24 sm:w-36 h-1 bg-blue-400 rounded-full"></div>
      <br />

      <p className="text-lg sm:text-xl md:text-2xl text-white font-serif font-extrabold text-center">
        Get Ready for a Smarter Tomorrow with AI
      </p>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-md bg-gray-200 flex flex-col justify-center text-center h-80 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${blog.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h2 className="text-white font-bold text-xl sm:text-2xl mb-2">{blog.title}</h2>
              <p className="text-white text-sm sm:text-base">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
