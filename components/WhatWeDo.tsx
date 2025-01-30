"use client";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

// Button Data
const ButtonList = [
  {
    id: 0,
    title: "Beauty Services",
    content:
      "Explore top beauty services including makeup, hair styling, and more.",
  },
  {
    id: 1,
    title: "Pets & Animals",
    content:
      "Discover services for your furry friends, from grooming to training.",
  },
  {
    id: 2,
    title: "Professional Services",
    content: "Find skilled professionals for all your service needs.",
  },
  {
    id: 3,
    title: "Travel & Tourism",
    content:
      "Plan your dream vacation with the best travel and tourism options.",
  },
  {
    id: 4,
    title: "Music & Art",
    content:
      "Immerse yourself in the world of music and art with our curated offerings.",
  },
  {
    id: 5,
    title: "Food & Beverages",
    content: "Savor delicious food and beverages from a variety of cuisines.",
  },
  {
    id: 6,
    title: "SAAS & Tech",
    content: "Access top healthcare services and wellness tips.",
  },
  {
    id: 7,
    title: "Healthcare",
    content: "Access top healthcare services and wellness tips.",
  },
];

const Content = ["/AftercareTips.png", "/EasyLife.png", "/Busted.png"];

export default function WhatWeDo() {
  const [activeButtonId, setActiveButtonId] = useState<number>(0);

  const handleNext = () => {
    const nextId =
      activeButtonId === ButtonList.length ? 0 : activeButtonId + 1;
    setActiveButtonId(nextId);
  };
  const handlePrevious = () => {
    const prevId =
      activeButtonId === 0 ? ButtonList.length : activeButtonId - 1;
    setActiveButtonId(prevId);
  };

  return (
    <section className="w-[80%] container mx-auto mb-40">
      {/*  Header Section  */}
      <div>
        <h1 className="text-secondary text-4xl sm:text-5xl font-bold text-center">
          See What <span className="text-primary"> We Can Do</span>
        </h1>
        <h2 className="text-secondary font-semibold text-2xl mt-6 mb-3">
          Image Posts
        </h2>

        {/* Buttons Section */}
        <div className="flex flex-row gap-4 mb-4 relative whitespace-nowrap">
          {ButtonList.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveButtonId(item.id)} // Set active button
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeButtonId === item.id
                  ? "bg-secondary text-white" // Active button styles
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Inactive button styles
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 items-center justify-end">
          <FaArrowCircleLeft
            size={24}
            className="text-secondary cursor-pointer mt-2 hover:scale-105 transition-transform"
            onClick={handlePrevious}
          />
          <FaArrowCircleRight
            size={24}
            className="text-secondary cursor-pointer mt-2 hover:scale-105 transition-transform"
            onClick={handleNext}
          />
        </div>

        {/* Display Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Content.map((image, index) => (
            <div
              key={index}
              className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={image}
                width={900}
                height={900}
                alt={`Content ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex">
          <button className="w-[20rem] mx-auto bg-primary text-primary-light px-4 py-2 my-16 rounded-lg whitespace-nowrap">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
