import { useState } from "react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

interface ProductThumbnailSliderProps {
  images?: string[];
}

const ProductThumbnailSlider = ({
  images = [],
}: ProductThumbnailSliderProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => setActiveImage(img)}
            className="w-20 h-20 object-cover border border-gray-300 rounded cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={activeImage}
          alt="Main Product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductThumbnailSlider;
