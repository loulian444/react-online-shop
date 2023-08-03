import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
