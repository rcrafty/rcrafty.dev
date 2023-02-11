import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/p.ts";
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
    <div class="mt-2 p-4">
      <Layout>
        <div class="flex justify-center px-0">
          <article class="w-[48rem]">
            <header class="mb-6">
              <h1 class="text-3xl font-bold">{post.title}</h1>
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
