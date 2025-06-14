// import { useContext } from "react";
import ProductShowcaseSection from "../components/common/ProductionShowcaseSection/ProductShowcaseSection";
import CategorySection from "../components/Homepage/CategorySection";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider";
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

  const products = [
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
    {
      id: "1",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      color: "Black",
      price: "$35",
    },
  ];

  // const { isLoggedIn } = useContext(AuthContext);
  // console.log("islo", isLoggedIn);

  return (
    // <div className="flex flex-col items-center p-7 rounded-2xl">
    //   <div className="flex">
    //     <span className="">ClassName Warfare</span>
    //     <button className="bg-primary dark:bg-black text-white px-4 py-1 rounded-full">
    //       Grape
    //     </button>
    //     <button className="bg-warning px-4 py-1 rounded-full text-white">
    //       Grape
    //     </button>
    //   </div>
    // </div>

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

      <CategorySection />

      <ProductShowcaseSection
        products={products}
        title="Shop The Latest"
        products={products}
        swiperOptions={{ slidesPerView: 3 }}
      />

      <ProductShowcaseSection
        title="Your Favourites"
        products={products}
        swiperOptions={{ slidesPerView: 3 }} // Custom option for this section
      />
    </div>
  );
};

export default HomePage;
