import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../components/Context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import CartSkeleton from "../../components/skeletons/cartSceleton";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Cart() {
  const { cartInfo, isLoading } = useContext(CartContext);

  if (isLoading || !cartInfo || !cartInfo.data) {
    return <CartSkeleton />;
  }

  const { numOfCartItems, data } = cartInfo;
  const { products, totalCartPrice } = data;

  return (
    <>
      <PageMetaData title="Cart Page" description="FreshCart - Cart Page" />
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Side */}

            <div className="lg:col-span-2 shadow-sm border border-gray-200 rounded-lg ">
              <div className="p-6 space-y-1 border-b border-gray-200">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                {products.length > 0 && (
                  <p className="text-gray-600">
                    {numOfCartItems} items in your cart
                  </p>
                )}
              </div>
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product._id || product.id}
                    className="border-b border-gray-200"
                  >
                    <CartItem productInfo={product} />
                  </div>
                ))
              ) : (
                <div className="space-y-3 py-10 text-center">
                  <p>
                    Your cart is empty
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-lg ms-2 text-[#16a34a]"
                    />
                  </p>
                  <p>
                    You can continue shopping from{" "}
                    <Link to={`/`} className="text-[#16a34a]">
                      here
                    </Link>
                  </p>
                </div>
              )}
            </div>

            {/* Right Side ==> Order Summary*/}
            <div className="lg:col-span-1">
              <div className="p-6 shadow-sm border border-gray-200 rounded-lg sticky top-24">
                <div className="border-b border-gray-200">
                  <h3 className="font-bold text-xl mb-6">Order Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div className="subtotal flex items-center justify-between">
                      <span className=" text-gray-600">
                        Subtotal ({numOfCartItems} items)
                      </span>
                      <span className="text-md">{totalCartPrice} EGP</span>
                    </div>

                    <div className="shipping flex items-center justify-between">
                      <span className=" text-gray-600">Shipping</span>
                      <span className="text-md">
                        {products.length > 0 ? 70 : 0} EGP
                      </span>
                    </div>

                    <div className="tax flex items-center justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-md">
                        {Math.trunc(totalCartPrice * 0.14)} EGP
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />
                <div className="total flex items-center justify-between py-5">
                  <span className="font-bold text-xl">Total</span>
                  <span className="font-bold text-xl">
                    {Math.trunc(
                      totalCartPrice +
                        (products.length > 0 ? 70 : 0) +
                        totalCartPrice * 0.14
                    )}{" "}
                    EGP
                  </span>
                </div>

                <div className="w-full flex flex-col gap-3 *:hover:transition-colors *:duration-200 *:py-3 *:font-medium *:rounded-lg">
                  <Link
                    to="/checkout"
                    className="text-center bg-[#16a34a] hover:bg-[#15803d] text-white  text-lg"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/checkout"
                    className="text-center bg-transparent border border-gray-300 hover:bg-[#16a34a] hover:text-white text-lg"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="text-[#16a34a] text-xl"
                      />
                      <span className="text-lg font-medium">Free Delivery</span>
                    </div>
                    <p className="text-md text-gray-500">
                      Your order qualifies for free delivery. Estimated
                      delivery: 2-3 business days
                    </p>
                  </div>

                  <div className="p-4 bg-[#f0fdf4] border border-[#86efac] rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faShieldAlt}
                        className="text-[#16a34a] text-xl"
                      />
                      <span className="text-lg font-medium">
                        Secure Checkout
                      </span>
                    </div>
                    <p className="text-md text-gray-500">
                      Your payment information is protected with 256-bit SSL
                      encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
