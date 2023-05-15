import { FunctionalComponent } from "preact";
import { Project } from "../types.d.ts";

interface Props {
  rows: Project[] 
  max: number
}
const ListWorks: FunctionalComponent<Props> = ({rows, max}) => {
  const projects = rows.slice(0, max).map((project: Project) => (<Works {...project}/>))
  return max < 10 ? <ol>{projects}</ol> : <ol class="grid grid-cols-1 md:grid-cols-2 gap-4">{projects}</ol> 
}

const Works = ({id, image, title}: Project) => {
  return ( 
    <a href={`/proyectos/${id}`}>
      <article class="rounded-lg shadow-md dark:bg-[#ffffff10] dark:shadow-2xl bg-whipacity py-2 px-3 my-4 w-full">
        <img
          src={`/projects/${image}`}
          className="rounded-lg w-full my-1"
          alt="image"
        />
        <h2 class="font-medium mt-2 leading-normal dark:text-white">{title}</h2>
      </article>
    </a>
  )
}
export default ListWorks
