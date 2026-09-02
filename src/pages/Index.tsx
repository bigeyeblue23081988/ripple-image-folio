import { SiteNav } from "@/components/SiteNav";
import { TickerBand } from "@/components/TickerBand";
import { HeroSection } from "@/components/sections/HeroSection";
import { CreateSection } from "@/components/sections/CreateSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { GuesthouseSection } from "@/components/sections/GuesthouseSection";
import { PracticalSection } from "@/components/sections/PracticalSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useLang } from "@/i18n/LanguageProvider";

const currentYear = new Date().getFullYear();

const Index = () => {
  const { t, lang } = useLang();
  useReveal(lang);
  useParallax(lang);

  return (
    <div id="top" key={lang} className="min-h-screen">
      <SiteNav />

      <main>
        <HeroSection />
        <TickerBand className="mb-28 md:mb-44" />
        <CreateSection />
        <LocationSection />
        <GuesthouseSection />
        <PracticalSection />
        <ClientsSection />
        <TickerBand />
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
