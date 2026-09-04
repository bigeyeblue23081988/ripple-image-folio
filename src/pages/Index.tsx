import { SiteNav } from "@/components/SiteNav";
import { TickerBand } from "@/components/TickerBand";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowreelSection } from "@/components/sections/ShowreelSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { CreateSection } from "@/components/sections/CreateSection";

import { AboutSection } from "@/components/sections/AboutSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { GuesthouseSection } from "@/components/sections/GuesthouseSection";
import { PracticalSection } from "@/components/sections/PracticalSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { SeoTextSection } from "@/components/sections/SeoTextSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useReveal } from "@/hooks/use-reveal";
import { useLang } from "@/i18n/LanguageProvider";

const currentYear = new Date().getFullYear();

const Index = () => {
  const { t, lang } = useLang();
  useReveal(lang);

  return (
    <div id="top" key={lang} className="min-h-screen">
      <SiteNav />

      <main>
        <HeroSection />
        <TickerBand className="mb-28 md:mb-44" />
        <ShowreelSection />
        <WorkSection />
        <CreateSection />
        <StatementBand />
        <AboutSection />
        <ProofSection />
        <ClientsSection />
        <LocationSection />
        <GuesthouseSection />
        <PracticalSection />
        <TickerBand className="hidden md:block" />
        <SeoTextSection />
        <ContactSection />
      </main>


      <footer className="container-wide pb-12">
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-separator pt-6 text-xs text-foreground/50">
          <p>{t.footer.place}</p>
          <p>© {currentYear} Bigeye Blue</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
