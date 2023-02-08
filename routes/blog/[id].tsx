import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "$gfm/mod.ts";
import Navbar from "../../components/Navbar/Navbar.tsx";

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
      <Navbar />
      <div class="flex justify-center px-0">
        <article class="w-[48rem]">
          <header class="mb-6">
            <h1 class="text-2xl font-bold">{post.title}</h1>
            <time>
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
    </div>
  );
}

export default PagePost;
