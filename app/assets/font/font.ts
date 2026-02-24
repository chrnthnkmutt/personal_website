import { IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";

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
