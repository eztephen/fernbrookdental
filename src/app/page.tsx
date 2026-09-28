import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import FirstVisit from "@/components/FirstVisit";
import Fees from "@/components/Fees";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TrustStrip />
      <Services />
      <FirstVisit />
      <Fees />
      <Team />
      <Testimonials />
      <Faq />
      <Booking />
    </main>
  );
}
