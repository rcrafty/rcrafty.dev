import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout/Layout.tsx";
import { listsHome } from "../utils/home.ts";
import ListArticle from "../components/list-articles.tsx";
import ListWorks from "../components/list-works.tsx";
import Skills from "../components/list-skills.tsx";
import LinkNext from "../components/link.tsx";
import Social from "../components/socials.tsx";

export const handler: Handlers = {
  async GET(req, context) {
    const lists = await listsHome();
    return context.render({ lists });
  },
};
export default function Home(props: PageProps) {
  const { data: { lists: { posts, projects } } } = props;
  return (
    <Layout>
      <section class="grid grid-cols-1 lg:grid-cols-4 lg:grid-flow-col gap-4 max-w-6xl mx-auto">
        <aside class="md:row-span-3">
          <header>
            <div className="h-48 w-48 mb-3">
              <img src="/foto.png" className="rounded-full flex items-center object-bottom object-cover"/>
            </div>
            <h1 class="text-4xl font-semibold dark:text-white">
              Roberto
              <br />
              Toalongo
            </h1>
          </header>
          <article class="text-base font-normal py-6 dark:text-white">
            (Developer/Designer)
          </article>
          <footer>
            <Social />
          </footer>
        </aside>

        <section class="col-span-3">
          <h2 class="text-xl font-semibold dark:text-white">Skills</h2>
          <Skills />
        </section>

        <section class="row-span-2 col-span-3 md:col-span-2 lg:col-span-2">
          <h2 class="text-xl font-semibold dark:text-white">
            Últimos artículos
          </h2>
          <ListArticle rows={posts} max={10} />
          <LinkNext to="blog" text="Artículos anteriores" />
        </section>
        <section class="row-span-2 col-span-3 md:col-span-1">
          <h2 class="text-xl font-semibold dark:text-white">
            Últimos proyectos
          </h2>
          <ListWorks rows={projects} max={5} />
          <LinkNext to="proyectos" text="Proyectos anteriores" />
        </section>
      </section>
    </Layout>
  );
}
