import { useSelector } from "react-redux";
//import products from "../productsContent";
import ProductCard from "./ProductCard";

function ProductGrid() {
  //console.log(products);

  const products = useSelector((state) => state.product.filteredItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-10">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductGrid;
