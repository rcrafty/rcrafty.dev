import type { ErrorPageProps } from '$fresh/server.ts'
import Layout from '../components/Layout/Layout.tsx'

const Error500Page = ({ error }: ErrorPageProps) => (
  <Layout>
    <div class='p-4 grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(center 4xl 2xl:5xl) font-bold'>
        500 internal server error
      </h1>
        Try again
      {error}
    </div>
  </Layout>
)

export default Error500Page
