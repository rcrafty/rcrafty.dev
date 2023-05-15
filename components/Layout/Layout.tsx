import { FunctionalComponent } from "preact";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import HeadTag from "../head.tsx";

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <>
      <HeadTag />
      <Navbar />
      <main className="pt-20 px-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
