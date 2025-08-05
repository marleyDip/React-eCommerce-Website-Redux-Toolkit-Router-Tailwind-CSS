import { BaggageClaim, Minus, Plus, Trash2 } from "lucide-react";
import { toWords } from "number-to-words";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  //update
  const UpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      toast.error("Please delete the product!", {
        position: "top-center",
      });
    } else {
      dispatch(updateQuantity({ id, quantity: newQty }));

      toast.success("Product Added Once More!", {
        position: "top-center",
      });
    }
  };

  //remove
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));

    toast.error("Item removed from cart successfully!", {
      position: "top-center",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center ">
          <h2 className="text-2xl md:text-3xl font-bold">Your Cart is Empty</h2>

          <p className="mt-5 text-lg md:text-xl text-gray-600 mb-4 capitalize font-semibold">
            Add some Products to your cart to see them here
          </p>

          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-green-400 via-teal-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transform  hover:translate-y-2 transition-all duration-200 "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>

              <div className="flex-1">
                <Link
                  to={`/product/${item.id}`}
                  className="font-bold hover:text-blue-600"
                >
                  {item.title}
                </Link>

                <p className="text-gray-600 font-semibold">৳ {item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  {/* <button
                    className="p-1 font-medium rounded-full hover:bg-gray-100"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                  >
                    <Minus size={16} />
                  </button>  */}

                  <button
                    className="p-1 font-medium rounded-full hover:bg-gray-100"
                    onClick={() => UpdateQty(item.id, item.quantity - 1)}
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  {/* <button
                    className="p-1 font-medium rounded-full hover:bg-gray-100"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    <Plus size={16} />
                  </button> */}

                  <button
                    className="p-1 font-medium rounded-full hover:bg-gray-100"
                    onClick={() => UpdateQty(item.id, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>

                  <div
                    className="ml-4 to-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Trash2 size={20} />
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  ৳ {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-extrabold mb-4">Order Summary</h3>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Sub Total</span>

                <span className="font-bold">৳ {total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Shipping</span>

                <span className="font-bold">৳ 0.00</span>
              </div>

              <div className="pt-2 border-gray-300 border-t-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Items</span>

                  <span className="font-bold">{totalItems}</span>
                </div>
              </div>

              <div className="pt-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Price</span>

                  <span className="font-bold">৳ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2 font-semibold">
                In Word: {toWords(Math.floor(total.toFixed(2)))} Taka Only
              </div>
            </div>

            <button className="flex items-center justify-center mx-auto md:text-center bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
              <BaggageClaim className="mr-2" /> Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
