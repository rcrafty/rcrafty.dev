import { LayoutProps } from "$fresh/server.ts";
import Footer from "../components/Footer/Footer.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4">
        <Component />
      </main>
      <Footer />
    </>
  );
}
