import { Helmet } from "react-helmet";
import Heading from "../components/Heading";

const Statistics = () => {
  return (
    <div className="bg-purple-600 p-6 text-white">
      <Helmet>
        <title>Statistics | Gadget Space </title>
      </Helmet>
      <Heading
        title={"Statistics"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Heading>
    </div>
  );
};

export default Statistics;
