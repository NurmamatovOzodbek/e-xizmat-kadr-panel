import { SideBar, Header } from "../components";
import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <div className="flex items-start fixed w-full">
      <div className="w-[20%] h-[100vh] bg-gray-800">
        <SideBar />
      </div>
      <div className="w-[100%] h-[100vh] flex flex-col justify-between overflow-x-hidden scroll-none">
        <Header />
        <section className="p-7 grow bg-gray-600">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
