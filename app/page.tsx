import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";
import Amenities from "@/components/sections/Amenities";
import Configuration from "@/components/sections/Configuration";
import FloorPlans from "@/components/sections/FloorPlans";
import Connectivity from "@/components/sections/Connectivity";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import Preloader from "@/components/Preloader";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Preloader />
      <JsonLd />
      <Hero />
      <Overview />
      <About />
      <Highlights />
      <Amenities />
      <Configuration />
      <FloorPlans />
      <Connectivity />
      <Faq />
      <Contact />
      <RevealObserver />
    </>
  );
}
