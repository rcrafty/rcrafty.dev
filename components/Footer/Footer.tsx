const links = [
  {
    label: "Contacto",
    to: "/",
  },
  {
    label: "Github",
    to: "/",
  },
  {
    label: "Twitter",
    to: "/",
  },
];

function Footer() {
  return (
    <footer className="text-gray-800 py-4 flex justify-center">
      <ul class="flex justify-center">
        {links.map(({ label, to }) => (
          <li class="list-none" key={label}>
            <a
              class="p-4 text-sm-2 hover:underline hover:underline-offset-2"
              href={to}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
