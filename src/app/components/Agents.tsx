'use client'
import { LiaRobotSolid } from "react-icons/lia";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { LuBrain } from "react-icons/lu";
import { MdOutlineAnalytics } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <main className="text-white py-24 px-6">
        <section className="text-center max-w-screen-xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
            Step into the Future
            <br /> with Our Game-Changing
            <br /> AI Agents
          </h2>
          <p className="text-lg mb-16 max-w-3xl mx-auto text-white">
            Experience the power of next-level AI and watch your business soar to new heights! Our AI agents aren’t just tools—they’re your new business partners, pushing boundaries, unlocking new opportunities, and delivering results like never before Ready to revolutionize the way you work?
          </p>

          {/* Cards*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/*Card 1 */}
            <div className="relative group p-8 text-white rounded-xl shadow-[0_8px_16px_rgba(138,85,238,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(138,85,238,0.4)] transform border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-pink-500 group-hover:border-blue-400 group-hover:ring-2 group-hover:ring-gradient-to-r group-hover:ring-pink-500 group-hover:ring-blue-400">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-60 transition-all"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-blue-700 group-hover:border-blue-400 rounded-xl animate-pulse"></div>
              <MdOutlineAnalytics className="w-20 h-20 mx-auto mb-6 text-blue-400 transition-all" />
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 transition-all">Machine Learning</h3>
              <p className="mb-6 opacity-90">
                ML algorithms help systems learn from data and improve over time without explicit programming.
              </p>
            </div>

            {/*Card 2 */}
            <div className="relative group p-8 text-white rounded-xl shadow-[0_8px_16px_rgba(138,85,238,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(138,85,238,0.4)] transform border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-pink-500 group-hover:border-blue-400 group-hover:ring-2 group-hover:ring-gradient-to-r group-hover:ring-pink-500 group-hover:ring-blue-400">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-60 transition-all"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-blue-700 group-hover:border-blue-400 rounded-xl animate-pulse"></div>
              <LiaNetworkWiredSolid className="w-20 h-20 mx-auto mb-6 text-blue-400 transition-all" />
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 transition-all">Deep Learning</h3>
              <p className="mb-6 opacity-90">
                Deep Learning uses neural networks to solve complex problems and power advanced AI systems.
              </p>
            </div>

            {/*Card 3 */}
            <div className="relative group p-8 text-white rounded-xl shadow-[0_8px_16px_rgba(138,85,238,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(138,85,238,0.4)] transform border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-pink-500 group-hover:border-blue-400 group-hover:ring-2 group-hover:ring-gradient-to-r group-hover:ring-pink-500 group-hover:ring-blue-400">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-60 transition-all"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-blue-700 group-hover:border-blue-400 rounded-xl animate-pulse"></div>
              <LiaRobotSolid className="w-20 h-20 mx-auto mb-6 text-blue-400 transition-all" />
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 transition-all">Robotics</h3>
              <p className="mb-6 opacity-90">
                AI-driven robotics enables machines to perform tasks autonomously in industries like manufacturing and healthcare.
              </p>
            </div>

            {/*Card 4 */}
            <div className="relative group p-8 text-white rounded-xl shadow-[0_8px_16px_rgba(138,85,238,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(138,85,238,0.4)] transform border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-pink-500 group-hover:border-blue-400 group-hover:ring-2 group-hover:ring-gradient-to-r group-hover:ring-pink-500 group-hover:ring-blue-400">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-60 transition-all"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:border-blue-700 group-hover:border-blue-400 rounded-xl animate-pulse"></div>
              <LuBrain className="w-20 h-20 mx-auto mb-6 text-blue-400 transition-all" />
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 transition-all">Neural Network</h3>
              <p className="mb-6 opacity-90">
                Networks mimic the human brain to recognize patterns and solve complex tasks in AI.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
