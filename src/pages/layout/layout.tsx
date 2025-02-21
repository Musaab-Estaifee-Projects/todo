import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
