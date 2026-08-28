import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "default" | "echelon";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "echelon") {
    return (
      <footer className="border-t border-separator mt-auto">
        {/* Main Footer Content */}
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Studio */}
            <div className="space-y-3">
              <p className="text-label">Studio</p>
              <address className="text-sm text-foreground not-italic space-y-1">
                <p>Marcelle Defay-Wibierstraat 11</p>
                <p>9000 Gent, België</p>
              </address>
            </div>

            {/* Navigatie */}
            <div className="space-y-3">
              <p className="text-label">Navigatie</p>
              <div className="text-sm space-y-1">
                <Link to="/producties" className="block text-foreground hover:text-accent transition-colors">Producties</Link>
                <Link to="/studio" className="block text-foreground hover:text-accent transition-colors">Studio</Link>
                <Link to="/over" className="block text-foreground hover:text-accent transition-colors">Over</Link>
                <Link to="/contact" className="block text-foreground hover:text-accent transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <p className="text-label">Contact</p>
              <div className="text-sm text-foreground space-y-1">
                <a href="mailto:hallo@bigeyeblue.be" className="block hover:text-accent transition-colors">
                  hallo@bigeyeblue.be
                </a>
                <a
                  href="https://www.linkedin.com/in/mariekedermul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Juridisch */}
            <div className="space-y-3">
              <p className="text-label">Bigeye Blue BV</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>BTW BE 0797.043.951</p>
                <p>© {currentYear} Alle rechten voorbehouden</p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Scrolling Text */}
        <div className="border-t border-separator overflow-hidden py-6 md:py-8">
          <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold text-foreground mx-12"
              >
                BIGEYE BLUE
              </span>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  // Default footer
  return (
    <footer className="border-t border-separator">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <p className="font-display text-xl font-semibold">Bigeye Blue</p>
            <p className="text-muted-foreground text-sm">
              Productiehuis voor journalistieke en audiovisuele projecten
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/producties" className="hover-highlight">Producties</Link>
            <Link to="/studio" className="hover-highlight">Studio</Link>
            <Link to="/over" className="hover-highlight">Over</Link>
            <Link to="/contact" className="hover-highlight">Contact</Link>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Bigeye Blue BV</p>
            <p className="mt-1">Gent, België</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
