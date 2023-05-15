import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
import presetAutoprefix from "https://cdn.skypack.dev/@twind/preset-autoprefix";
import presetTypography from "https://cdn.skypack.dev/@twind/preset-typography";
import typography from "https://cdn.skypack.dev/@twind/typography";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
  presets: [presetAutoprefix(), presetTypography()],
  theme: {
    extend: {
      colors: {
        // Paleta de colores
        // #1C1C1C
        // #302A16
        // #FDE4C3
        // #F7F1EA
        gruvbox: "#F7F1EA",
        whipacity: "rgba(255,255,255,0.4)",
        "gruvbox-dark": "#282828",
        "gruvbox-dark-code": "#32302f",
      },
    },
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
  },
  preflight: {
    "@import":
      `url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap)`,
    pre: apply`overflow-x-auto w-auto bg-gruvbox-dark-code text-white`,
    code: apply`px-5`,
    h1: apply`text-4xl font-semibold text-black dark:text-white`,
    h2: apply`text-2xl font-bold text-black dark:text-white`,
    h3: apply`text-xl font-bold text-black dark:text-white`,
    h4: apply`text-lg font-bold text-black dark:text-white`,
    h5: apply`font-bold text-black dark:text-white`,
    h6: apply`font-bold text-black dark:text-white`,
    // img: apply`border border-slate-300 dark:border-zinc-700 rounded-xl mb-6`,
    p: apply`mb-6 text-gray-700 dark:text-gray-300`,
    // a: apply`list-disc hover:text-orange-500 decoration-orange-500 dark:text-white`,
  },
  plugins: {
    ...typography(),
    "backdrop-blur": {
      "backdrop-filter": "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)",
    },
    link: {
      ":global": {
        ul: {},
      },
    },
  },
} as Options;
