"use client";

interface PlanCardProps {
  price: string;
  words: string;
  title: string;
  description: string;
}

const PlanCard = ({ price, words, title, description }: PlanCardProps) => (
  <article className="bg-[#F5FEFF] md:w-[40%] w-[43%] max-w-[446px] min-w-[400px] border border-[#F5FEFF] p-6 rounded-xl shadow-lg ">
    <div className="flex flex-col justify-center items-center">
      <h3 className="w-[10rem] text-[#22BABA] p-1 mx-auto text-[1.1rem] font-bold text-center rounded-full bg-[#3FFFFF1A]">
        {`$${price}/${words}`}
      </h3>
      <p className="text-center text-xl font-bold my-4 md:my-2 mb-4">{title}</p>
      <p className="my-4 md:my-2 mb-4 ">{description}</p>

      <button className="bg-primary text-primary-light text-center p-2 rounded-lg">
        Get Started for $50 Today
      </button>
    </div>
  </article>
);

const PlanSection = () => {
  const plans = [
    {
      price: "50",
      words: "1000",
      title: "Blog Post",
      description:
        "Get blog posts and SEO content that’s written to attract, inform, and keep your audience coming back. Share valuable insights and improve your website’s search rankings.",
    },
    {
      price: "100",
      words: "2500",
      title: "Copywriting",
      description:
        "Compelling sales and ad copy that captures attention and drives action. Perfect for boosting conversions across websites, ads, and marketing materials.",
    },
  ];

  return (
    <div className="flex flex-col xl:w-[73%]  lg:w-[87%]  md:w-[73%] w-[98%] m-auto text-secondary ">
      <h3 className="text-2xl mb-6 font-bold text-center lg:text-left">
        {" "}
        SEO Content and Copywriting
      </h3>
      <section className="flex flex-wrap gap-8 sm:gap-10 md:gap-12  lg:gap:16 xl:gap-20 justify-center">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            price={plan.price}
            words={plan.words}
            title={plan.title}
            description={plan.description}
          />
        ))}
      </section>
    </div>
  );
};

export default PlanSection;
