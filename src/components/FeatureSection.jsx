import React from "react";
import FeatureCard from "./FeatureCard";
import FastDelivery from "../assets/Delivery.svg";
import Money from "../assets/Money.svg";
import Secure from "../assets/Secure.svg";

function FeatureSection() {
  const features = [
    {
      title: "Fast",
      description:
        "Providing fast and complete service to our customers with quick order turnaround. We are able to source products, negotiate pricing, and facilitate delivery by Sea or Air. Experience in Australia food export for all types of food and wine.",
      image: FastDelivery,
    },
    {
      title: "Reliable",
      description:
        "Integrity in business is what we pride ourselves on. Whether you are a food products supplier, customer or stakeholder in the business, we will always work with integrity and transparency.",
      image: Secure,
    },
    {
      title: "Best Pricing",
      description:
        "We understand that it is a competitive market, and we work hard to deliver Best Pricing. We will do this through our understanding of the Domestic market and the Overseas markets that we operate in.",
      image: Money,
    },
    {
      title: "Private Label and OEM",
      description:
        "Through our long-standing relationships with Australian manufacturers, we can facilitate Private Label and OEM for you or your customers. Products including Wine, Drinks, Honey, Snacks and more can be made to your requirements with your own brand and label, made specially for your market.",
      image: FastDelivery,
    },
    {
      title: "Australis Food Group",
      description:
        "We have our own range of high quality and competitively priced products available for export, including Kombucha, Manuka Honey and we can produce our own range of products with labels compliant to your market with relatively small MOQ.",
      image: FastDelivery,
    },
    {
      title: "Dry Goods, Fresh, Frozen and Chilled",
      description:
        "We have many years of experience consolidating and exporting all products, and we have a proven track record in shipping temperature sensitive goods such as Chocolates, Meat and Fresh Fruit by Air and Sea.",
      image: FastDelivery,
    },
  ];

  return (
    <section className="bg-white pt-6 pb-8 px-4 lg:px-8">
      <div className="container mx-auto px-4 md:px-24 xl:px-12 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Our Features
        </h2>
        <p className="text-center font-bold mb-8 text-gray-600 max-w-2xl mx-auto">
          Discover the amazing features that make our service unique.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 lg:gap-x-12 place-content-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              className="hover:shadow-lg transition-shadow duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
