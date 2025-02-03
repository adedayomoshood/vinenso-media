"use client";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useRef, useState } from "react";

const WhatOurClientSay: React.FC = () => {
  // Hardcoded data for images
  const contentImages = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
    "/path/to/image5.jpg",
  ];

  const contentHeading = "Here is What Our Clients Say About Us";

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const nextIndex =
      activeIndex === contentImages.length - 3 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: nextIndex * 416, // Width of each box is 416px
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    const prevIndex =
      activeIndex === 0 ? contentImages.length - 3 : activeIndex - 1;
    setActiveIndex(prevIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: prevIndex * 416, // Width of each box is 416px
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[80%] mx-auto my-16">
      <h2 className="text-secondary text-center font-semibold text-4xl mb-6">
        {contentHeading}
      </h2>

      <div className="flex gap-3 items-center justify-between mb-4">
        <FaArrowCircleLeft
          size={30}
          className="text-secondary cursor-pointer mt-2 hover:scale-105 transition-transform"
          onClick={handlePrevious}
        />
        <FaArrowCircleRight
          size={30}
          className="text-secondary cursor-pointer mt-2 hover:scale-105 transition-transform"
          onClick={handleNext}
        />
      </div>

      <div
        ref={scrollRef}
        className="overflow-hidden"
        style={{
          display: "flex",
          scrollBehavior: "smooth",
        }}
      >
        {contentImages.map((image, index) => (
          <div
            key={index}
            className="relative border-2 border-gray-300 rounded-[16px] p-4 gap-[1rem] flex flex-col justify-center"
            style={{
              width: "416px", // Each box is 416px wide
              height: "287px", // 287px height
            }}
          >
            <h3 className="font-semibold text-2xl">Emily Harper</h3>
            <p className="text-sm">Founder of TrendTrove Apparel</p>
            <p className="text-xs text-center">
              "50 Bucks Media transformed our online presence with vibrant
              content that truly speaks to our audience. Amazing results!"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurClientSay;
