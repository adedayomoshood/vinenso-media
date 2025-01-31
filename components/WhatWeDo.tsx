"use client";
import ScrollableContent from "./ScrollableContent";

// Data for button and image sets
const buttonList = [
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
const videoList = [
  {
    id: 0,
    title: "Health and Wellness",
    content:
      "Explore top beauty services including makeup, hair styling, and more.",
  },
  {
    id: 1,
    title: "Real Estate",
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
    title: "Restaurant",
    content:
      "Plan your dream vacation with the best travel and tourism options.",
  },
  {
    id: 4,
    title: "Travel and Tourism",
    content:
      "Immerse yourself in the world of music and art with our curated offerings.",
  },
  {
    id: 5,
    title: "Financial Services",
    content: "Savor delicious food and beverages from a variety of cuisines.",
  },
  {
    id: 6,
    title: "Electronics",
    content: "Access top healthcare services and wellness tips.",
  },
  {
    id: 7,
    title: "SaaS and Tech",
    content: "Access top healthcare services and wellness tips.",
  },
];
const seoContent = [
  {
    id: 0,
    title: "Blog Posts",
    content:
      "Explore top beauty services including makeup, hair styling, and more.",
  },
  {
    id: 1,
    title: "Sales Copy",
    content:
      "Discover services for your furry friends, from grooming to training.",
  },
  {
    id: 2,
    title: "Website Copy",
    content: "Find skilled professionals for all your service needs.",
  },
  {
    id: 3,
    title: "Company Profile and Brochure",
    content:
      "Plan your dream vacation with the best travel and tourism options.",
  },
  {
    id: 4,
    title: "Video Scripts",
    content:
      "Immerse yourself in the world of music and art with our curated offerings.",
  },
  {
    id: 5,
    title: "Press Release",
    content: "Savor delicious food and beverages from a variety of cuisines.",
  },
  {
    id: 6,
    title: "E-book",
    content: "Access top healthcare services and wellness tips.",
  },
];

const contentImages = ["/AftercareTips.png", "/EasyLife.png", "/Busted.png"];
const contentImages2 = [
  "/VideoRealEstate.png",
  "/HomeMaintainance.png",
  "/VideoRestaurant.png",
];

export default function WhatWeDo() {
  // Data array for dynamic rendering
  const dataArrays = [
    { contentHeading: "Services Categories", buttonList, contentImages },
    {
      contentHeading: "Video Content",
      buttonList: videoList,
      contentImages: contentImages2,
    },
    {
      contentHeading: "Seo Content",
      buttonList: seoContent,
      contentImages: contentImages2,
    },
  ];

  return (
    <section className="w-[80%] container mx-auto mb-40">
      {/* Header Section */}
      <div>
        <h1 className="text-secondary text-4xl sm:text-5xl font-bold text-center">
          See What <span className="text-primary"> We Can Do</span>
        </h1>

        {/* Dynamically rendering multiple ScrollableContent */}
        {dataArrays.map((data, index) => (
          <ScrollableContent
            key={index}
            contentHeading={data.contentHeading}
            buttonList={data.buttonList}
            contentImages={data.contentImages}
          />
        ))}
      </div>
    </section>
  );
}
