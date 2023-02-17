import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "$gfm/mod.ts";
import Layout from "../../components/Layout/Layout.tsx";

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
    <div class="p-2">
      <Layout>
        <div class="flex justify-center px-0">
          <article class="w-[48rem]">
            <header class="mb-10">
              <h1 class="text-3xl font-bold">{post.title}</h1>
              <time class="text-blue-600 text-sm">
                {Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
                  post.date
                )}
              </time>
            </header>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <div
              class="markdown-body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </article>
        </div>
      </Layout>
    </div>
  );
}

export default PagePost;
