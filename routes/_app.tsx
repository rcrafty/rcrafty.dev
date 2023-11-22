import { AppProps } from "$fresh/server.ts";
import BaseHead from "../components/base-head.jsx";

export default function App({ Component }: AppProps) {
  const description =
    "Artículos y tutoriales especializados en Frontend, Backend y rendimiento web. Potencia tu proyecto digital con nuestras recomendaciones. ¡Embárcate en el viaje hacia la excelencia en el desarrollo web!";
  const title =
    "Roberto Toalongo 🍐 | Más Allá del Código: Buenas Prácticas en Desarrollo Web";
  return (
    <html lang="es">
      <head>
        <BaseHead title={title} description={description} />
      </head>
      <body class="bg-gruvbox w-full text-black dark:bg-gruvbox-dark dark:text-white">
        <Component />
      </body>
    </html>
  );
}
