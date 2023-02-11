import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";
// import Navbar from "../components/Navbar/Navbar.tsx";
import Layout from "../components/Layout/Layout.tsx";
import Skill from "../components/Skill/Skill.tsx";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};
export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;
  return (
    <div class="md:mx-24 lg:mx-24 mt-2 p-2">
      <Layout>
      <main class="grid lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4 min-h-full">
        <aside class="row-span-4 p-2">
          <h1 class="text-4xl font-bold text-blue-600">
            Roberto
            <br />
            Toalongo
            <br />
            <span class="text-black">
              Full Stack <br /> Developer
            </span>
          </h1>
          <br />
          <p class="text-xl text-blue-600">
            Desarrollador en sitios webs y aplicaciones moviles
          </p>
        </aside>

          <section class="col-span-3">
            <h2 class="text-xl font-bold text-blue-600 p-2">Skills</h2>
            <Skill />
          </section>

        <section class="row-span-2 col-span-2">
          <h2 class="text-xl font-bold text-blue-600 p-2">
            Últimos articulos
          </h2>
          {posts.map((post: Post) => (
            <a href={`/blog/${post.id}`}>
              <article class="rounded-lg hover:bg-blue-50 py-2 px-3 w-full">
                <h2 class="text-xl font-medium">{post.title}</h2>
                <time class="text-blue-600 text-sm">
                  {Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
                    post.date,
                  )}
                </time>
              </article>
            </a>
          ))}
        </section>
        {
          /*
        <section class="row-span-2 col-span-3">
          <h2 class="text-xl font-bold text-red-900 px-2">
            Últimos proyectos
          </h2>
          <a href="">
            <article class="rounded-lg hover:bg-amber-100 py-2 px-3">
              <h2>Proximamente...</h2>
            </article>
          </a>
        </section>

          */
        }
      </main>

      </Layout>
    </div>
  );
}
