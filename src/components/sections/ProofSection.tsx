import { useLang } from "@/i18n/LanguageProvider";

/**
 * Proof: awards and nominations, stated plainly and large.
 */
export function ProofSection() {
  const { t } = useLang();

  return (
    <section className="container-wide pb-28 md:pb-40">
      <p className="plate-label mb-10 reveal">{t.proof.label}</p>

      <div className="md:grid md:grid-cols-12 md:gap-x-12">
        <h2 className="statement md:col-start-1 md:col-span-4 reveal">
          <strong>
            {t.proof.title}
            <span className="text-accent">.</span>
          </strong>
        </h2>

        <ul className="md:col-start-6 md:col-span-7 mt-8 md:mt-2 reveal reveal-delay-1">
          {t.proof.items.map((item) => (
            <li key={item.k} className="border-t border-separator py-5 md:py-6">
              <p className="text-lg md:text-2xl font-bold tracking-tight">
                {item.k}
              </p>
              <p className="mt-1.5 body-copy">{item.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
