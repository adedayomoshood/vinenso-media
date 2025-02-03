"use client";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useRef, useState } from "react";

const WhatOurClientSay: React.FC = () => {
  const Content = [
    {
      title: "Emily Harper",
      subTitle: "Founder of TrendTrove Apparel",
      description:
        "50 Bucks Media transformed our online presence with vibrant content that truly speaks to our audience. Amazing results!",
    },
    {
      title: "Sophia Grant",
      subTitle: "Owner of Glow Essence",
      description:
        "Their videos and posts perfectly capture our brand essence. Our engagement rates have soared since working with 50 Bucks Media!",
    },
    {
      title: "Emily Harper",
      subTitle: "Founder of TrendTrove Apparel",
      description:
        "50 Bucks Media transformed our online presence with vibrant content that truly speaks to our audience. Amazing results!",
    },
    {
      title: "Emily Harper",
      subTitle: "Founder of TrendTrove Apparel",
      description:
        "50 Bucks Media transformed our online presence with vibrant content that truly speaks to our audience. Amazing results!",
    },
  ];

  const contentHeading = "Here is What Our Clients Say About Us";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 450;

  const handleNext = () => {
    if (scrollRef.current) {
      const newScrollPosition = scrollPosition + cardWidth;
      const maxScroll = (Content.length - 1) * cardWidth;
      if (newScrollPosition > maxScroll) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setScrollPosition(0);
      } else {
        scrollRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
        setScrollPosition(newScrollPosition);
      }
    }
  };

  const handlePrevious = () => {
    if (scrollRef.current) {
      const newScrollPosition = scrollPosition - cardWidth;
      if (newScrollPosition < 0) {
        const maxScroll = (Content.length - 1) * cardWidth;
        scrollRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
        setScrollPosition(maxScroll);
      } else {
        scrollRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
        setScrollPosition(newScrollPosition);
      }
    }
  };

  return (
    <div className="w-[70%] mx-auto my-16">
      <h2 className="text-secondary-dark text-center font-semibold text-4xl lg:text-4xl md:text-3xl  sm:text-2xl mb-8">
        {contentHeading}
      </h2>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-6">
        <FaArrowCircleLeft
          size={40}
          className="text-secondary cursor-pointer hover:scale-110 transition-transform"
          onClick={handlePrevious}
        />
        <FaArrowCircleRight
          size={40}
          className="text-secondary cursor-pointer hover:scale-110 transition-transform"
          onClick={handleNext}
        />
      </div>

      {/* Scrolling Content */}
      <div
        ref={scrollRef}
        className="overflow-hidden"
        style={{
          display: "flex",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          whiteSpace: "nowrap",
          gap: "1.5rem",
        }}
      >
        {Content.map((content, index) => (
          <div
            key={index}
            className="flex flex-col justify-center  min-w-[25vw] relative border-2 border-gray-300 rounded-xl p-6 space-y-5 mt-5 shadow-xl transition-transform transform hover:scale-105"
            style={{
              width: "100%",
              maxWidth: `${cardWidth}px`,
              height: "350px",
              scrollSnapAlign: "start",
              flexShrink: 1,
            }}
          >
            <h3 className="font-semibold text-xl md:text-3xl sm:text-lg text-[#1A1A1A]">
              {content.title}
            </h3>
            <p className="text-lg md:text-sm sm:text-xs text-[#1A1A1A]">
              {content.subTitle}
            </p>

            <div className="">
              <p className="text-lg md:text-xl sm:text-xs text-[#1A1A1A] break-words text-ellipsis whitespace-normal">
                "{content.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurClientSay;
