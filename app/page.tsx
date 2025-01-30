import EverythingYouNeed from "@/components/EverythingYouNeed";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <EverythingYouNeed />

      <WhatWeDo />
    </>
  );
}
