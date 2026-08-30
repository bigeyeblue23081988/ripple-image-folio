import { SiteNav } from "@/components/SiteNav";
import { Figure } from "@/components/Figure";
import { Clients } from "@/components/Clients";
import { TickerBand } from "@/components/TickerBand";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useLang } from "@/i18n/LanguageProvider";

import exterior from "@/assets/house/exterior.jpg";
import hallway from "@/assets/house/hallway.jpg";
import courtyardGreen from "@/assets/house/courtyard-green.jpg";
import stairwell from "@/assets/house/stairwell.jpg";
import gardenTable from "@/assets/house/garden-table.jpg";
import kitchen from "@/assets/house/kitchen.jpg";
import guestRoom from "@/assets/house/guest-room.jpg";

const Index = () => {
  const { t, lang } = useLang();
  useReveal(lang);
  useParallax(lang);

  return (
    <div id="top" key={lang} className="min-h-screen">
      <SiteNav />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="container-wide pt-2 pb-28 md:pb-44">
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <div className="relative md:col-start-1 md:col-span-8 md:row-start-1">
              <Figure
                src={exterior}
                alt={t.figures.houseAlt}
                width={900}
                height={491}
                index="01"
                caption={t.figures.houseCaption}
                sub={t.figures.houseSub}
                priority
                className="animate-hero-zoom"
              />
            </div>

            <div className="md:col-start-10 md:col-span-3 md:row-start-1 self-center mt-10 md:mt-0">
              <h1 className="statement">
                <strong>
                  <span className="hero-mask">
                    <span className="hero-line">{t.hero.line1}</span>
                  </span>
                  <span className="hero-mask">
                    <span className="hero-line hero-line--2">
                      {t.hero.line2}
                      <span className="text-accent">.</span>
                    </span>
                  </span>
                </strong>
                <span className="font-normal hero-mask">
                  <span className="hero-line hero-line--2">{t.hero.sub}</span>
                </span>
              </h1>
            </div>

            <Figure
              src={hallway}
              alt={t.figures.hallAlt}
              width={630}
              height={296}
              index="02"
              caption={t.figures.hallCaption}
              className="md:col-start-8 md:col-span-5 md:row-start-2 mt-12 md:mt-20 reveal reveal--right"
            />
          </div>
        </section>

        <TickerBand className="mb-28 md:mb-44" />

        {/* ---------------- What we create ---------------- */}
        <section
          id="what-we-create"
          className="container-wide pb-28 md:pb-44 scroll-mt-24"
        >
          <div className="md:grid md:grid-cols-12">
            <div className="md:col-start-3 md:col-span-8">
              <p className="plate-label mb-8 reveal">{t.create.label}</p>
              <h2 className="statement reveal reveal-delay-1">
                <strong>
                  {t.create.titleStrong}
                  <span className="text-accent">.</span>
                </strong>
                <span className="font-normal">{t.create.titleLight}</span>
              </h2>
              <p className="body-copy mt-8 max-w-xl reveal reveal-delay-2">
                {t.create.body}
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- How we work ---------------- */}
        <section className="container-wide pb-28 md:pb-44">
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={courtyardGreen}
              alt={t.figures.courtyardAlt}
              width={736}
              height={402}
              index="03"
              caption={t.figures.courtyardCaption}
              className="md:col-start-2 md:col-span-6 md:row-start-1 reveal reveal--left"
            />

            <div className="md:col-start-9 md:col-span-4 md:row-start-1 self-end mt-12 md:mt-0 md:pb-10 reveal reveal--right reveal-delay-1">
              <p className="plate-label mb-8">{t.how.label}</p>
              <h2 className="statement">
                <strong>
                  {t.how.titleStrong}
                  <span className="text-accent">.</span>
                </strong>
                <span className="font-normal">
                  {t.how.words.map((word) => (
                    <span key={word}>
                      {word}
                      <span className="text-accent">.</span>{" "}
                    </span>
                  ))}
                </span>
              </h2>
            </div>
          </div>
        </section>

        {/* ---------------- Filming location ---------------- */}
        <section
          id="filming-location"
          className="container-wide pb-28 md:pb-44 scroll-mt-24"
        >
          <p className="plate-label mb-10 reveal">{t.location.label}</p>

          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={stairwell}
              alt={t.figures.stairwellAlt}
              width={810}
              height={442}
              index="04"
              caption={t.figures.stairwellCaption}
              className="md:col-start-1 md:col-span-7 md:row-start-1 reveal reveal--scale"
            />

            <div className="md:col-start-9 md:col-span-4 md:row-start-1 mt-10 md:mt-0 reveal reveal--right reveal-delay-1">
              <h2 className="statement mb-5">
                <strong>
                  {t.location.titleStrong}
                  <span className="text-accent">.</span>
                </strong>
              </h2>
              <p className="body-copy">{t.location.body}</p>
            </div>

            <Figure
              src={gardenTable}
              alt={t.figures.gardenAlt}
              width={242}
              height={153}
              index="05"
              caption={t.figures.gardenCaption}
              className="md:col-start-9 md:col-span-4 md:row-start-2 mt-10 md:mt-16 reveal reveal--tilt-r reveal-delay-2"
            />
          </div>
        </section>

        {/* ---------------- Guesthouse ---------------- */}
        <section
          id="guesthouse"
          className="container-wide pb-28 md:pb-44 scroll-mt-24"
        >
          <p className="plate-label mb-10 reveal">{t.guesthouse.label}</p>

          <h2 className="statement mb-12 md:mb-16 reveal">
            <strong>{t.guesthouse.titleLine1}</strong>
            <strong>
              {t.guesthouse.titleLine2}
              <span className="text-accent">.</span>
            </strong>
          </h2>

          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={kitchen}
              alt={t.figures.kitchenAlt}
              width={900}
              height={478}
              index="06"
              caption={t.figures.kitchenCaption}
              className="md:col-start-1 md:col-span-6 md:row-start-1 reveal reveal--left"
            />

            <Figure
              src={guestRoom}
              alt={t.figures.guestRoomAlt}
              width={1536}
              height={1024}
              index="07"
              caption={t.figures.guestRoomCaption}
              className="md:col-start-8 md:col-span-5 md:row-start-1 self-end mt-10 md:mt-0 md:translate-y-20 reveal reveal--right reveal-delay-1"
            />

            <div className="md:col-start-1 md:col-span-4 md:row-start-2 mt-12 md:mt-24 reveal reveal--tilt-l reveal-delay-2">
              <p className="body-copy">{t.guesthouse.body}</p>
            </div>
          </div>
        </section>

        {/* ---------------- Clients ---------------- */}
        <section className="container-wide pb-28 md:pb-40">
          <p className="plate-label mb-14 md:mb-8 reveal">{t.clients.label}</p>

          <div className="reveal">
            <Clients />
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <TickerBand />
        <section id="contact" className="bg-foreground text-background scroll-mt-24">
          <div className="container-wide py-24 md:py-40">
            <p className="plate-label plate-label--invert mb-16 md:mb-24 reveal">
              {t.contact.label}
            </p>

            <div className="text-center reveal">
              <div>
                <a
                  href="mailto:office@bigeyeblue.be"
                  className="u-sweep inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:text-accent"
                >
                  office@bigeyeblue.be
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="tel:+32472715544"
                  className="u-sweep inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:text-accent"
                >
                  +32 472 71 55 44
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container-wide pb-12">
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-separator pt-6 text-xs text-foreground/50">
          <p>{t.footer.place}</p>
          <p>© {new Date().getFullYear()} Bigeye Blue</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
