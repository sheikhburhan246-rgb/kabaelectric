import { PageHead } from "@/components/PageHead/PageHead";
import { Navigation } from "@/components/Navigation/Navigation";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { About } from "@/components/About/About";
import { Team } from "@/components/Team/Team";
import { Pricing } from "@/components/Pricing/Pricing";
import { Contact } from "@/components/Contact/Contact";
import { Location } from "@/components/Location/Location";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";

export default function KabaElectricPage() {
  return (
    <>
      <html lang="en">
        <PageHead />
        <body>
          <Navigation />
          <Hero />
          <Services />
          <About />
          <Team />
          <Pricing />
          <Contact />
          <Location />
          <Footer />
          <GlobalStyles />
        </body>
      </html>
    </>
  );
}
