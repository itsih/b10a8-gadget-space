import { ImCancelCircle } from "react-icons/im";

const SingleCart = ({ product, handleRemoveFromCart }) => {
  return (
    <div className="mt-5">
      <div className=" flex rounded-xl items-center gap-2 p-3 shadow-lg bg-gray-200">
        <div className="  ">
          <img
            className="rounded-lg w-[200px] h-[124px] "
            src={product.product_image}
            alt=""
          />
        </div>
        <div className="w-4/5 flex flex-col justify-">
          <h2 className="text-2xl font-bold">{product.product_title}</h2>
          <p className="text-base font-medium">{product.description}</p>
          <p className="text-xl font-semibold">Price:$ {product.price}</p>
        </div>
        <div className="w-1/12 h-full ">
          <ImCancelCircle onClick={()=>handleRemoveFromCart(product)} className="text-2xl text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
