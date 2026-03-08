import { Flag, Map, Play, Puzzle, Telescope } from "lucide-react";
import CurlyArrow from "../../assets/curly-arrow-1.png"; 
import WavyLines from "../../assets/wavy-lines.png"; 
import React from "react";

const HomePage1 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh] items-center py-10 lg:py-0">
      <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 md:px-12 lg:pl-20 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-sans">
            We make it the way <br />
            your{" "}
            <span className="text-purple-700 underline decoration-wavy decoration-2 underline-offset-4 decoration-yellow-400">
              child
            </span>{" "}
            loves it
          </h1>
          {/* Arrow - hidden on small mobile, shown on larger screens */}
          <img
            src={CurlyArrow}
            alt="curly arrow"
            className="hidden md:inline-block w-32 h-20 lg:w-40 lg:h-24 md:ml-4 lg:ml-10 -mt-4 -rotate-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(6000%) hue-rotate(260deg) brightness(95%) contrast(105%)",
            }}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg md:text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt <br className="hidden lg:block" /> ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
          <button className="bg-purple-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-full hover:bg-purple-800 transition duration-300 flex items-center justify-center">
            <Play className="w-5 h-5 fill-white" />
          </button>

          <span className="text-purple-700 text-lg md:text-xl font-medium">
            Discover Now
          </span>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 px-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* LEFT SECTION / TOP CARD ON MOBILE */}
          <div className="relative bg-indigo-600 text-white p-6 w-72 h-72 md:w-64 md:h-64 shadow-lg">
            <Map className="text-yellow-300 mb-4" size={28} />
            <h3 className="font-semibold mb-2">Guidance</h3>
            <p className="text-sm text-indigo-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate officia consequatur duis enim velit mollit. Lorem
              ipsum dolor sit amet consectetur.
            </p>
            {/* Decorative waves - adjusted for responsiveness */}
            <div className="absolute -bottom-16 md:-bottom-24 left-6 flex flex-col gap-1 pointer-events-none">
              <img
                src={WavyLines}
                alt="wavy lines"
                className="w-32 h-20 md:w-40 md:h-24 md:ml-20"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(80%) sepia(60%) saturate(500%) hue-rotate(5deg)",
                }}
              />
            </div>
            {/* Yellow half circle */}
            <div className="absolute -top-10 md:-top-20 right-0 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-tl-full"></div>
          </div>

          {/* RIGHT SECTION / BOTTOM CARDS */}
          <div className="flex flex-col gap-6">
            {/* TOP CARD */}
            <div className="relative bg-teal-600 text-white p-6 w-72 h-72 md:w-64 md:h-64 shadow-lg">
              <Telescope className="text-orange-300 mb-4" size={28} />
              <h3 className="font-semibold mb-2">Exploring skills</h3>
              <p className="text-sm text-teal-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor. Velit
                officia consequat duis enim velit mollit.
              </p>
            </div>

            {/* BOTTOM CARD */}
            <div className="relative bg-black text-white p-6 w-72 h-72 md:w-64 md:h-64 shadow-lg">
              <Puzzle className="text-orange-400 mb-4" size={28} />
              <h3 className="font-semibold mb-2">Decision making</h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor. Velit
                officia consequat duis enim velit mollit.
              </p>
              {/* Purple corner shape */}
              <div className="absolute -top-0 -right-4 md:-right-20 w-12 h-10 md:w-16 md:h-14 bg-purple-600 rounded-br-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
