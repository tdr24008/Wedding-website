import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Schedule from "@/components/Schedule";
import Travel from "@/components/Travel";
import Rsvp from "@/components/Rsvp";
import Registry from "@/components/Registry";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <Details />
      <Schedule />
      <Travel />
      <Rsvp />
      <Registry />
      <Faq />
      <Footer />
    </>
  );
}
