import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/p.ts";
import { CSS } from "$gfm/mod.ts";
import Layout from "../../components/Layout/Layout.tsx";
import Markdown from "../../components/Markdown/Markdown.tsx";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post = await loadPost(id);
    return context.render({ post });
  },
};
function PagePost(props: PageProps) {
  const { post } = props?.data || {};
  return (
    <Layout>
      <section class="max-w-2xl mx-auto">
        <header class="mb-6">
          <h1 class="text-3xl font-bold">{post.title}</h1>
        </header>
        <Markdown body={post.body} />
      </section>
    </Layout>
  );
}

export default PagePost;
