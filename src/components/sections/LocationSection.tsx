import { Figure } from "@/components/Figure";
import { useLang } from "@/i18n/LanguageProvider";

import exteriorDusk from "@/assets/house/exterior-dusk.jpg";
import patio from "@/assets/house/patio.jpg";
import stairwell from "@/assets/house/stairwell.jpg";
import gardenTable from "@/assets/house/garden-table.jpg";
import hallWide from "@/assets/house/hallway-wide.jpg";
...
        <Figure
          src={exteriorDusk}
          alt={t.figures.houseAlt}
          width={900}
          height={482}
          index="01"
          caption={t.figures.houseCaption}
          className="md:col-start-2 md:col-span-10 md:row-start-1 mb-16 md:mb-0 reveal"
        />

        <Figure
          src={patio}
          alt={t.figures.patioAlt}
          width={1920}
          height={1277}
          index="02"
          caption={t.figures.patioCaption}
          className="md:col-start-1 md:col-span-6 lg:col-span-5 md:row-start-2 reveal"
        />

        <div className="md:col-start-8 lg:col-start-7 md:col-span-5 lg:col-span-4 md:row-start-2 self-start mt-12 md:mt-0 reveal reveal-delay-1">
...
        <Figure
          src={hallWide}
          alt={t.figures.hallAlt}
          width={2528}
          height={1696}
          index="05"
          caption={t.figures.hallCaption}
          className="md:col-start-2 md:col-span-10 md:row-start-4 mt-16 md:mt-0 reveal"
        />
      </div>
    </section>
  );
}
