import { useEffect, useState } from "react";
import logo from "@/assets/house/logo.png";

const links = [
  { label: "What we create", href: "#what-we-create" },
  { label: "Filming location", href: "#filming-location" },
  { label: "Guesthouse", href: "#guesthouse" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between py-6 md:py-8">
          <a href="#top" aria-label="Bigeye Blue — back to top" className="shrink-0">
            <img
              src={logo}
              alt="Bigeye Blue"
              width={284}
              height={120}
              className="h-12 md:h-16 w-auto"
            />
          </a>

          <nav aria-label="Main" className="flex-1">
            <ul className="flex items-center justify-end sm:justify-between sm:pl-10 md:pl-24 gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hidden sm:inline-block text-xs md:text-sm font-bold uppercase tracking-tight text-foreground hover:opacity-50 transition-opacity"
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
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
