export interface StudioService {
  title: string;
  description: string;
}

export const studioServices: StudioService[] = [
  {
    title: "Interviews & getuigenissen",
    description:
      "Een rustige, akoestisch behandelde ruimte met vaste interviewsetup. Ideaal voor documentaire getuigenissen, expertinterviews en portretten.",
  },
  {
    title: "Podcast & audio",
    description:
      "Opname van podcasts en audioreeksen met professionele microfoons, meerdere sprekers en een aparte regie.",
  },
  {
    title: "Bedrijfs- en organisatievideo",
    description:
      "Van kennisclips en vacaturevideo's tot jaarverslagen in beeld. Wij schrijven, filmen en monteren, of vullen aan waar jij het nodig hebt.",
  },
  {
    title: "Green key & achtergronden",
    description:
      "Neutrale en groene achtergrond beschikbaar, zodat beeld achteraf vrij ingekleurd of vervangen kan worden.",
  },
];

export const studioEquipment: string[] = [
  "Cinemacamera's op statief",
  "Softbox- en LED-verlichting",
  "Richt- en dasspeldmicrofoons",
  "Akoestisch behandelde opnameruimte",
  "Neutrale en groene achtergrond",
  "Regie- en montageplek ter plaatse",
];

export const studioSteps: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Gesprek",
    description:
      "We bekijken samen wat je nodig hebt: het verhaal, het publiek en het formaat. Vrijblijvend en zonder jargon.",
  },
  {
    step: "02",
    title: "Voorbereiding",
    description:
      "Research, scenario of vragenlijst, en een draaiplan. Zodat de opnamedag zelf rustig verloopt.",
  },
  {
    step: "03",
    title: "Opname",
    description:
      "In onze studio in Gent of op locatie. Met oog voor mensen die niet gewoon zijn om voor een camera te zitten.",
  },
  {
    step: "04",
    title: "Montage & oplevering",
    description:
      "Beeld, geluid, kleur en ondertiteling. Aangeleverd in de formaten die je nodig hebt, online en offline.",
  },
];
