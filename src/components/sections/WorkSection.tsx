import { useLang } from "@/i18n/LanguageProvider";

import rainbowNation from "@/assets/rainbow-nation.jpg";
import popsong from "@/assets/european-citizen-popsong.jpg";
import jongEenzaam from "@/assets/jong-en-eenzaam.jpg";

const images = [rainbowNation, popsong, jongEenzaam];

/**
 * Recent work: three cases carrying the proof — image, client, one line.
 */
export function WorkSection() {
  const { t } = useLang();

  return (
    <section id="work" className="container-wide pb-28 md:pb-40 scroll-mt-24">
      <p className="plate-label mb-10 reveal">{t.work.label}</p>

      <h2 className="statement text-4xl md:text-6xl lg:text-7xl mb-12 md:mb-20 reveal">
        <strong>
          {t.work.title}
          <span className="text-accent">.</span>
        </strong>
      </h2>

      <div className="grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
        {t.work.items.map((item, i) => (
          <article
            key={item.title}
            className={`group reveal ${
              i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""
            }`}
          >
            <div className="overflow-hidden bg-secondary">
              <img
                src={images[i]}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-[11px] font-bold tracking-[0.14em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {item.title}
              </h3>
            </div>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/50">
              {item.meta}
            </p>
            <p className="mt-3 body-copy">{item.text}</p>
          </article>
        ))}
      </div>

      <a href="#contact" className="btn-quiet mt-12 md:mt-16 inline-block reveal">
        {t.work.cta}
      </a>
    </section>
  );
}
