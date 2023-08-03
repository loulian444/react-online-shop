import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="flex">
      <Link to={"/"} id="homeLink">
        Nile
      </Link>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Navbar;
