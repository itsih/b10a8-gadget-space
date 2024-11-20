import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category){
      const filterData = [...data].filter(
        product => product.category === category
      ) 
      setProducts(filterData)
    }else{
      setProducts(data.slice(0, 6))
    }
  }, [category, data]);
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <Product key={product.product_id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductCards;
