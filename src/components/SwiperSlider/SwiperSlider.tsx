import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

type SliderProps = {
  slides: {
    content: React.ReactNode;
    key: string;
  }[];
  swiperOptions?: SwiperProps;
  showNavigation?: boolean;
  showPagination?: boolean;
};

const SwiperSlider = ({
  slides,
  swiperOptions = {},
  showNavigation = true,
  showPagination = false,
}: SliderProps) => {
  const modules = [];
  if (showNavigation) modules.push(Navigation);
  if (showPagination) modules.push(Pagination);
  if (swiperOptions.autoplay) modules.push(Autoplay);

  return (
    <Swiper
      modules={modules}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      {...swiperOptions}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.key}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
