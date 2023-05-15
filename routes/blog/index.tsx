import Layout from "../../components/Layout/Layout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../../utils/posts.ts";
import ListArticle from "../../components/list-articles.tsx";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};
function Blog(props: PageProps) {
  const { data: {posts} } = props;
  return (
    <Layout>
      <section class="max-w-2xl mx-auto">
        <h2 class="text-xl font-semibold">
          Últimos artículos
        </h2>
        <ListArticle rows={posts} max={100} />
      </section>
    </Layout>
  );
}

export default Blog;
