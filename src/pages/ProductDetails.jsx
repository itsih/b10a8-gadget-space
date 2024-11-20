import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { addToCart, addToWishlist, getWishlist,  } from "../utility";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isWishlist, setIsWishlist] = useState(false);
  // Handling add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  }
  // Handling Add to wishlist
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setIsWishlist(true);
  };

  // Use Effect
  useEffect(() => {
    const singleData = data.find(
      (product) => product.product_id === parseInt(id)
    );
    setProduct(singleData);
    const wishlist = getWishlist()
    const isExist = wishlist.find((p) => p.product_id === product.product_id); 
    if(isExist){
      setIsWishlist(true);
    }
  }, [data, id]);
  const {
    product_title,
    product_image,
    price,
    description,
    specifications = [],
    availability,
    rating,
  } = product;
  return (
    <div className="border border-purple-600">
      <div className=" flex flex-col items-center  w-full bg-purple-600  text-white py-6 h-[300px] relative mb-[800px] md:mb-[500px]">
        <div className="text-center">
          <Heading
            title={"Product Details"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></Heading>
        </div>
        <div className=" z-50 flex flex-col md:flex-row justify-around items-center p-4 border w-9/12 lg:w-3/5 mx-auto bg-white rounded-xl absolute top-2/3  ">
          <div className=" w-2/5 h-[400px] bg-cover ">
            <img
              className=" rounded-lg w-full h-full"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-black space-y-2 justify-center items-start">
            <h1 className=" text-2xl font-bold">{product_title}</h1>
            <p className=" font-bold">Price:{price + "$"}</p>
            <button
              className={` bg-green-100 border border-green-600 rounded-badge py-1 px-3 text-green-600 font-medium  ${
                availability ? "" : "hidden"
              }`}
            >
              In stock
            </button>
            <button
              className={` bg-red-100 border border-red-600 rounded-badge py-1 px-3 text-red-600 font-medium  ${
                availability ? "hidden" : ""
              }`}
            >
              Out of stock
            </button>
            <p className=" font-medium text-gray-500">{description}</p>
            <p className=" font-bold">Specification:</p>
            <ol className="list-decimal list-inside">
              {specifications.map((specification, idx) => (
                <li key={idx}>{specification}</li>
              ))}
            </ol>
            <h3 className=" font-bold">Rating</h3>
            <div className="flex items-center gap-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="py-2 px-5 bg-gray-300 rounded-badge ">
                {rating}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button  onClick={() => handleAddToCart(product)} className="btn bg-purple-600 text-white font-semibold border rounded-badge py-2 px-4 flex items-center gap-2">
                Add to Cart <BsCart3 className="text-xl " />
              </button>
              <button disabled={isWishlist} onClick={() => handleAddToWishlist(product)} className="w-12 h-10 btn relative flex items-center text-purple-700 bg-purple-200 justify-center rounded-full border p-1">
                <FaRegHeart className="text-xl " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
