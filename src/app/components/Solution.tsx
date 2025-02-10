import { AiOutlineGlobal } from "react-icons/ai";
import { TbVirusSearch } from "react-icons/tb";
import { SlRocket } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa6";

const CircularInfographic = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 text-center">
        AI Solution
      </h2>
      <div className="w-16 md:w-24 h-1 bg-pink-500 rounded-full mb-1"></div>
      <div className="w-24 md:w-36 h-1 bg-blue-400 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-12">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center border-[#C780FA] rounded-full shadow-[0_8px_16px_rgba(52,76,183,0.5)] border-4 text-center text-sm md:text-lg font-bold transition-transform duration-300 hover:animate-bounce">
            <AiOutlineGlobal className="w-16 h-16 md:w-20 md:h-20 text-[#C780FA]" />
            <span className="mt-2">GLOBAL AI SOLUTION</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center border-[#D91656] rounded-full shadow-[0_8px_16px_rgba(222,49,99,0.5)] border-4 text-center text-sm md:text-lg font-bold transition-transform duration-300 hover:animate-bounce">
            <TbVirusSearch className="w-16 h-16 md:w-20 md:h-20 text-[#D91656]" />
            <span className="mt-2">
              INTELLIGENT <br /> INNOVATION
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center border-[#DD88CF] rounded-full shadow-[0_8px_16px_rgba(221,136,207,0.5)] border-4 text-center text-sm md:text-lg font-bold transition-transform duration-300 hover:animate-bounce">
            <FaLaptopCode className="w-16 h-16 md:w-20 md:h-20 text-[#DD88CF]" />
            <span className="mt-2">
              ADVANCED AI <br /> SYSTEMS
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center border-[#80C4E9] rounded-full shadow-[0_8px_16px_rgba(255,207,239,0.5)] border-4 text-center text-sm md:text-lg font-bold transition-transform duration-300 hover:animate-bounce">
            <SlRocket className="w-16 h-16 md:w-20 md:h-20 text-[#80C4E9]" />
            <span className="mt-2">SMART AUTOMATION</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularInfographic;
