import { Head } from '$fresh/runtime.ts'
import type { JSX } from 'preact'

type LinkAttributes = JSX.HTMLAttributes<HTMLLinkElement>

interface Props {
  title: string
  description: string
  canonicalUrlPath: string
  socialCardImage: string
  contentType: string
  linkTags: LinkAttributes[]
}

const defaultTitle = 'Roberto Toalongto 💻 | Frontend, JavaScript, React, CSS, Performance'
const defaultOgType = 'website'

const HeadTag = ({
  contentType,
}: Partial<Props>) => {
  const ogType = contentType ?? defaultOgType
  const desc = "Artículos, recursos y tutoriales sobre Desarrollo Web, Linux, Frontend, JavaScript ☕️, React ⚛️, CSS 🎨 y Performance Web ⚡️"

  return (
    <Head>
      <title>{defaultTitle}</title>
      <meta name='description' content={desc} />
      <meta name='author' content='Roberto Toalongo' />
      <meta
        name='keywords'
        content='Frontend, Javascript, Pyton, React, CSS, HTML'
      />
      <meta
        property='og:description'
        content={desc}
      />
      <meta property='og:type' content={ogType} />
      <link rel="icon" href="/favicon/negro/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/negro/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/negro/favicon-32x32.png" />
      <link rel="stylesheet" href="/styles/styles.css" />
      <script id='theme' src='/scripts/theme.js' />
    </Head>
  )
}

export default HeadTag


