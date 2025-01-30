import { Card } from "./Card";

const CardData = [
  {
    id: 1,
    imageSrc: "/watch.png",
    imageAlt: "Image Post Design",
    title: "Image Post Design",
    description:
      "Custom graphics that capture attention, engage your audience, and perfectly showcase your brand’s identity",
    buttonLabel: "Get Started",
  },
  {
    id: 2,
    imageSrc: "/stream.png",
    imageAlt: "Short-Form Video Creation",
    title: "Image Post Design",
    description:
      "Scroll-stopping videos crafted with stock footage, modern edits, and a message tailored to your brand.",
    buttonLabel: "Get Started",
  },
  {
    id: 3,
    imageSrc: "/play.png",
    imageAlt: "Social Media Management",
    title: "Social Media Management",
    description:
      "Full-service management for Instagram, Facebook, Tiktok, Youtube Shorts, LinkedIn, Pinterest, and Google My Business.",
    buttonLabel: "Get Started",
  },
  {
    id: 4,
    imageSrc: "/speaker.png",
    imageAlt: "Social Media Management",
    title: "Social Media Management",
    description:
      "Full-service management for Instagram, Facebook, Tiktok, Youtube Shorts, LinkedIn, Pinterest, and Google My Business.",
    buttonLabel: "Get Started",
  },
  {
    id: 5,
    imageSrc: "/arrow.png",
    imageAlt: "SEO Content and Copywriting",
    title: "SEO Content and Copywriting",
    description:
      "Drive traffic and sales with our professional SEO content, blog posts, website copy, and sales copy tailored to your business needs.",
    buttonLabel: "Get Started",
  },
];

export default function EverythingYouNeed() {
  return (
    <section className=" my-[4rem]">
      <h1 className="text-center text-4xl md:text-5xl font-bold xl:w-2/5 lg:w-2/3 sm:w-2/3 w-[80%] m-auto 2xl:p-4">
        Everything You Need to
        <span className="text-primary-blue mb-[1rem]"> Succeed</span> Online
      </h1>
      <div className="w-[84%] mx-auto">
        <div className="w-full mx-auto p-4 grid xl:grid-cols-[repeat(3,minmax(308px,1fr))]  grid-cols-1 sm:grid-cols-2 gap-4 ">
          {CardData.map((card) => (
            <Card
              key={card.id}
              imageAlt={card.imageAlt}
              icon={card.imageSrc}
              title={card.title}
              desc={card.description}
              button={card.buttonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
