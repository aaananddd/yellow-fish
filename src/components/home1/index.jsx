import { Play } from 'lucide-react';
import CurlyArrow from "../../assets/curly-arrow.png"; // adjust path
import React from 'react'

const HomePage1 = () => {
  return (
    <div className="flex h-[70vh] items-center">
      <div className="w-1/2  flex-col justify-start pl-20">
        <div className='flex '>
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
        Right section
      </div>
    </div>
  );
}

export default HomePage1