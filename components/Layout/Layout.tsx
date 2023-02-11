import { FunctionalComponent, JSX } from "preact";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar.tsx";

interface Props {
  children: JSX.Element[] | JSX.Element 
}

const Layout: FunctionalComponent<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
