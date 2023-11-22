import { Head } from "$fresh/runtime.ts";

const BaseHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://rcraftzy.dev" >*/}
      <meta property="og:site_name" content="Roberto Toalongo" />
      <meta name="author" content="rcraftzy" />
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
export default BaseHead;
