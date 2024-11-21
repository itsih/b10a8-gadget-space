import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <Helmet>
        <title>Home | Gadget Space </title>
      </Helmet>
      <Hero></Hero>
      <Heading title="Explore Cutting-Edge Gadget" subtitle=""></Heading>

      <div className="flex items-center md:items-start flex-col md:flex-row gap-10 pb-5 w-10/12 mx-auto ">
        <div className="md:w-[20%] ">
          <Categories categories={categories}></Categories>
        </div>
        <div className="md:w-[80%] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
