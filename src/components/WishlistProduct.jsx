import { ImCancelCircle } from "react-icons/im";
import { addToCart } from "../utility";

const WishlistProduct = ({ product, handleWishlistRemoveBtn, }) => {
    const handleAddToCart = (product) => {
        addToCart(product);
      }
  return (
    <div className="flex mt-5 p-3 justify-between items-center bg-gray-200 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="">
          <img
            className="rounded-lg w-[200px] h-[124px]"
            src={product.product_image}
            alt=""
          />
        </div>
        <div className="w-4/5">
          <h2 className="text-2xl font-bold">{product.product_title}</h2>
          <p className="text-sm font-medium">{product.description}</p>
          <p className="text-xl font-semibold">Price:$ {product.price}</p>
          <button onClick={() => handleAddToCart(product)}  className="btn bg-purple-600 text-white text-lg rounded-badge">Add to cart</button>
        </div>
      </div>
      <div className="w-1/12 h-full">
        <ImCancelCircle
          onClick={() => handleWishlistRemoveBtn(product)}
          className="text-2xl text-red-600"
        />
      </div>
    </div>
  );
};

export default WishlistProduct;
