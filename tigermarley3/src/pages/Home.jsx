import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import ProductCard from "../components/BannerImage";
import { products } from "../data/products";
import BannerImage from "../components/BannerImage";
import FandomFusion from "../components/FandomFusion";
import ProductCategories from "../components/ProductCategories";
import LimitedEditionsImages from "../components/LimitedEditionImages";
import LimitedEE from "../components/LimitedEditions";

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
    </>
  );
}
