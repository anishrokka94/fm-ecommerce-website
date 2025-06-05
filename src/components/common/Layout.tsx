import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Drawer from "./Drawer/Drawer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <Drawer />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
