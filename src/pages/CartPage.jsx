import { BaggageClaim } from "lucide-react";

function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md"></div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Sub Total</span>

                <span>Total Amount</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <span>Free</span>
              </div>

              <div className="pt-2 border-gray-300 border-t-4 fon-bold flex justify-between">
                <span>Total</span>

                <span>Amount</span>
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
