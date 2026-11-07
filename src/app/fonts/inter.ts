import localFont from "next/font/local";

export const inter = localFont({
  src: "inter/variable/4.1/InterVariable.woff2",
  fallback: ["sans-serif"],
});

export const interItalic = localFont({
  src: "inter/variable/4.1/InterVariable-Italic.woff2",
  style: "italic",
  preload: false,
  fallback: ["sans-serif"],
  variable: "--font-inter-italic",
});
