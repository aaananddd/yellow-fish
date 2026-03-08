import { AwardIcon } from "lucide-react";
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
              eiusmod  <br /> ut labore et dolore magna aliqua.
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
        Right section
      </div>
    </div>
  );
};

export default Homepage2;
