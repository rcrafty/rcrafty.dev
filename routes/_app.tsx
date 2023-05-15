import type { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <body class='bg-gruvbox w-full text-black dark:bg-gruvbox-dark dark:text-white'>
    <Component />
  </body>
)

export default App
