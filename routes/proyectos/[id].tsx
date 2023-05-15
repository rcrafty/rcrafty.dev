import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProject } from "../../utils/projects.ts";
import Layout from "../../components/Layout/Layout.tsx";
import Markdown from "../../components/Markdown/Markdown.tsx";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post = await loadProject(id);
    return context.render({ post });
  },
};
function PageProject(props: PageProps) {
  const { post: { title, body, image } } = props?.data || {};
  return (
    <Layout>
      <article class="max-w-2xl mx-auto divide-y divide-black dark:divide-white">
        <header class="mb-6 flex flex-col">
          <img className="rounded-md object-cover mb-6" src={`/projects/${image}`} alt="img"/>
          <h1 class="text-3xl font-semibold">{title}</h1>
        </header>
        <article className="mt-9">
          <br />
          <Markdown body={body} />
        </article>
      </article>
    </Layout>
  );
}

export default PageProject;
