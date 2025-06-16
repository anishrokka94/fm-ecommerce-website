import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <img src="/img/plum-ad.avif" className="rounded-xl" alt="" />

      <video
        src="/videos/plum-ad.mp4"
        controls={false}
        autoPlay
        muted
        loop
        className="w-full h-auto rounded-lg shadow-lg object-cover mt-10"
      />
    </div>
  );
};

export default Banner;
