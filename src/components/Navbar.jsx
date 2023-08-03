import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="flex">
      <section>
        <Link to={"/"} id="homeLink">Nile</Link>
        <Link to={"/shop"}>Shop</Link>
      </section>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Navbar;
