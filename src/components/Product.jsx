import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { product_title, product_image, price,product_id } = product || {};
  return (
    <div className=" bg-base-100 shadow-xl rounded-xl flex flex-col gap-4 p-4">
      <div className="px-5 pt-5 bg-cover h-[250px] ">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl  w-full h-full"
        />
      </div>
      <div className=" flex flex-col gap-4 items-start">
        <h2 className="text-xl font-bold">{product_title}</h2>
        <p className="text-lg font-medium">Price: {price + "$"}</p>
        <div className="">
          <Link to={`/gadget/${product_id}`} className="btn border rounded-badge border-purple-600 text-purple-600 bg-white font-bold text-lg">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
