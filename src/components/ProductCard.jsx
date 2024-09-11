import React from "react";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-full mx-auto flex items-center justify-center">
        {/* Card Container */}
        <div className="relative flex flex-col h-full w-full max-w-[26rem] rounded-xl bg-white text-gray-700 shadow-md  hover:shadow-lg">
          {/* Image Section */}
          <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
            </div>
            <p className="text-base font-light text-gray-700 flex-grow leading-relaxed my-auto ">
              {description}
            </p>
          </div>

          {/* Button Section */}
          <div className="px-6 pt-3">
            <button
              className="block w-full select-none rounded-lg bg-indigo-600 py-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-indigo-600/10 transition-all hover:bg-indigo-700 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  transform hover:-translate-y-0.5"
              type="button"
            >
              Get Information
            </button>
          </div>
          <div className="px-6 pb-6 pt-3">
            <button
              className="block w-full select-none rounded-lg bg-green-600 py-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-green-600/10 transition-all hover:bg-green-700 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transform hover:-translate-y-0.5"
              type="button"
            >
              Get Quotation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
