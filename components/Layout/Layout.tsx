import Navbar from "../Navbar/Navbar.tsx";

function Layout() {
  return (
    <div>
      <Navbar />
      <article><Outlet /></article>
    </div>
  );
}

export default Layout;
