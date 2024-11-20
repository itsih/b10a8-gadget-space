import { ImCancelCircle } from "react-icons/im";


const WishlistProduct = ({ product, handleWishlistRemoveBtn,  }) => {
  return (
    <div className="flex mt-5 justify-between items-center bg-gray-200 rounded-xl">
      <div className="flex items-center">
        <div className="p-3">
          <img
            className="w-[200px] h-[124px] rounded-lg object-cover"
            src={product.product_image}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{product.product_title}</h2>
          <p className="text-base font-medium">{product.description}</p>
          <p className="text-xl font-semibold">Price:$ {product.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div>
      <ImCancelCircle onClick={()=>handleWishlistRemoveBtn(product)} className="text-2xl text-red-600" />
      </div>
    </div>
  );
};

export default WishlistProduct;
