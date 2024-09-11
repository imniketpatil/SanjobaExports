import React from "react";
import ProductCard from "./ProductCard"; // Assuming you have a ProductCard component
import image1 from "../assets/1 Handmade Herbal Soaps.jpg";
import image2 from "../assets/2 Herbal Hairdies.jpg";
import image3 from "../assets/3 Fruit Bars.jpg";
import image4 from "../assets/4 Honey.jpg";
import image5 from "../assets/5 Medari Wines.jpg";
import image6 from "../assets/6 Alphonso Mango Pulp.jpg";
import image7 from "../assets/7 Instant Coffee.jpg";
import image8 from "../assets/8 Nilgiri Tea.jpg";
import image9 from "../assets/9 Coconut Vinegar.jpg";
import image10 from "../assets/10 Wood pressed Oils.jpg";
import image11 from "../assets/11 Spices.jpg";
import image12 from "../assets/12 Rosted and Salted Peanuts.jpg";
import image13 from "../assets/13 Fruit juices.jpg";
import image14 from "../assets/14 Feeder Bottle Nipples.jpg";
import image15 from "../assets/15 Bamboo Undergarment.jpg";
import image16 from "../assets/16 Antique style new wooden furniture.jpg";
import image17 from "../assets/17 Decompostable bags made from glucose.jpg";
import image18 from "../assets/18 Coconut Sugar.jpg";
import image19 from "../assets/19 Coconut Milk powder.jpg";

function ProductSection() {
  const products = [
    {
      title: "Handmade Herbal Soaps",
      description: "Natural, handmade herbal soaps with no chemicals.",
      image: image1,
    },
    {
      title: "Herbal Hair Dyes",
      description: "Safe and natural hair dyes made from herbs.",
      image: image2,
    },
    {
      title: "Fruit Bars",
      description: "Delicious and healthy fruit bars for snacking.",
      image: image3,
    },
    {
      title: "Honey from Sahyadri Ranges",
      description: "Pure honey from the Sahyadri Ranges.",
      image: image4,
    },
    {
      title: "Medari Wine",
      description: "Fine wine made from the Medari grape.",
      image: image5,
    },
    {
      title: "Alphonso Mango Pulp",
      description: "Premium Alphonso mango pulp from Chitale.",
      image: image6,
    },
    {
      title: "Instant Coffee",
      description: "Rich and aromatic instant coffee.",
      image: image7,
    },
    {
      title: "Nilgiri Tea",
      description: "Fresh and fragrant tea from the Nilgiri hills.",
      image: image8,
    },
    {
      title: "Coconut Vinegar",
      description: "Natural vinegar made from coconuts.",
      image: image9,
    },
    {
      title: "Wood Pressed Oils",
      description: "Pure oils extracted using traditional wood pressing.",
      image: image10,
    },
    {
      title: "Spices",
      description: "Fresh and aromatic spices.",
      image: image11,
    },
    {
      title: "Roasted and Salted Peanuts",
      description: "Crunchy peanuts roasted and salted to perfection.",
      image: image12,
    },
    {
      title: "Fruit Juices",
      description: "Refreshing fruit juices from Real and Mapro.",
      image: image13,
    },
    {
      title: "Feeder Bottle Nipples",
      description: "Safe and durable feeder bottle nipples.",
      image: image14,
    },
    {
      title: "Bamboo Undergarment",
      description: "Comfortable and eco-friendly bamboo undergarments.",
      image: image15,
    },
    {
      title: "Antique Style Wooden Furniture",
      description: "Elegant antique style wooden furniture.",
      image: image16,
    },
    {
      title: "Decompostable Bags",
      description: "Eco-friendly decomposable bags made from glucose.",
      image: image17,
    },
    {
      title: "Coconut Sugar",
      description: "Natural sweetener made from coconut.",
      image: image18,
    },
    {
      title: "Coconut Milk Powder",
      description: "Convenient and natural coconut milk powder.",
      image: image19,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Our Products
        </h2>
        <p className="text-center font-bold mb-8 text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of high-quality products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
