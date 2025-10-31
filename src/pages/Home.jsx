import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
// import ProductCard from "../components/BannerImage";
// import { products } from "../data/products";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BannerImage from "../components/BannerImage";
import FandomFusion from "../components/FandomFusion";
import ProductCategories from "../components/ProductCategories";
import LimitedEditionsImages from "../components/LimitedEditionImages";
import LimitedEE from "../components/LimitedEditions";
import Arrivals from "../components/Arrivals";
import OurEssential from "../components/Our_essientials";
import OfficialMM from "../components/Official_merchandise";
import ShopByThemes from "../components/Shop_by_themes";
import BestSelling from "../components/bestSelling";
import FeaturesRecognitions from "../components/features_recognizations";
import UserShowcase from "../components/OurShowcase";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Navbar/>
      <BannerImage/>
      <FandomFusion/>
      <ProductCategories/>
      <LimitedEE/>
      <LimitedEditionsImages/>
      <Arrivals/>
      <OurEssential/>
      <OfficialMM/>
      <ShopByThemes/>
      <BestSelling/>
      <FeaturesRecognitions/>
      <UserShowcase/>
    </>
  );
}
