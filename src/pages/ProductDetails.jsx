import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <div className="container px-4 py-8">
      <div>
        <Link to="/" className="mb-8 inline-block">
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="shadow-md p-4 rounded w-[600px]">
            <img src="" alt="" />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">title</h1>

            <p className="text-gray-600 mb-6">description</p>

            <div className="mb-6">
              <span className="text-3xl font-bold">price</span>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">category</h3>

              <span className="font-semibold mb-2">category</span>
            </div>

            <button className="flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-md shadow-md hover:shadow-lg gap-2 bg-zinc-200 hover:bg-zinc-300 transform hover:scale-105 transition-all duration-300">
              <ShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
