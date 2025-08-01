import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-[80%] max-w-[1140px] mx-[auto] py-[4rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
