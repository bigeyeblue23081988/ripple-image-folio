import { useEffect, useState } from "react";
import logo from "@/assets/house/logo-black.png";
import { useLang } from "@/i18n/LanguageProvider";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLang();

  const links = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.create, href: "#what-we-create" },
    { label: t.nav.location, href: "#filming-location" },
    { label: t.nav.guesthouse, href: "#guesthouse" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langBtn = (code: "en" | "nl") => (
    <button
      key={code}
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      aria-label={code === "en" ? "English" : "Nederlands"}
      className={`text-xs md:text-sm font-bold uppercase tracking-tight transition-colors duration-300 hover:text-accent ${
        lang === code ? "text-foreground" : "text-foreground/35"
      }`}
    >
      {code}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3 md:py-4" : "py-6 md:py-8"
          }`}
        >
          <a href="#top" aria-label={t.nav.backToTop} className="shrink-0 group">
            <img
              src={logo}
              alt="Bigeye Blue"
              className={`w-auto transition-all duration-500 group-hover:scale-[1.02] ${
                scrolled ? "h-8 md:h-10" : "h-10 md:h-14"
              }`}
            />
          </a>

          <nav aria-label="Main" className="flex-1">
            <ul className="flex items-center justify-end sm:justify-between sm:pl-10 md:pl-24 gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hidden sm:inline-block text-xs md:text-sm font-bold uppercase tracking-tight text-foreground transition-colors duration-300 hover:text-accent"

                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="sm:hidden">
                <a
                  href="#contact"
                  className="text-[13px] font-bold uppercase text-foreground"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                {langBtn("en")}
                <span aria-hidden className="text-foreground/25 text-xs">
                  /
                </span>
                {langBtn("nl")}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
