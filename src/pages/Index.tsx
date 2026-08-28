import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import studioHero from "@/assets/studio-hero.jpg";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const gridImages = projects.slice(0, 8).map((p) => p.coverImage);
  const featured = projects.slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePosition({
      x: (e.clientX - rect.left - centerX) / centerX,
      y: (e.clientY - rect.top - centerY) / centerY,
    });
  };

  return (
    <Layout noPadding showEchelonFooter>
      {/* Hero */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen overflow-hidden"
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 p-12 md:p-16 w-full max-w-7xl">
            {gridImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden">
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-background/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
          <p className="text-label mb-6 animate-fade-in">Productiehuis · Gent</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground animate-fade-in-up">
            Bigeye Blue
          </h1>
          <p
            className="mt-6 max-w-2xl text-base md:text-xl text-foreground/80 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Journalistieke en audiovisuele producties die grote maatschappelijke
            thema's persoonlijk maken. Met een eigen opnamestudio in Gent.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/producties"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
            >
              Bekijk producties
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/studio"
              className="group inline-flex items-center justify-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-sm uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              Onze studio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Twee pijlers */}
      <section className="container-wide py-20 md:py-28 border-t border-separator">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-5">
            <p className="text-label">01 — Producties</p>
            <h2 className="text-headline">Verhalen die ertoe doen</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Van korte online reportages tot langere documentaires. We
              onderzoeken, schrijven, filmen en monteren — voor omroepen,
              cultuurhuizen en organisaties die een verhaal ernstig nemen.
            </p>
            <Link
              to="/producties"
              className="inline-flex items-center gap-3 text-accent hover:gap-4 transition-all"
            >
              Alle producties <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-5">
            <p className="text-label">02 — Studio</p>
            <h2 className="text-headline">Een echte opnamestudio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In Gent beschikken we over een eigen studio voor video- en
              audio-opnames. Interviews, podcasts, kennisclips — met of zonder
              onze ploeg erbij.
            </p>
            <Link
              to="/studio"
              className="inline-flex items-center gap-3 text-accent hover:gap-4 transition-all"
            >
              Ontdek de studio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Uitgelicht werk */}
      <section className="container-wide pb-20 md:pb-28">
        <div className="flex items-end justify-between mb-10 gap-6">
          <h2 className="text-headline">Uitgelicht</h2>
          <Link
            to="/producties"
            className="text-sm text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
          >
            Alles bekijken
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.id}
              to={`/producties/${project.id}`}
              className="group block image-reveal"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 space-y-1">
                <p className="text-label">
                  {project.category} · {project.year}
                </p>
                <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Studio strip */}
      <section className="relative overflow-hidden border-t border-separator">
        <img
          src={studioHero}
          alt="De opnamestudio van Bigeye Blue in Gent"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container-wide py-24 md:py-32 text-center">
          <h2 className="text-headline mb-4">Iets op te nemen?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Boek de studio in Gent, of laat ons het volledige traject verzorgen —
            van research tot eindmontage.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
          >
            Neem contact op <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
