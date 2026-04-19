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
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Story />
        <Details />
        <Schedule />
        <Travel />
        <Rsvp />
        <Registry />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
