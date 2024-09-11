import React from "react";
import SliderCarousal from "./SliderCarousal";

function HomeSectionAboutUs() {
  return (
    <div className=" h-auto py-16 px-10">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between">
        {/* About Us Section */}
        <div className="flex-1 text-center lg:text-left lg:pr-8 mb-0 lg:mb-0">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-6">
            Welcome to our company! We are dedicated to providing the best
            services to our customers. Our team is committed to excellence and
            innovation, ensuring that we meet the needs of our clients with
            top-notch solutions.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-blue-700 transition-transform transform hover:-translate-y-1 duration-300">
            Learn More
          </button>
        </div>

        {/* Slider Section */}
        <div className="flex-1 lg:flex justify-center hidden ">
          <div className="w-full lg:w-4/5">
            <SliderCarousal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionAboutUs;
