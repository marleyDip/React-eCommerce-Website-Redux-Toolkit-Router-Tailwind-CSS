import Footer from "../components/Footer";
import ProductGrid from "../components/productGrid";

const categories = [
  "All",
  "Tablets",
  "Monitors",
  "Laptops",
  "Smartphones",
  "Accessories",
];

function Home() {
  return (
    <div>
      <div className="bg"></div>

      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                className="bg-gray-300 px-4 py-2 rounded-md text-black active:scale-105  hover:bg-zinc-400 ease-in transition-all"
              >
                {cat}
              </button>
            );
          })}
        </div>

        <ProductGrid />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
