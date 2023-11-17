import { Head } from "$fresh/runtime.ts";

const HeadTag = () => {
  const desc =
    "Artículos, recursos y tutoriales sobre Desarrollo Web, Linux, Frontend, JavaScript ☕️, React ⚛️, CSS 🎨 y Performance Web ⚡️";
  const defaultTitle =
    "Berht 💻 | Frontend, JavaScript, React, CSS, Performance";
  const defaultOgType = "website";

  return (
    <Head>
      <title>{defaultTitle}</title>
      <meta name="description" content={desc} />
      <meta name="author" content="Roberto Toalongo" />
      <meta
        name="keywords"
        content="Frontend, Javascript, Pyton, React, CSS, HTML"
      />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={defaultOgType} />
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
