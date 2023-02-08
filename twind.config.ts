import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
  },
  preflight: {
    body: apply`bg-inherit text-black`,
  },
} as Options;
