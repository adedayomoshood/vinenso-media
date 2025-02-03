"use client";
import { useState } from "react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "What does the $99 plan include?",
      answer:
        "Our $99 plan includes full social media management, content scheduling, analytics reports, and audience engagement across multiple platforms.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply sign up on our website, choose a plan that fits your needs, and our team will contact you to begin the onboarding process.",
    },
    {
      question: "Do you create custom content for my brand?",
      answer:
        "Yes! We tailor all content, including images, videos, and written posts, to align with your brand's voice and audience preferences.",
    },
    {
      question: "What social media platforms do you manage?",
      answer:
        "We manage a variety of platforms, including Facebook, Instagram, Twitter, LinkedIn, and TikTok. If you have specific platform requests, let us know!",
    },
    {
      question: "Do you provide performance analytics and reports?",
      answer:
        "Yes! We offer detailed performance reports, including engagement rates, audience insights, and growth metrics to help you track progress.",
    },
  ];

  return (
    <section className="px-6 py-10 w-full max-w-3xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Got Questions? We Have Answers!
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
