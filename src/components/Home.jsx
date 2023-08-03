import { useEffect, useState } from "react";
import Shop from "./Shop.jsx";

export const Home = () => {
  const apiUrl = `https://dummyjson.com/products`;
  
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const products = data.products;

      setProductsList(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Shop productsList={productsList} apiUrl={apiUrl} />
    </>
  );
};

export default Home;
