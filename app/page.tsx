import AboutUs from "@/components/AboutUs";
import Luxury from "@/components/Luxury";
import HomeHero from "@/components/home/HomeHero";
import Host from "@/components/home/Host";
import OurProperties from "@/components/home/OurProperties";
import OurRegion from "@/components/home/OurRegion";
import TopVillas from "@/components/home/TopVillas";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TopVillas />
      <OurRegion />
      <OurProperties />
      <Host/>
      <AboutUs />
      <Luxury />
    </>
  );
}
