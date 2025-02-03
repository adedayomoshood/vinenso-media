import EverythingYouNeed from "@/components/EverythingYouNeed";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import SEOContent from "@/components/SEOContent";
import SocialMediaManagement from "@/components/SocialMediaManagement";
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
    </>
  );
}
