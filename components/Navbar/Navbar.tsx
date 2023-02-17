const links = [
  {
    label: "🏠",
    to: "/",
  },
  {
    label: "About",
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
    <nav class="mb-4 p-6">
      <ul class="flex justify-center">
        {links.map(({ label, to }) => (
          <li key={to}>
            <a
              class="p-2 text-sm font-medium transition hover:ring-2 ring-black rounded-lg w-1/4 mx-2"
              href={to}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
