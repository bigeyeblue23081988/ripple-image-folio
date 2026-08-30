import { SiteNav } from "@/components/SiteNav";
import { Figure } from "@/components/Figure";
import { Clients } from "@/components/Clients";
import { useReveal } from "@/hooks/use-reveal";

import exterior from "@/assets/house/exterior.jpg";
import hallway from "@/assets/house/hallway.jpg";
import courtyardGreen from "@/assets/house/courtyard-green.jpg";
import stairwell from "@/assets/house/stairwell.jpg";
import gardenTable from "@/assets/house/garden-table.jpg";
import kitchen from "@/assets/house/kitchen.jpg";
import guestRoom from "@/assets/house/guest-room.jpg";

const Index = () => {
  useReveal();

  return (
    <div id="top" className="min-h-screen">
      <SiteNav />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative animate-hero-zoom overflow-hidden">
          <img
            src={exterior}
            alt="The Bigeye Blue house in Ghent at dusk, a 19th-century brick facade with a contemporary glass insert"
            width={900}
            height={491}
            fetchPriority="high"
            className="w-full h-[70vh] md:h-[85vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-wide pb-10 md:pb-16 animate-fade-in-up">
              <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-3 md:mb-4">
                Production house — Ghent
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white">
                Looking beyond
                <br />
                the obvious.
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/85 max-w-md">
                A house where people and stories meet.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- Entrance hall ---------------- */}
        <section className="container-wide pt-16 md:pt-28 pb-28 md:pb-44">
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={hallway}
              alt="The entrance hall, with a floating staircase, looking through to the courtyard"
              width={630}
              height={296}
              index="02"
              caption="Entrance hall"
              className="md:col-start-8 md:col-span-5 mt-12 md:mt-0 reveal reveal--right"
            />
          </div>
        </section>

        {/* ---------------- What we create ---------------- */}
        <section
          id="what-we-create"
          className="container-wide pb-28 md:pb-44 scroll-mt-24"
        >
          <div className="md:grid md:grid-cols-12">
            <div className="md:col-start-3 md:col-span-8">
              <p className="plate-label mb-8 reveal">What we create</p>
              <h2 className="statement reveal reveal-delay-1">
                <strong>What we create.</strong>
                <span className="font-normal">
                  Interviews. Podcasts. Documentaries. Stories.
                </span>
              </h2>
              <p className="body-copy mt-8 max-w-xl reveal reveal-delay-2">
                Bigeye Blue is a production house led by journalist and
                director Marieke Dermul. We tell stories for broadcasters,
                brands and organisations — from documentary and reportage to
                podcast series and online content. Come to us with an idea;
                we develop it, record it in our own studio in Ghent, and
                produce it from first conversation to final cut.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- How we work ---------------- */}
        <section className="container-wide pb-28 md:pb-44">
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={courtyardGreen}
              alt="The inner courtyard, framed by a tall green hedge and whitewashed brick"
              width={736}
              height={402}
              index="03"
              caption="Inner courtyard"
              className="md:col-start-2 md:col-span-6 md:row-start-1 reveal reveal--left"
            />

            <div className="md:col-start-9 md:col-span-4 md:row-start-1 self-end mt-12 md:mt-0 md:pb-10 reveal reveal--right reveal-delay-1">
              <p className="plate-label mb-8">How we work</p>
              <h2 className="statement">
                <strong>How we work.</strong>
                <span className="font-normal">Ideas. Stories. Impact.</span>
              </h2>
            </div>
          </div>
        </section>

        {/* ---------------- Filming location ---------------- */}
        <section
          id="filming-location"
          className="container-wide pb-28 md:pb-44 scroll-mt-24"
        >
          <p className="plate-label mb-10 reveal">Filming location</p>

          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={stairwell}
              alt="Looking up through the industrial steel-and-glass stairwell towards the skylight"
              width={810}
              height={442}
              index="04"
              caption="Steel & glass stairwell"
              className="md:col-start-1 md:col-span-7 md:row-start-1 reveal reveal--scale"
            />

            <div className="md:col-start-9 md:col-span-4 md:row-start-1 mt-10 md:mt-0 reveal reveal--right reveal-delay-1">
              <h2 className="statement mb-5">
                <strong>A set that is already built.</strong>
              </h2>
              <p className="body-copy">
                The whole house is available as a filming location and
                recording studio for documentaries, fiction, interviews,
                podcasts, photo shoots and digital content. A unique blend of
                historic character and contemporary design creates a setting
                that is both authentic and visually compelling — fifteen
                minutes from Ghent's historic centre.
              </p>
            </div>

            <Figure
              src={gardenTable}
              alt="A long wooden table in the garden, sheltered between climbing green walls"
              width={242}
              height={153}
              index="05"
              caption="The garden table"
              className="md:col-start-9 md:col-span-4 md:row-start-2 mt-10 md:mt-16 reveal reveal--tilt-r reveal-delay-2"
            />
          </div>
        </section>

        {/* ---------------- Guesthouse ---------------- */}
        <section
          id="guesthouse"
          className="container-wide pb-28 md:pb-44 scroll-mt-24"
        >
          <p className="plate-label mb-10 reveal">Guesthouse</p>

          <h2 className="statement mb-12 md:mb-16 reveal">
            <strong>Guesthouse,</strong>
            <strong>where anyone is welcome.</strong>
          </h2>

          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <Figure
              src={kitchen}
              alt="The kitchen under whitewashed timber beams, with a wooden worktop and a long dining table"
              width={900}
              height={478}
              index="06"
              caption="The kitchen"
              className="md:col-start-1 md:col-span-6 md:row-start-1 reveal reveal--left"
            />

            <Figure
              src={guestRoom}
              alt="The guest room under white timber trusses, with a box-spring bed and skylights"
              width={1536}
              height={1024}
              index="07"
              caption="Guest room"
              className="md:col-start-8 md:col-span-5 md:row-start-1 self-end mt-10 md:mt-0 md:translate-y-20 reveal reveal--right reveal-delay-1"
            />

            <div className="md:col-start-1 md:col-span-4 md:row-start-2 mt-12 md:mt-24 reveal reveal--tilt-l reveal-delay-2">
              <p className="body-copy">
                Once a 19th-century coach house, The Industrial Loft has been
                transformed into a distinctive guest house where heritage and
                contemporary comfort exist in perfect balance.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- Clients ---------------- */}
        <section className="container-wide pb-28 md:pb-40">
          <p className="plate-label mb-14 md:mb-8 reveal">Clients</p>

          <div className="reveal">
            <Clients />
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className="bg-foreground text-background scroll-mt-24">
          <div className="container-wide py-24 md:py-40">
            <p className="plate-label plate-label--invert mb-16 md:mb-24 reveal">Contact</p>

            <div className="text-center reveal">
              <a
                href="mailto:office@bigeyeblue.be"
                className="block text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight hover:opacity-60 transition-opacity break-all sm:break-normal"
              >
                office@bigeyeblue.be
              </a>
              <a
                href="tel:+32472715544"
                className="mt-4 block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight hover:opacity-60 transition-opacity"
              >
                +32 472 71 55 44
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container-wide pb-12">
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-separator pt-6 text-xs text-foreground/50">
          <p>Bigeye Blue — Ghent, Belgium</p>
          <p>© {new Date().getFullYear()} Bigeye Blue</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
