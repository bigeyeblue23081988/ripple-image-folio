import { useLang } from "@/i18n/LanguageProvider";

export function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-foreground text-background scroll-mt-24">
      <div className="container-wide py-24 md:py-40">
        <p className="plate-label plate-label--invert mb-16 md:mb-24 reveal">
          {t.contact.label}
        </p>

        <div className="text-center reveal">
          <div>
            <a
              href="mailto:office@bigeyeblue.be"
              className="inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:text-accent focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
            >
              office@bigeyeblue.be
            </a>
          </div>
          <div className="mt-4">
            <a
              href="tel:+32472715544"
              className="inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:text-accent focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
            >
              +32 472 71 55 44
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
