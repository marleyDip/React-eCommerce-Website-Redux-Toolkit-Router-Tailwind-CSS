import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import ProductGrid from "../components/productGrid";
import { setSelectedCategory } from "../features/products/productSlice";

const categories = [
  "All",
  "Tablets",
  "Monitors",
  "Laptops",
  "Smartphones",
  "Accessories",
];

function Home() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );

  return (
    <div>
      <div className="bg"></div>

      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                className={`px-4 py-2 rounded-md text-black ease-in transition-all ${
                  selectedCategory === cat
                    ? "bg-black text-white scale-105"
                    : "bg-gray-300 hover:bg-zinc-400"
                }`}
                onClick={() => dispatch(setSelectedCategory(cat))}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
