import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideNav } from "./Side_nav";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <Header />

      <div className="flex flex-1">
        {/* SIDENAV */}
        <SideNav />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Layout;
