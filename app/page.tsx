import HomeHero from "@/components/home/HomeHero";
import OurProperties from "@/components/home/OurProperties";
import OurRegion from "@/components/home/OurRegion";
import TopVillas from "@/components/home/TopVillas";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TopVillas />
      <OurRegion />
      <OurProperties />
    </>
  );
}
