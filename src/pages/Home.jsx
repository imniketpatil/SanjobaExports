import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import FeatureSection from "../components/FeatureSection";
import HomeSectionAboutUs from "../components/HomeSectionAboutUs";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import Review from "../components/Review";

function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      {/* <FeatureSection /> */}
      <HomeSectionAboutUs />
      <ProductSection />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
