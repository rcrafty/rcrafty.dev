import { Head } from "$fresh/runtime.ts";

const HeadTag = () => {
  const descripcion =
    "Artículos y tutoriales especializados en Frontend, Backend y rendimiento web. Potencia tu proyecto digital con nuestras recomendaciones. ¡Embárcate en el viaje hacia la excelencia en el desarrollo web!";
  const title =
    "Berht 🍐 | Más Allá del Código: Buenas Prácticas en Desarrollo Web";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={descripcion} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descripcion} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://berht.dev" >*/}
      <meta property="og:site_name" content="Berht" />
      <meta name="author" content="Roberto Toalongo" />
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="stylesheet" href="/styles/styles.css" />
      <script id="theme" src="/scripts/theme.js" />
    </Head>
  );
};

export default HeadTag;
