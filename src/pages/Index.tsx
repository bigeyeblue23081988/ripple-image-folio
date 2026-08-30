import { SiteNav } from "@/components/SiteNav";
import { useReveal } from "@/hooks/use-reveal";
import { clients } from "@/data/clients";

import exterior from "@/assets/house/exterior.jpg";
import hallway from "@/assets/house/hallway.jpg";
import courtyardGreen from "@/assets/house/courtyard-green.jpg";
import stairwell from "@/assets/house/stairwell.jpg";
import gardenTable from "@/assets/house/garden-table.jpg";
import guestCourtyard from "@/assets/house/guest-courtyard.jpg";
import bedroom from "@/assets/house/bedroom.jpg";
import lampSoftbox from "@/assets/house/lamp-softbox.png";
import lampSpot from "@/assets/house/lamp-spot.png";

const Index = () => {
  useReveal();

  return (
    <div id="top" className="min-h-screen">
      <SiteNav />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="container-wide pt-4 pb-24 md:pb-40">
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            {/* Exterior */}
            <figure className="md:col-start-1 md:col-span-7 md:row-start-1 animate-fade-in">
              <img
                src={exterior}
                alt="The Bigeye Blue house in Ghent at dusk, a 19th-century brick facade with a contemporary glass insert"
                width={900}
                height={600}
                fetchPriority="high"
                className="w-full h-auto"
              />
            </figure>

            {/* Statement */}
            <div className="md:col-start-9 md:col-span-4 md:row-start-1 mt-8 md:mt-1 animate-fade-in-up">
              <h1 className="statement">
                <strong>Looking beyond the obvious.</strong>
                <span className="font-normal">
                  A house where people and stories meet.
                </span>
              </h1>
            </div>

            {/* Hallway */}
            <figure className="md:col-start-8 md:col-span-5 md:row-start-2 mt-10 md:mt-16 reveal">
              <img
                src={hallway}
                alt="The entrance hall, with a floating staircase and a blue sculpture, looking through to the courtyard"
                width={630}
                height={420}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>
          </div>
        </section>

        {/* ---------------- What we create ---------------- */}
        <section
          id="what-we-create"
          className="container-wide pb-28 md:pb-48 scroll-mt-24"
        >
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 items-end">
            <div className="col-span-4 sm:col-span-3 md:col-start-2 md:col-span-2 reveal">
              <img
                src={lampSoftbox}
                alt=""
                aria-hidden="true"
                width={1344}
                height={756}
                loading="lazy"
                className="w-full h-auto max-w-[190px]"
              />
            </div>

            <div className="col-span-8 sm:col-span-9 md:col-start-4 md:col-span-6 pb-4 md:pb-8 reveal">
              <h2 className="statement">
                <strong>What we create.</strong>
                <span className="font-normal">
                  Interviews. Podcasts. Documentaries. Stories.
                </span>
              </h2>
            </div>
          </div>
        </section>

        {/* ---------------- How we work ---------------- */}
        <section className="container-wide pb-28 md:pb-48">
          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <figure className="md:col-start-3 md:col-span-5 md:row-start-1 reveal">
              <img
                src={courtyardGreen}
                alt="The inner courtyard, framed by a tall green hedge and whitewashed brick"
                width={736}
                height={491}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>

            <div className="md:col-start-8 md:col-span-4 md:row-start-1 self-end mt-10 md:mt-0 md:pb-2 reveal">
              <h2 className="statement">
                <strong>How we work.</strong>
                <span className="font-normal">Ideas. Stories. Impact.</span>
              </h2>

              <img
                src={lampSpot}
                alt=""
                aria-hidden="true"
                width={600}
                height={901}
                loading="lazy"
                className="mt-6 w-auto h-40 md:h-56 ml-4 md:ml-10"
              />
            </div>
          </div>
        </section>

        {/* ---------------- Filming location ---------------- */}
        <section
          id="filming-location"
          className="container-wide pb-28 md:pb-48 scroll-mt-24"
        >
          <h2 className="text-section-label mb-8 md:mb-10 reveal">
            Filming location
          </h2>

          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <figure className="md:col-start-1 md:col-span-6 md:row-start-1 reveal">
              <img
                src={stairwell}
                alt="Looking up through the industrial steel-and-glass stairwell towards the skylight"
                width={810}
                height={540}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>

            <div className="md:col-start-7 md:col-span-4 md:row-start-1 mt-8 md:mt-0 reveal">
              <p className="body-copy">
                The whole house is available as a recording location for
                documentaries, fiction, interviews, photo shoots and digital
                content. A unique blend of historic character and contemporary
                design creates a unique setting that is both authentic and
                visually compelling.
              </p>
            </div>

            <figure className="md:col-start-7 md:col-span-5 md:row-start-2 mt-8 md:mt-14 reveal">
              <img
                src={gardenTable}
                alt="A long wooden table in the garden, sheltered between climbing green walls"
                width={275}
                height={183}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>
          </div>
        </section>

        {/* ---------------- Guesthouse ---------------- */}
        <section
          id="guesthouse"
          className="container-wide pb-28 md:pb-48 scroll-mt-24"
        >
          <h2 className="statement mb-8 md:mb-10 reveal">
            <strong>Guesthouse,</strong>
            <strong>where anyone is welcome.</strong>
          </h2>

          <div className="md:grid md:grid-cols-12 md:gap-x-8">
            <figure className="md:col-start-1 md:col-span-5 md:row-start-1 reveal">
              <img
                src={guestCourtyard}
                alt="The guesthouse terrace with turquoise chairs, enclosed by green climbing walls"
                width={275}
                height={183}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>

            <figure className="md:col-start-5 md:col-span-4 md:row-start-1 self-end mt-6 md:mt-0 md:translate-y-16 md:z-10 reveal">
              <img
                src={bedroom}
                alt="An attic bedroom under white timber beams, with a dark accent wall and warm lighting"
                width={275}
                height={183}
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>

            <div className="md:col-start-1 md:col-span-4 md:row-start-2 mt-10 md:mt-20 reveal">
              <p className="body-copy">
                Once a 19th-century coach house, The Industrial Loft has been
                transformed into a distinctive guest house where heritage and
                contemporary comfort exist in perfect balance.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- Clients ---------------- */}
        <section className="container-wide pb-28 md:pb-44">
          <h2 className="text-section-label mb-10 md:mb-4 reveal">Clients</h2>

          {/* Mobile: simple centred wrap */}
          <ul className="md:hidden flex flex-wrap justify-center gap-x-6 gap-y-4 reveal">
            {clients.map((client) => (
              <li
                key={client.name}
                className="text-xs tracking-[0.12em] text-foreground/85"
              >
                {client.name}
              </li>
            ))}
          </ul>

          {/* Desktop: scattered constellation */}
          <div
            className="hidden md:block relative reveal"
            style={{ height: 400 }}
          >
            {clients.map((client) => (
              <span
                key={client.name}
                className="absolute -translate-x-1/2 whitespace-nowrap text-sm tracking-[0.12em] text-foreground/85"
                style={{ left: `${client.x}%`, top: client.y }}
              >
                {client.name}
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className="container-wide pb-28 md:pb-40 scroll-mt-24">
          <h2 className="text-section-label reveal">Contact</h2>

          <div className="mt-16 md:mt-24 text-center reveal">
            <a
              href="mailto:office@bigeyeblue.be"
              className="block text-xl sm:text-2xl md:text-3xl font-normal tracking-tight hover:text-accent transition-colors break-all sm:break-normal"
            >
              office@bigeyeblue.be
            </a>
            <a
              href="tel:+32472715544"
              className="mt-1 block text-xl sm:text-2xl md:text-3xl font-normal tracking-tight hover:text-accent transition-colors"
            >
              +32 472 71 55 44
            </a>
          </div>
        </section>
      </main>

      <footer className="container-wide pb-12">
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/50">
          <p>Bigeye Blue BV — Ghent, Belgium</p>
          <p>© {new Date().getFullYear()} Bigeye Blue</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
