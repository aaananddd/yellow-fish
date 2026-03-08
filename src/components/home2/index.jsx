import Certificate from "../../assets/certificate.png";
import React from "react";

const Homepage2 = () => {
  return (
    <div className="flex  h-[60vh]">
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <div className="w-full  flex-col justify-start pl-20">
          <div className="flex ">
            <h1 className="text-6xl font-bold leading-tight font-sans">
              Much enjoyable{" "}
              <span className="text-purple-700 underline decoration-wavy decoration-4  underline-offset-4 decoration-yellow-400">
                sessions <br />
              </span>{" "}
              wraps in
            </h1>
          </div>
          <div>
            <p className="text-xl  text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod <br /> ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <img
              src={Certificate}
              alt="certificate"
              className="w-12 h-12 -rotate-10"
            />

            <span className="text-purple-700 text-xl font-medium">
              Certificate Included
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
          <div className="w-56 rounded-2xl overflow-visible shadow-2xl shadow-purple-400/40 font-sans">
            {/* Top Section */}
            <div
              className="relative text-center px-6 pt-16 pb-14 rounded-t-2xl"
              style={{
                background: "linear-gradient(160deg, #7c6af5 0%, #5b21b6 100%)",
              }}
            >
              <div className="text-white text-5xl font-bold">
                <span className="text-3xl align-top mt-2 inline-block">₹</span>
                199
              </div>
              <div className="text-white/70 text-sm mt-1 tracking-wide">
                Per head
              </div>
              <div className="inline-block mt-3 border border-yellow-400 text-yellow-400 text-xs font-semibold tracking-widest px-4 py-1 rounded-full">
                60% OFF
              </div>

              {/* Notches */}
              <div className="absolute -bottom-3.5 -left-3.5 w-7 h-7 rounded-full bg-purple-100" />
              <div className="absolute -bottom-3.5 -right-3.5 w-7 h-7 rounded-full bg-purple-100" />
            </div>

            {/* Dashed Divider */}
            <div
              className="flex items-center px-5 py-0"
              style={{ background: "#6033b8" }}
            >
              <div className="flex-1 border-t-3 border-dashed border-white/25 my-0" />
            </div>

            {/* Bottom Section */}
            <div
              className="text-center py-5 rounded-b-2xl"
              style={{ background: "#6033b8" }}
            >
              <button className="text-white text-sm font-bold tracking-[3px] bg-transparent border-none cursor-pointer">
                GET NOW
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Homepage2;
