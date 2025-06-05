import SwiperSlider from "../../SwiperSlider/SwiperSlider";
export type Product = {
  id: string;
  image: string;
  name: string;
  color: string;
  price: string;
};

export type ProductShowcaseProps = {
  title: string;
  products: Product[];
  swiperOptions?: React.ComponentProps<typeof SwiperSlider>["swiperOptions"];
};
