import prideIsProtest from "@/assets/pride-is-protest.jpg";
import europeanCitizenPopsong from "@/assets/european-citizen-popsong.jpg";
import edinburghFringe from "@/assets/edinburgh-fringe.jpg";
import barefootEmperor from "@/assets/barefoot-emperor.jpg";
import cryptoJongeren from "@/assets/crypto-jongeren.jpg";
import gevangenis from "@/assets/gevangenis.jpg";
import asielopvang from "@/assets/asielopvang.jpg";
import studioHero from "@/assets/studio-hero.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  format: string;
  description: string;
  body: string[];
  coverImage: string;
  images: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "pride-is-protest",
    title: "Pride is Protest",
    category: "Documentaire",
    tags: ["DOCUMENTAIRE", "CANVAS"],
    year: "2020",
    client: "Vranckx & de Nomaden / Canvas",
    role: "Regie & redactie",
    format: "Documentaire",
    description:
      "Een week lang in New York tijdens de grootste Pride ooit. Over wat er vandaag nog te bevechten valt, ook binnen de regenboogbeweging zelf.",
    body: [
      "Samen met journalist Filip Tielens trokken we een week naar New York tijdens de grootste Pride ooit, vijftig jaar na de rellen van Stonewall.",
      "We spraken er met een veteraan van 1969 over de veranderingen die hij zag gebeuren, maar evengoed met transgender personen en zwarte vogue-artiesten over de discriminatie die ook anno vandaag blijft bestaan — soms binnen de regenboogbeweging zelf.",
      "Waar moet er volgens hen vandaag voor gestreden worden? En hoe vertaalt zich dat in hedendaags activisme en protest? De documentaire ging in mei 2020 in première op Canvas.",
    ],
    coverImage: prideIsProtest,
    images: [prideIsProtest],
  },
  {
    id: "european-citizen-popsong",
    title: "European Citizen Popsong",
    category: "Documentair project",
    tags: ["DOCUMENTAIRE", "EUROPA"],
    year: "2016 — 2019",
    client: "Eigen productie",
    role: "Concept & regie",
    format: "Meerjarig documentair project",
    description:
      "Van Londen tot Berlijn, van Athene tot Kiev: een zoektocht naar wat 'Europese verbondenheid' persoonlijk kan betekenen.",
    body: [
      "Drie jaar lang werkte ik aan de vraag of het begrip 'Europese verbondenheid' te herleiden valt naar iets persoonlijks. Wat is er nodig om ons supranationaal verbonden te voelen — en bestaat zoiets eigenlijk wel?",
      "Kan het meer zijn dan een log politiek begrip dat vooral doet denken aan bureaucratie en hoogdravende taal? Ik trok door Europa, van Londen tot Berlijn, over Athene naar Kiev, en ging het gesprek aan met burgers uit alle hoeken van het continent.",
      "Het project werd de brug tussen mijn theaterachtergrond en mijn journalistieke werk, en leidde rechtstreeks tot de samenwerking met de redactie van Vranckx.",
    ],
    coverImage: europeanCitizenPopsong,
    images: [europeanCitizenPopsong],
  },
  {
    id: "edinburgh-fringe",
    title: "Edinburgh Fringe",
    category: "Reportage",
    tags: ["REPORTAGE", "VRT NWS"],
    year: "2019",
    client: "VRT NWS",
    role: "Camera, redactie & montage",
    format: "Twee reportages",
    description:
      "Met camera, micro en statief naar het grootste theaterfestival ter wereld, in het spoor van Ontroerend Goed.",
    body: [
      "Voor VRT NWS maakte ik twee reportages over het Edinburgh Fringe Festival, het grootste theaterfestival ter wereld.",
      "Met camera, microfoon en statief trok ik naar Schotland om Charlotte Vandermeersch en de spelers van Ontroerend Goed enkele dagen te volgen. Zij zouden één maand lang hetzelfde stuk spelen, vier dagen op vijf.",
      "Een uitputtingsslag, waarvan ik getuige mocht zijn — en die alles zegt over wat het betekent om te blijven maken.",
    ],
    coverImage: edinburghFringe,
    images: [edinburghFringe],
  },
  {
    id: "the-barefoot-emperor",
    title: "The Barefoot Emperor",
    category: "Filmcontent",
    tags: ["FILM", "LUMIÈRE"],
    year: "2019",
    client: "Lumière & Bo Films",
    role: "Concept & regie",
    format: "Begeleidende content",
    description:
      "Bijkomende content rond de première van de film, over de gelijkenissen met The Great Dictator en de verrechtsing van Europa.",
    body: [
      "Naar aanleiding van de première van 'The Barefoot Emperor' maakte ik bijkomende content over de film en de makers ervan.",
      "Centraal stonden de gelijkenissen met Chaplins 'The Great Dictator' en de wake-upcall die de makers wilden geven tegen de verrechtsing van Europa.",
    ],
    coverImage: barefootEmperor,
    images: [barefootEmperor],
  },
  {
    id: "crypto-en-minderjarigen",
    title: "Beleggen op je zestiende",
    category: "Onderzoek",
    tags: ["ONDERZOEK", "VRT NWS"],
    year: "2026",
    client: "VRT NWS",
    role: "Research, redactie & video",
    format: "Onderzoeksreportage",
    description:
      "Lowie en Daan zijn minderjarig, maar beleggen toch in crypto. Mag dat zomaar? Een onderzoek naar een grijze zone.",
    body: [
      "\"Zo verleidelijk, ik moet mezelf soms terugroepen.\" Daan kocht zijn eerste crypto op zijn zestiende.",
      "Voor VRT NWS onderzocht ik hoe minderjarigen ondanks leeftijdsgrenzen toch beleggen in cryptomunten, welke platformen dat mogelijk maken en wat de wet daar eigenlijk over zegt.",
      "Een verhaal over jongeren, geld en een regelgeving die de realiteit niet bijhoudt.",
    ],
    coverImage: cryptoJongeren,
    images: [cryptoJongeren],
  },
  {
    id: "gevangenis-mechelen",
    title: "Een dag in de overvolle gevangenis",
    category: "Reportage",
    tags: ["REPORTAGE", "TERZAKE"],
    year: "2025",
    client: "VRT NWS / Terzake",
    role: "Redactie & regie",
    format: "Langere reportage",
    description:
      "\"Een leeuw die dagelijks 23 uur in een kooi zit, gaat bijten.\" Een dag lang binnen de muren van de gevangenis van Mechelen.",
    body: [
      "Voor Terzake bracht ik een dag door in de overvolle gevangenis van Mechelen.",
      "Cipiers, gedetineerden en directie vertellen wat overbevolking concreet doet met een instelling die eigenlijk zou moeten herstellen. \"Een leeuw die dagelijks 23 uur in een kooi zit, gaat bijten.\"",
    ],
    coverImage: gevangenis,
    images: [gevangenis],
  },
  {
    id: "opvang-asielzoekers",
    title: "Geen opvang, wel een gezin",
    category: "Onderzoek",
    tags: ["ONDERZOEK", "VRT NWS"],
    year: "2025",
    client: "VRT NWS",
    role: "Research, redactie & video",
    format: "Onderzoeksreportage",
    description:
      "\"Sliepen dagenlang op straat met 2 kleine kinderen.\" Over nieuwe opvangregels en een overheid die al meermaals veroordeeld werd.",
    body: [
      "Ahmad kreeg met zijn twee kleine kinderen geen opvang door de nieuwe regels voor asielzoekers. \"Ik was de hele nacht wakker om de kinderen te beschermen.\"",
      "Voor VRT NWS bracht ik in kaart hoe die regels in de praktijk uitpakken voor gezinnen, en hoe de overheid daarvoor al meermaals werd veroordeeld zonder dat het beleid veranderde.",
    ],
    coverImage: asielopvang,
    images: [asielopvang],
  },
  {
    id: "politieke-partijen-uitgelegd",
    title: "Politieke partijen uitgelegd",
    category: "Online reeks",
    tags: ["REEKS", "VRT CREATIVE LAB"],
    year: "2019",
    client: "VRT Creative Lab & VRT NWS",
    role: "Concept & regie",
    format: "YouTube-reeks",
    description:
      "Een YouTube-reeks in aanloop naar de verkiezingen van 2019, die het politieke landschap helder en toegankelijk uitlegt.",
    body: [
      "Voor het Creative Lab van VRT en VRT NWS maakten we een reeks in aanloop naar de verkiezingen van 2019.",
      "Het idee: grote politiek-maatschappelijke thematiek vertalen naar frisse online content die ook aankomt bij een publiek dat het journaal niet meer opzet.",
    ],
    coverImage: studioHero,
    images: [studioHero],
  },
];
