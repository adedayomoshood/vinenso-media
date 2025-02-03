import AboutUs from "@/components/AboutUs";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import FAQSection from "@/components/Faq";
import Hero from "@/components/Hero";
import HowITWorks from "@/components/HowITWorks";
import Plans from "@/components/Plans";
import SEOContent from "@/components/SEOContent";
import SocialMediaManagement from "@/components/SocialMediaManagement";
import StillHaveQuestions from "@/components/StillHaveQuestions";
import VideoPlans from "@/components/VideoPlans";
import WhatOurClientSay from "@/components/WhatOurClientSay";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <EverythingYouNeed />
      <WhatWeDo />
      <Plans />
      <VideoPlans />
      <SEOContent />
      <SocialMediaManagement />
      <WhatOurClientSay />
      <HowITWorks />
      <FAQSection />
      <StillHaveQuestions />
      <AboutUs />
    </>
  );
}
