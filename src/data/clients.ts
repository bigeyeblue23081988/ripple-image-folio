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
  { name: "VRT INNOVATIE", x: 48, y: 0 },
  { name: "LUMIERE", x: 26, y: 120 },
  { name: "LUCKY LEMON", x: 70, y: 120 },
  { name: "VRT MAX", x: 14, y: 240 },
  { name: "BNP PARIBAS", x: 46, y: 240 },
  { name: "MOTIONMAKERS", x: 80, y: 240 },
  { name: "DELOITTE", x: 24, y: 360 },
  { name: "CANVAS", x: 66, y: 360 },
  { name: "VRT NWS", x: 46, y: 480 },
];
