import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
