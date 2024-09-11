import React from "react";
import HomeBannerImage from "../assets/HomeBanner.png";

function HomeBanner() {
  return (
    <div
      className="bg-cover bg-center h-[50vh] md:h-[100vh] flex pt-20 items-center justify-center text-black"
      style={{
        backgroundImage: `url(${HomeBannerImage})`,
      }}
    >
      <div className="w-full max-w-7xl px-4 flex justify-start items-center">
        <div className="text-start flex-col space-y-4">
          <div className="bg-slate-950 text-white p-2 w-fit">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4  drop-shadow-md">
              Welcome To Sanjoba's Exports
            </h1>
            <h3 className="text-xl md:text-3xl font-bold drop-shadow-md">
              Your Trusted Export Partner from India
            </h3>
          </div>
          <h3 className="text-md md:text-2xl max-w-lg text-slate-800 font-semibold drop-shadow-md">
            Specialized In
          </h3>
          <h3 className="text-md md:text-xl max-w-lg text-slate-800 font-semibold drop-shadow-md">
            Bamboo undergarments Wooden Pressed oils, Herbal Soaps and much more
            to offer :)
          </h3>
          <button className="mt-3 px-4 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Explore Our Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
