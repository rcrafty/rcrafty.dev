import { Head } from '$fresh/runtime.ts'
import type { UnknownPageProps } from '$fresh/server.ts'

const NotFoundPage = (_props: UnknownPageProps) => (
  <>
    <Head>
      <title>404 Not Found</title>
    </Head>
    <div class='p-4 grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(center 4xl 2xl:5xl) font-bold'>
        The page was not found
      </h1>
    </div>
  </>
)

export default NotFoundPage
