import ProductShowcaseSection from "../../components/common/ProductionShowcaseSection/ProductShowcaseSection";
import CategorySection from "../../components/Homepage/CategorySection";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";
import useFetch from "../../hooks/useFetch";
import Banner from "./components/Banner/Banner";
import useFetchProductCategories from "../../hooks/useFetchProductCategories";
// import { AuthContext } from "../global-state/context/AuthContext/AuthContext";

const HomePage = () => {
  const heroSlides = [
    {
      key: "hero-1",
      content: (
        <img
          src="/img/hero-1.jpg"
          className="w-full h-full object-cover"
          alt="Hero 1"
        />
      ),
    },
    {
      key: "hero-2",
      content: (
        <img
          src="/img/hero-2.jpg"
          className="w-full h-full object-cover"
          alt="Hero 2"
        />
      ),
    },
    {
      key: "hero-3",
      content: (
        <img
          src="/img/hero-3.jpg"
          className="w-full h-full object-cover"
          alt="Hero 2"
        />
      ),
    },
    {
      key: "hero-4",
      content: (
        <img
          src="/img/hero-4.jpg"
          className="w-full h-full object-cover"
          alt="Hero 2"
        />
      ),
    },
    {
      key: "hero-5",
      content: (
        <img
          src="/img/hero-5.jpg"
          className="w-full h-full object-cover"
          alt="Hero 2"
        />
      ),
    },
  ];

  const { allData } = useFetch(1, 10);
  // console.log("all data", allData);

  const { categories, loading } = useFetchProductCategories(7);
  return (
    <div className="">
      <SwiperSlider
        slides={heroSlides}
        swiperOptions={{
          loop: true,
          autoplay: { delay: 3000 },
          direction: "horizontal",
        }}
        showNavigation={true}
        showPagination={false}
      />

      <CategorySection categories={categories} loading={loading} />

      <Banner />
      <ProductShowcaseSection
        products={allData}
        title="Shop The Latest"
        swiperOptions={{ slidesPerView: 4 }}
      />
    </div>
  );
};

export default HomePage;
