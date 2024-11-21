import { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../utility";
import WishlistProduct from "./WishlistProduct";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const wishlistProducts = getWishlist();
    setWishlist(wishlistProducts);
  }, []);
  const handleWishlistRemoveBtn = (product) => {
    removeFromWishlist(product);
    const remaining = getWishlist();
    setWishlist(remaining);
  };
  return (
    <div className="w-10/12 mx-auto mt-5">
      <div>
        <h1 className="text-2xl font-bold">Wishlist</h1>
      </div>
      <div>
        {wishlist.map((product) => (
          <WishlistProduct
            key={product.product_id}
            handleWishlistRemoveBtn={handleWishlistRemoveBtn}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
