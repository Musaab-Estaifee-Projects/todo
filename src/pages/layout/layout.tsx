import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="md:px-16">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
