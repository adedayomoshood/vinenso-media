"use client";

import Image from "next/image";

const HowITWorks: React.FC = () => {
  const Content = [
    {
      title: "Choose your plan starting at $50/month.",
      description:
        "Find the perfect package to grow your online presence without breaking the bank. Affordable plans tailored to meet your business goals.",
      Image: "/dollar-01.png",
    },
    {
      title: "Custom Image Posts and Short-Form Videos Made for Your Brand",
      description:
        "Stand out with professional visuals and videos designed specifically for your business. Every piece of content reflects your brand’s unique style and messaging.!",
      Image: "/diamond-02.png",
    },
    {
      title: "We Handle Posting and Engagement, So You Don’t Have To",
      description:
        "Stay consistent without the hassle. From posting to optimizing for engagement and growth, we take care of everything while you focus on running your business.",
      Image: "/rocket-01.png",
    },
  ];

  const contentHeading = "Here is What Our Clients Say About Us";

  const cardWidth = 400;

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto my-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-secondary-dark text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
        {contentHeading}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {Content.map((content, index) => (
          <div
            key={index}
            className="flex flex-col justify-center min-w-[280px] max-w-[100%] sm:max-w-[350px] lg:max-w-[400px] relative border-2 border-gray-300 rounded-xl p-6 space-y-6 mt-5 shadow-xl transition-transform transform hover:scale-105 break-words text-ellipsis whitespace-normal"
            style={{
              height: "440px",
              scrollSnapAlign: "start",
              flexShrink: 1,
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Image
              src={content.Image}
              width={60} // Adjusted image size for better responsiveness
              height={60}
              alt="icons"
              className="mx-auto"
            />

            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl text-[#1A1A1A] text-center">
              {content.title}
            </h3>

            <p className="text-md md:text-lg lg:text-xl text-[#1A1A1A] mb-10 text-center">
              "{content.description}"
            </p>
          </div>
        ))}
      </div>
      <button className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-primary hover:bg-red-700 text-primary-light py-2 rounded-lg mt-8 mx-auto block">
        Sign Up Now
      </button>
    </div>
  );
};

export default HowITWorks;
