import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Thai,
  Lora,
  Source_Sans_3,
} from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ibm-plex-sans",
  display: "swap",
});

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--ibm-plex-sans-thai",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--lora",
  display: "swap",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--source-sans",
  display: "swap",
});
