import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { addToCard } from "../features/cart/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  //add to cart
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const alreadyInCart = cart.find((item) => item.id === product.id);

    if (alreadyInCart) {
      dispatch(addToCard(product));

      toast.info("Already Added to Cart!", {
        position: "top-center",
      });
    } else {
      dispatch(addToCard(product));

      toast.success("Added to Cart!", {
        position: "top-center",
      });
    }
  };

  // product
  const product = useSelector((state) => {
    return state.product.items.find((p) => p.id === parseInt(id));
  });

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>

          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto md:px-16 md:py-16 px-8 py-8">
      <div>
        <Link
          to="/"
          className="mb-4 md:mb-8  font-semibold hover:font-bold gap-1 inline-flex items-center transform hover:-translate-x-2 transition-transform  duration-200"
        >
          <ArrowLeft /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4">
          {/* Product Image */}
          <div className="shadow-md p-4 rounded w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Content */}
          <div className="w-full px-2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 mb-6 font-medium text-sm sm:text-base">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-2xl sm:text-3xl font-bold">
                ৳ {product.price}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-base">Category</h3>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
                {product.category}
              </span>
            </div>

            <button
              className="flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-md shadow-md hover:shadow-lg gap-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-bold transform hover:scale-105 transition-all duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
