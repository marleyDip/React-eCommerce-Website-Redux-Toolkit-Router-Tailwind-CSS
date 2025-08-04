import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link>
      <div className="group bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-2xl cursor-pointer overflow-hidden transition-all duration-300  ">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64  object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 opacity-0  group-hover:opacity-100  transition-all duration-300">
            <span className="absolute top-0 left-4 px-3 py-1 text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-700 rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        <div className="bg-gray-50 p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600   mb-4 border-b-2 border-zinc-400 pb-4">
            {product.description.substring(0, 40) + "..."}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl  font-bold text-gray-900">
              $ {product.price}
            </span>

            <button className="group/btn  flex items-center space-x-2 px-4 py-2 cursor-pointer bg-gray-200 text-gray-900 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              <span className="font-medium">View Details</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
