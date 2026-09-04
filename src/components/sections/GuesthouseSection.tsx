import { Figure } from "@/components/Figure";
import { useLang } from "@/i18n/LanguageProvider";

import kitchen from "@/assets/house/kitchen.jpg";
import guestRoom from "@/assets/house/guest-room.jpg";
import bathroom from "@/assets/house/bathroom.jpg";

export function GuesthouseSection() {
  const { t } = useLang();

  return (
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
          index="07"
          caption={t.figures.kitchenCaption}
          className="md:col-start-1 md:col-span-6 md:row-start-1 reveal"
        />

        <Figure
          src={guestRoom}
          alt={t.figures.guestRoomAlt}
          width={1536}
          height={1024}
          index="08"
          caption={t.figures.guestRoomCaption}
          className="md:col-start-8 md:col-span-5 md:row-start-1 self-end mt-10 md:mt-0 md:translate-y-20 reveal reveal-delay-1"
        />

        <div className="md:col-start-1 md:col-span-4 md:row-start-2 mt-12 md:mt-24 reveal">
          <p className="body-copy">{t.guesthouse.body}</p>
          <a href="#contact" className="btn-quiet mt-8 inline-block">
            {t.hero.ctaPrimary}
          </a>
        </div>

        <Figure
          src={bathroom}
          alt={t.figures.bathroomAlt}
          width={1920}
          height={1278}
          index="09"
          caption={t.figures.bathroomCaption}
          className="md:col-start-6 md:col-span-6 md:row-start-2 mt-12 md:mt-44 reveal reveal-delay-1"
        />
      </div>
    </section>
  );
}
