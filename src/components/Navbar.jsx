import React, { useState, useRef } from "react";
import logo from "../assets/logo_trial_3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const tabRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  const products = [
    { title: "Handmade Herbal Soaps" },
    { title: "Herbal Hair Dyes" },
    { title: "Fruit Bars" },
    { title: "Honey from Sahyadri Ranges" },
    { title: "Medari Wine" },
    { title: "Alphonso Mango Pulp from Chitale" },
    { title: "Instant Coffee" },
    { title: "Nilgiri Tea" },
    { title: "Coconut Vinegar" },
    { title: "Wood Pressed Fruit and Scented Flower Oil" },
    { title: "Spices (Black Pepper, Green Cardamom, Whole Cloves)" },
    { title: "Coconut Water Soaked, Roasted, and Salted Peanuts" },
    { title: "Fruit Juices from Real and Mapro" },
    { title: "Feeder Bottle Nipples" },
    { title: "Bamboo Socks and Underwear" },
    { title: "Antique Style New Wooden Furniture as per Choice" },
    { title: "Decompostable Bags Made from Glucose" },
    { title: "Coconut Sugar" },
    { title: "Coconut Milk Powder" },
    { title: "Medari Wine" },
  ];

  return (
    <div className="flex items-center justify-center">
      <nav className="absolute top-5 z-40 flex flex-wrap items-center justify-between w-full max-w-6xl px-6 py-5 bg-slate-600 shadow-xl rounded-lg md:py-4 md:px-8 lg:px-14">
        {/* Left nav */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-3" />
            <h1
              href="#"
              className="text-2xl font-semibold text-white tracking-wide hover:text-indigo-200"
            >
              Sanjoba Exports
            </h1>
          </div>
        </Link>
        {/* End left nav */}

        {/* Toggle button */}
        <div
          onClick={handleMenuToggle}
          className="block text-white cursor-pointer lg:hidden"
        >
          <button className="w-6 h-6 text-lg">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  fillOpacity="0.01"
                ></rect>
                <path
                  d="M7.94977 11.9498H39.9498"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.94977 23.9498H39.9498"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.94977 35.9498H39.9498"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {/* End toggle button */}

        {/* Toggle menu */}
        <div
          ref={tabRef}
          style={{ maxHeight: menuOpen ? "100vh" : "0" }}
          className="relative w-full overflow-hidden transition-all duration-700 ease-in-out lg:hidden"
        >
          <div className="flex flex-col my-3 space-y-2 text-md text-white font-bold">
            <Link to="/">
              <h1 href="#" className="hover:text-indigo-200">
                Home
              </h1>
            </Link>
            <hr className="border-gray-500" />
            <div
              onMouseLeave={handleDropdownClose}
              className="relative inline-block"
            >
              {/* Dropdown Toggle Button */}
              <button
                onMouseOver={handleDropdownToggle}
                className="flex items-center rounded-md"
              >
                <span className="mr-4">Products</span>
                <span
                  className={`transition-transform duration-500 transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              {/* End Dropdown Toggle Button */}

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="fixed left-6 py-1 mt-1 text-gray-800 bg-white rounded-lg shadow-xl min-w-max font-semibold">
                  {products.map((product) => (
                    <a
                      href="#"
                      key={product.title}
                      className="block px-4 py-1 hover:text-indigo-500 hover:bg-gray-100"
                    >
                      {product.title}
                    </a>
                  ))}
                </div>
              )}
              {/* End Dropdown Menu */}
            </div>
            <hr className="border-gray-500" />
            <Link to="/aboutus">
              <a href="#" className="hover:text-indigo-200">
                About Us
              </a>
            </Link>
            <hr className="border-gray-500" />
            <a href="#" className="hover:text-indigo-200">
              Certificates
            </a>
            <hr className="border-gray-500" />
            <Link to="/contactus">
              <h1 href="#" className="hover:text-indigo-200">
                Contact Us
              </h1>
            </Link>
          </div>
        </div>
        {/* End toggle menu */}

        {/* Show Menu lg */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="flex-1 text-md text-white lg:flex font-bold">
            <Link to="/">
              <h1
                href="#"
                className="inline-block px-4 py-2 hover:text-indigo-200 transition-all duration-300"
              >
                Home
              </h1>
            </Link>
            <div
              onMouseLeave={handleDropdownClose}
              className="relative inline-block"
            >
              <button
                onMouseOver={handleDropdownToggle}
                className="flex items-center px-4 py-2 rounded-md hover:text-indigo-200 transition-all duration-300"
              >
                Products
                <span
                  className={`ml-2 transition-transform duration-500 transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 py-1 mt-1 text-gray-800 bg-white rounded-lg shadow-xl min-w-max font-semibold">
                  {products.map((product) => (
                    <a
                      href="#"
                      key={product.title}
                      className="block px-4 py-1 hover:text-indigo-500 hover:bg-gray-100"
                    >
                      {product.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link to="/aboutus">
              <h1
                href="#"
                className="inline-block px-4 py-2 hover:text-indigo-200 transition-all duration-300"
              >
                About Us
              </h1>
            </Link>

            <h1
              href="#"
              className="inline-block px-4 py-2 hover:text-indigo-200 transition-all duration-300"
            >
              Certificates
            </h1>
            <Link to="/contactus">
              <h1
                href="#"
                className="inline-block px-4 py-2 hover:text-indigo-200 transition-all duration-300"
              >
                Contact Us
              </h1>
            </Link>
          </div>
        </div>
        {/* End show menu lg */}
      </nav>
    </div>
  );
};

export default Navbar;
