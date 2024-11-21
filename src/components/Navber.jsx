import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navber = () => {
  const { pathname } = useLocation();

  const isDashboard = () =>
    pathname === "/dashboard" ||
    pathname === "/dashboard/wishlist" ||
    pathname === "/dashboard/cart" ||
    /^\/product\/\d+$/.test(pathname) ||
    pathname === "/statistics" ||
    pathname === "/aboutus";

    const isCategory = () => /^\/category\/[^/]+$/.test(pathname);
    const isHome = () => pathname === "/";

  return (
    <div
      className={`${
        isDashboard()
          ? " p-4 "
          : "m-4 mb-0 border border-b-0 p-2 pb-0 rounded-t-2xl"
      } 
      ${isHome() ? "  " : ""} 
      ${isCategory() ? "bg-white " : ""}`}
    >
      <div
        className={`${
          isDashboard() ? " bg-white" : " bg-purple-600 rounded-t-lg p-2 "
        }`}
      >
        <div className="w-10/12 mx-auto flex justify-between items-center ">
          <div className=" flex items-center">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-7 w-7 text-2xl ${
                    isDashboard() ? "text-black" : "text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : "hover:text-red-600"}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : "hover:text-red-600"}`
                  }
                  to="/statistics"
                >
                  Statistics
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : "hover:text-red-600"}`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </ul>
            </div>
            <Link
              to="/"
              className={`btn btn-ghost px-0 text-2xl font-bold ${
                isDashboard() ? "text-black" : "text-white"
              }`}
            >
              Gadget Space
            </Link>
          </div>
          <div className=" hidden lg:flex items-center ">
            <ul
              className={`menu menu-horizontal px-1  gap-4 text-base  font-semibold ${
                isDashboard() ? "text-gray-800" : "text-gray-200 "
              }`}
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-white font-bold underline" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-purple-600 font-bold underline" : ""}`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-purple-600 font-bold underline" : ""}`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-purple-600 font-bold underline" : ""}`
                }
                to="/aboutus"
              >
                About Us
              </NavLink>
            </ul>
          </div>
          <div className=" flex">
            <NavLink
              to="./dashboard/cart"
              className="w-10 h-10 bg-white relative mr-2 flex items-center justify-center rounded-full border p-1"
            >
              <BsCart3 className="text-xl " />
            </NavLink>
            <NavLink
              to="./dashboard/wishlist"
              className="w-10 h-10 bg-white relative flex items-center justify-center rounded-full border p-1"
            >
              <FaRegHeart className="text-xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
