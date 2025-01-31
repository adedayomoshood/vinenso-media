"use client";

import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const plans = [
  {
    title: "Starter Plan",
    price: "$50/month",
    titleColor: "text-[#34CB00]",
    bgColor: "bg-[#71FF3F33]",
    features: [
      { text: "4 Image Posts", image: "/ai-image.png" },
      { text: "2 Short Form Videos", image: "/ai-video.png" },
      { text: "1 Platform Managed", image: "/browser.png" },
      {
        text: "Branded Posts, Captions & Hashtags",
        image: "/chart-relationship.png",
      },
      { text: "Review Your Content", image: "/setting-done-03.png" },
      { text: "Scheduling & Posting", image: "/clock-03.png" },
      { text: "Dedicated Social Media Manager", image: "/user-shield-01.png" },
      { text: "Support When You Need It", image: "/security-check.png" },
      { text: "Monthly Analytics Reports", image: "/analytics-up.png" },
    ],
    featureColors: ["text-green-500", "text-green-500", "text-green-500"],
    cardColor: "bg-gray-100",
  },
  {
    title: "Growth Plan",
    price: "$100/month",
    titleColor: "text-[#22BABA]",
    bgColor: "bg-[#3FFFFF1A]",
    features: [
      { text: "10 Image Posts", image: "/ai-imageG.png" },
      { text: "4 Short Form Videos", image: "/ai-videoG.png" },
      { text: "2 Platform Managed", image: "/browserG.png" },
      {
        text: "Branded Posts, Captions & Hashtags",
        image: "/chart-relationship.png",
      },
      { text: "Review Your Content", image: "/setting-done-03.png" },
      { text: "Scheduling & Posting", image: "/clock-03.png" },
      { text: "Dedicated Social Media Manager", image: "/user-shield-01.png" },
      { text: "Support When You Need It", image: "/security-check.png" },
      { text: "Monthly Analytics Reports", image: "/analytics-up.png" },
    ],
    featureColors: ["text-[#17AEAE]", "text-[#17AEAE]", "text-[#17AEAE]"],
    cardColor: "bg-gray-200",
  },
  {
    title: "Advanced Plan",
    price: "$200/month",
    titleColor: "text-[#DE7800]",
    bgColor: "bg-[#FFC90A33]",
    features: [
      { text: "20 Image Posts", image: "/ai-imageA.png" },
      { text: "3 Short Form Videos", image: "/ai-videoA.png" },
      { text: "3 Platform Managed", image: "/browserA.png" },
      {
        text: "Branded Posts, Captions & Hashtags",
        image: "/chart-relationship.png",
      },
      { text: "Review Your Content", image: "/setting-done-03.png" },
      { text: "Scheduling & Posting", image: "/clock-03.png" },
      { text: "Dedicated Social Media Manager", image: "/user-shield-01.png" },
      { text: "Support When You Need It", image: "/security-check.png" },
      { text: "Monthly Analytics Reports", image: "/analytics-up.png" },
    ],
    featureColors: ["text-[#DE7800]", "text-[#DE7800]", "text-[#DE7800]"],
    cardColor: "bg-gray-300",
  },
];

const Header = () => (
  <div className="text-center my-8">
    <h1 className="text-primary-white text-4xl sm:text-5xl font-bold">
      Plans That Grow With <span className="text-blue-800">You</span>
    </h1>
  </div>
);

const ScrollButton = ({ direction }: { direction: "left" | "right" }) => {
  const Icon = direction === "left" ? FaArrowCircleLeft : FaArrowCircleRight;
  return (
    <Icon
      size={30}
      className="text-secondary cursor-pointer hover:scale-110 transition-transform"
    />
  );
};

type PlanProps = {
  plan: {
    title: string;
    price: string;
    titleColor: string;
    bgColor: string;
    features?: { text: string; image: string }[];
    featureColors?: string[];
    cardColor?: string;
  };
};

const PlanCard = ({ plan }: PlanProps) => {
  return (
    <article className={`border border-[#D8D8D8] p-6 rounded-xl shadow-lg `}>
      <PlanTitle
        price={plan.price}
        title={plan.title}
        titleColor={plan.titleColor}
        bgColor={plan.bgColor}
      />
      <PlanFeatures
        features={plan.features || []}
        featureColors={plan.featureColors || []}
      />
      <PlanActions />
    </article>
  );
};

const PlanTitle = ({
  price,
  title,
  titleColor,
  bgColor,
}: PlanProps["plan"]) => (
  <div>
    <h3
      className={`w-[7.5rem] p-1 mx-auto text-[1.1rem] font-semibold text-center rounded-full ${bgColor} ${titleColor}`}
    >
      {price}
    </h3>
    <p className="text-center text-xl font-bold my-3">{title}</p>
  </div>
);

const PlanFeatures = ({
  features,
  featureColors,
}: {
  features: { text: string; image: string }[];
  featureColors: string[];
}) => {
  return (
    <ul className="space-y-2 text-gray-700">
      {features.map((feature, index) => (
        <li
          key={index}
          className={`flex items-center gap-2 ${
            featureColors[index] || "text-black"
          }`}
        >
          <Image
            src={feature.image}
            width={20}
            height={20}
            alt={feature.text}
          />
          {feature.text}
        </li>
      ))}
    </ul>
  );
};

const PlanActions = () => (
  <div className="mt-4 flex flex-col gap-3">
    <button className="border-2 border-secondary text-secondary py-2 rounded-lg w-full">
      Chat with Sales
    </button>
    <button className="bg-primary hover:bg-red-700 text-primary-light py-2 rounded-lg w-full">
      Get Started
    </button>
  </div>
);

export default function Plans() {
  return (
    <section className="w-[90%] max-w-6xl mx-auto mb-40">
      <Header />
      <div className="flex justify-between items-center">
        <h3 className="text-[#333333] text-3xl font-bold mt-6 ml-5">
          Social Media Management
        </h3>
        <div className="flex gap-3">
          <ScrollButton direction="left" />
          <ScrollButton direction="right" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
