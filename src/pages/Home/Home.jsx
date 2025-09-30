import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Home() {
  return (
    <>
      <PageMetaData
        title="Home Page"
        description="FreshCart - Home Page Description"
      />
      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals />
      <FeaturedProducts />
    </>
  );
}
