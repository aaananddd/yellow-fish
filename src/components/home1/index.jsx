import { Flag, Map, Play, Puzzle, Telescope } from "lucide-react";
import CurlyArrow from "../../assets/curly-arrow.png"; 
import WavyLines from "../../assets/wavy-lines.png"; 
import React from "react";

const HomePage1 = () => {
  return (
    <div className="flex h-[70vh] items-center">
      <div className="w-1/2  flex-col justify-start pl-20">
        <div className="flex ">
          <h1 className="text-5xl font-bold leading-tight font-sans">
            We make it the way <br />
            your{" "}
            <span className="text-purple-700 underline decoration-wavy decoration-2  underline-offset-4 decoration-yellow-400">
              child
            </span>{" "}
            loves it
          </h1>
          {/* Arrow at the end */}
          <img
            src={CurlyArrow}
            alt="curly arrow"
            className="inline-block w-12 h-24 ml-2 -mt-4"
          />
        </div>
        <div>
          <p className="text-lg  text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <button className="bg-purple-700 text-white w-12 h-12 rounded-full hover:bg-purple-800 transition duration-300 flex items-center justify-center">
            <Play className="w-5 h-5 fill-white" />
          </button>

          <span className="text-purple-700 text-lg font-medium">
            Discover Now
          </span>
        </div>
      </div>
      <div className="w-1/2  flex items-center justify-center">
        <div className="w-1/2 flex">
          <div className="w-1/3 flex gap-6 items-center justify-center">
            {/* LEFT SECTION */}
            <div className="flex items-center">
              <div className="relative bg-indigo-600 text-white p-6 w-64 h-64 shadow-lg">
                <Map className="text-yellow-300 mb-4" size={28} />

                <h3 className="font-semibold mb-2">Guidance</h3>

                <p className="text-sm text-indigo-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate officia consequatur duis enim velit mollit. Lorem
                  ipsum dolor sit amet consectetur.
                </p>

                {/* Decorative waves */}
                <div className="absolute -bottom-8 left-6 flex flex-col gap-1">
                  <img
                    src={WavyLines}
                    alt="wavy lines"
                    className="inline-block w-12 h-24 ml-30 "
                  />
                </div>

                {/* Yellow half circle */}
                <div className="absolute -top-20 -right-0 w-16 h-16 bg-yellow-400 rounded-tl-full"></div>
              </div>
            </div>
          </div>

          {/* LEFT SECTION */}
          <div className="flex flex-col ">
            {/* TOP CARD */}
            <div className="relative bg-teal-600 gap-6 ml-16 text-white p-6 w-full h-64 shadow-lg">
              <Telescope className="text-orange-300 mb-4" size={28} />

              <h3 className="font-semibold mb-2">Exploring skills</h3>

              <p className="text-sm text-teal-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor. Velit
                officia consequat duis enim velit mollit.
              </p>
            </div>

            {/* BOTTOM CARD */}
            <div className="relative bg-black text-white p-6 w-3/4 mt-6 ml-16 gap-6 h-64 shadow-lg">
              <Puzzle className="text-orange-400 mb-4" size={28} />

              <h3 className="font-semibold mb-2">Decision making</h3>

              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor. Velit
                officia consequat duis enim velit mollit.
              </p>

              {/* Purple corner shape */}
              <div className="absolute -top-0 -right-20 w-16 h-14 bg-purple-600 rounded-br-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
