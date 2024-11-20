import { useEffect, useState } from "react";
import { getProducts, removeFromCart } from "../utility";
import { PiSlidersBold } from "react-icons/pi";
import SingleCart from "./singleCart";
import { useNavigate } from "react-router-dom";
import modalIcon from '../assets/Group.png'
import toast from "react-hot-toast";
const AllCarts = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tempTotalPrice, setTempTotalPrice] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const cartProduct = getProducts();
    setCartProduct(cartProduct);
    calcTotalPrice(cartProduct);
  }, []);
  // Calculate Price
  const calcTotalPrice =(products) =>{
    const total =products.reduce((sum,product) => sum + product.price,0);
    setTotalPrice(total);
  };
  // Handeling Purchase
  const handlePurchase = () => {
    if(totalPrice === 0){
      toast.error("Cart is empty");
    }else{
      setTempTotalPrice(totalPrice);
      document.getElementById("my_modal_5").showModal();
      setCartProduct([]);
      setTotalPrice(0);
      localStorage.removeItem("cart");
  
    }
  };
  // Handeling remove cart
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    const remaining = getProducts();
    setCartProduct(remaining);
  };
  // Handeling sorting
  const handleSort = () => {
    const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
    setCartProduct(sortedProducts);
  };



  return (
    <div className="w-10/12 mx-auto mt-5 ">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">Cart</h1>
        <div className="flex items-center gap-4">
          <h3 className="text-black text-2xl font-bold">Total Price : ${totalPrice}</h3>
          <button onClick={handleSort} className="text-lg text-purple-600 font-semibold hover:text-white hover:bg-purple-600 flex items-center gap-1 p-3 border border-purple-600 rounded-badge">
            Sort By Price <PiSlidersBold />
          </button>
          <button onClick={handlePurchase} className="text-lg font-semibold text-purple-600 hover:text-white hover:bg-purple-600 border p-3 border-purple-600 rounded-badge">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5  p-4 md:p-0 py-5">
        {cartProduct.map((product) => (
          <SingleCart handleRemoveFromCart={handleRemoveFromCart} key={product.product_id} product={product} />
        ))}
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <img src={modalIcon} alt="Payment Success" className="w-[80px]" />
          <h3 className="font-bold text-2xl">Payment Successful</h3>
          <p className="py-4 font-semibold text-gray-500">
            Thanks for purchasing.
          </p>
          <p className="font-semibold text-gray-500">
            Total: ${tempTotalPrice}
          </p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my_modal_5").close();
                navigate("/"); 
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AllCarts;
