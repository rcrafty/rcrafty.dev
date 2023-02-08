const links = [
  {
    label: "🏠",
    to: "/",
  },
  {
    label: "Sobre mi",
    to: "/p/sobre-mi",
  },
  {
    label: "Articulos",
    to: "/blog",
  },
  {
    label: "Proyectos",
    to: "/proyectos",
  },
];

function Navbar() {
  return (
    <nav class="mb-4 p-4">
      <ul class="flex justify-center">
        {links.map(({ label, to }) => (
          <li key={to}>
            <a class="text-lg p-4 font-medium" href={to}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
