import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="h-full lg:h-[370px] flex flex-col my-auto bg-white border border-gray-200 rounded-lg hover:cursor-pointer hover:shadow-lg  transition-all duration-300 ease-in-out">
      <div className="flex justify-center items-center p-4">
        <img
          src={image}
          className="w-24 h-24 lg:w-28 lg:h-28 transition-all duration-300 ease-in-out"
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="p-6 w-full text-center flex-grow ">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
