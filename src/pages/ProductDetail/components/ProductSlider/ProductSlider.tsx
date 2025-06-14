import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

interface ProductSliderProps {
  images?: string[];
}

const ProductSlider = ({ images }: ProductSliderProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            onClick={() => setActiveImage(img)}
            className="w-16 h-16 object-cover border border-gray-300 rounded cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      <div className="w-full aspect-square border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={activeImage}
          alt="Main Product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductSlider;
