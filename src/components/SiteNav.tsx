import { useEffect, useState } from "react";
import logo from "@/assets/house/logo-black.png";

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
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3 md:py-4" : "py-6 md:py-8"
          }`}
        >
          <a
            href="#top"
            aria-label="Bigeye Blue — back to top"
            className="shrink-0 group"
          >
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
                    className="nav-link hidden sm:inline-block text-xs md:text-sm font-bold uppercase tracking-tight text-foreground transition-colors duration-300 hover:text-accent"
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
