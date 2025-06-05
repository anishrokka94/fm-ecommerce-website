import SwiperSlider from "../../SwiperSlider/SwiperSlider";
import ProductCard from "../ProductCard/ProductCard";

const ProductShowcaseSection = ({
  title,
  products,
  swiperOptions,
}: ProductShowcaseProps) => {
  const productSlides = products.map((product) => ({
    key: product.id,
    content: <ProductCard />,
  }));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <SwiperSlider
          slides={productSlides}
          swiperOptions={{
            slidesPerView: 4,
            spaceBetween: 20,

            breakpoints: {
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            },
            ...swiperOptions,
          }}
          showNavigation={true}
          showPagination={false}
        />
      </div>
    </div>
  );
};

export default ProductShowcaseSection;
