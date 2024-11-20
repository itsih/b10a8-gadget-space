import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import  { Toaster } from 'react-hot-toast';
import Navber from "../components/Navber";

const MainLayout = () => {
  return (
    <div>
      <Toaster/>
      <div className="   ">
        <Navber></Navber>
      </div>
      <div className="min-h-[calc(100vh-434px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
// w-11/12 mx-auto h-[654px] border p-2 mt-5 mb-40 rounded-2xl
