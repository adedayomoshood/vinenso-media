import Image from "next/image";

const FeatureCard = ({
  title,
  description,
  icon,
  bgColor,
}: {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}) => (
  <div className="flex flex-col items-center space-y-4 p-6">
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor}`}
    >
      <Image
        src={icon}
        alt={title}
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  </div>
);

const features = [
  {
    title: "High-Quality Content Creation",
    description:
      "Professionally designed image posts, short-form videos, and blog posts.",
    icon: "/papers.png",
    bgColor: "bg-secondary",
  },
  {
    title: "Flexible Monthly Plans",
    description:
      "Starting at just $50 per month—perfect for businesses of all sizes.",
    icon: "/dollar.png",
    bgColor: "bg-primary-blue",
  },
  {
    title: "Stress-Free Social Media",
    description:
      "Let us handle posting and strategy while you focus on your business.",
    icon: "/media.png",
    bgColor: "bg-primary",
  },
  {
    title: "Results You Can See",
    description:
      "Drive engagement, reach, and conversions with our proven methods.",
    icon: "/presentation.png",
    bgColor: "bg-primary-lightGray",
  },
];

export default function SocialMediaManagement() {
  return (
    <section className="px-6 py-10 w-[70%] mx-auto my-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Social Media Management That Fits Your Budget
      </h1>
      <article className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
          />
        ))}
      </article>
    </section>
  );
}
