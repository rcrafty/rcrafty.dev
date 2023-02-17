import Layout from "../../components/Layout/Layout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../../types.d.ts";
import { listPosts } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};
function Blog(props: PageProps) {
  const { data } = props;
  const { posts } = data;
  return (
    <div class="p-2">
      <Layout>
        <div className="flex justify-center">
          <section className="w-[48rem]">
            <header class="mb-4">
              <h1 class="text-3xl font-bold">Últimos artículos</h1>
            </header>
            {posts.map((post: Post) => (
              <a href={`/blog/${post.id}`}>
                <article class="rounded-lg hover:bg-blue-50 py-2 px-3 w-full">
                  <h2 class="text-xl font-medium">{post.title}</h2>
                  <time class="text-blue-600 text-sm">
                    {Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
                      post.date
                    )}
                  </time>
                </article>
              </a>
            ))}
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default Blog;
