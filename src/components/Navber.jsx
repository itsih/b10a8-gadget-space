import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="flex w-10/12 mx-auto py-2  justify-between items-center bg-transparent">
      <div className=" flex items-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-2xl text-white"
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
            className="menu menu-sm dropdown-content text-purple-600 font-bold bg-purple-200 border-4 border-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/dashboard'>Dashboard</Link>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-white text-2xl font-bold">Gadget Space</Link>
      </div>
      <div className=" hidden lg:flex items-center ">
        <ul className="menu menu-horizontal px-1 gap-4 text-base text-white font-semibold">
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </ul>
      </div>
      <div className=" flex">
            <div className="w-10 h-10 bg-white relative mr-2 flex items-center justify-center rounded-full border p-1">
                 <BsCart3 className="text-xl " />
                 <span className="absolute -top-2 -right-2 text-sm p-1 rounded-full bg-orange-200 w-5 h-5 flex items-center justify-center">0</span>
            </div>
            <div className="w-10 h-10 bg-white relative flex items-center justify-center rounded-full border p-1">
                  <FaRegHeart className="text-xl" />
                  <span className="absolute -top-2 -right-2 text-sm p-1 rounded-full bg-orange-200 w-5 h-5 flex items-center justify-center">0</span>
            </div>
      </div>
    </div>
  );
};

export default Navber;
     