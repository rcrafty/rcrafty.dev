import { Github } from "./Icons/Github.tsx";
import { Linkedin } from "./Icons/Linkedin.tsx";

function Socials() {
  return (
    <div className="flex flex-row gap-2">
      <a
        href="https://www.github.com/rcrafty"
        className="w-8"
        target="_blank"
        aria-label="Enlace a mi perfil de github"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/roberto-toalongo-galabay-1836471b5"
        className="w-8"
        target="_blank"
        aria-label="Enlace a mi perfil de linkedin"
      >
        <Linkedin />
      </a>
    </div>
  );
}

export default Socials;
