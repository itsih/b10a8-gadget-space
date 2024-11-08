import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navber from "../components/Navber";

const MainLayout = () => {
  return (
    <div>
      <div className=" w-11/12 mx-auto h-[654px] border p-2 mt-5 rounded-2xl">
        <div className="  bg-purple-500 rounded-xl h-full ">
          <Navber></Navber>
          <Hero></Hero>
        </div>
      </div>
      <div className="min-h-[calc(100vh-434px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
