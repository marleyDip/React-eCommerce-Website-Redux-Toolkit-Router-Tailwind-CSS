import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/productSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <>
        <div className="py-4 shadow-md">
          <ul className="relative container mx-auto flex flex-wrap items-center justify-between md:flex-row px-4 md:px-2">
            <div className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/">About</Link>
              </li>

              <li>
                <Link to="/">FAQs</Link>
              </li>

              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>

            <div
              className={`${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link to="/">Sign In</Link>
              </li>

              <li>
                <Link to="/">My Account</Link>
              </li>
            </div>

            <User
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            />
          </ul>
        </div>

        <nav className="flex items-center justify-between container mx-auto px-2 py-8 md:py-6">
          <div className="flex items-center">
            <Link to="/" className="bg-gray-700 px-4 py-2 rounded">
              <img src={logo} alt="Logo" className="w-[150px] h-[30px]" />
            </Link>
          </div>

          <form className="w-1/2 sm:block hidden">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-zinc-100 border border-zinc-300 rounded-md px-3 py-3 w-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>

          <Link>
            <ShoppingCart
              size={54}
              className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
            />
          </Link>
        </nav>
      </>
    </header>
  );
}

export default Navbar;
