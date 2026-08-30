/**
 * Client names, laid out to echo the scattered constellation
 * in the original design. `x` is a percentage of the container
 * width, `y` a pixel offset from the top of the constellation.
 */
export interface ClientMark {
  name: string;
  x: number;
  y: number;
}

export const clients: ClientMark[] = [
  { name: "VRT INNOVATIE", x: 47, y: 0 },
  { name: "LUMIERE", x: 30, y: 88 },
  { name: "LUCKY LEMON", x: 64, y: 88 },
  { name: "VRT MAX", x: 17, y: 164 },
  { name: "BNP PARIBAS", x: 45, y: 164 },
  { name: "DE ZENDELINGEN", x: 78, y: 164 },
  { name: "DELOITTE", x: 28, y: 252 },
  { name: "CANVAS", x: 63, y: 252 },
  { name: "VRT NWS", x: 45, y: 340 },
];
