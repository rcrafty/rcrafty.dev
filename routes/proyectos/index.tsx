import Layout from "../../components/Layout/Layout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Project } from "../../types.d.ts";
import { listProjects } from "../../utils/projects.ts";
import ListWorks from "../../components/list-works.tsx";

export const handler: Handlers = {
  async GET(req, context) {
    const projects = await listProjects();
    return context.render({ projects });
  },
};
function Project(props: PageProps) {
  const { data: {projects} } = props;
  return (
    <Layout>
      <section class="max-w-2xl mx-auto">
        <h2 class="text-xl font-semibold">
          Últimos proyectos
        </h2>
        <ListWorks rows={projects} max={100}/>
      </section>
    </Layout>
  );
}

export default Project;
