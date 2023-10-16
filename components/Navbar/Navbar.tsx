import ToggleButton from "../../islands/toggle-button.tsx";
import Menu from "../menu.tsx";
import { Logo } from "../Icons/Logo.tsx";
// <i><img src={'/favicon/negro/favicon-32x32.png'}/></i>
const links = [
  {
    label: "About",
    href: "/p/sobre-mi",
  },
  {
    label: "Articulos",
    href: "/blog",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
];

function Navbar() {
  return (
    <header class="fixed w-full py-2 dark:bg-[#00000000] bg-[#ffffff50] backdrop-blur-xl z-20">
      <div class="max-w-4xl mx-auto">
        <div className="flex px-4">
          <a href="/" className="flex items-center">
            <div class="w-10">
              <Logo class="fill-current"/>
            </div>
            <span className="text-xl font-bold ml-2">
              Roberto Toalongo
            </span>
          </a>
          <div class="flex-1"></div>
          <div className="flex flex-row">
            <ToggleButton />
            <Menu menuItems={links} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
