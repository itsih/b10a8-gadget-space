import { NavLink, Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";

const DashBoard = () => {
  const { pathname } = useLocation();
  const isDashboard = () =>
    pathname != "/dashboard" || pathname != /^\/product\/\d+$/.test(pathname);

  const isDashboardPath = pathname === "/dashboard";
  return (
    <>
      <div className="bg-purple-600 p-8 text-white flex flex-col items-center">
        <Helmet>
          <title>Dashboard | Gadget Space </title>
        </Helmet>
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
        <div className="flex gap-4">
        <NavLink
            to="cart"
            className={({ isActive }) =>
              `btn rounded-full px-10 font-bold text-xl ${
                isActive ? "bg-white text-black" : "bg-[#9538E2] text-white"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `btn rounded-full px-10 font-bold text-xl text-black ${
                isActive ? "bg-white" : "bg-[#9538E2] text-white"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div className="mb-20">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default DashBoard;
