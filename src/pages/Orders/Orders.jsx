import {
  faCheck,
  faClock,
  faCreditCard,
  faEye,
  faRotateRight,
  faSearch,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUserOrders } from "../../services/orders-service";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/Auth.context";
import Loading from "../../components/Loading/Loading";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Orders() {
  const { userInfo } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchOrders() {
    try {
      setIsLoading(true);
      const response = await getUserOrders({ userId: userInfo.id });
      if (response.success) {
        setIsLoading(false);
        setOrders(response.data);
        console.log(response);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PageMetaData title="Orders Page" description="FreshCart - Orders Page" />
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-7">
          <h3 className="font-bold text-2xl">My Orders</h3>
          <div className="flex items-center gap-3">
            <div className="bg-[#F3F4F6] px-3 py-2 rounded-lg border border-gray-200">
              <select>
                <option>All Orders</option>
              </select>
            </div>

            <div className="bg-[#F3F4F6] px-3 py-2 rounded-lg border border-gray-200">
              <input placeholder="Search orders..." />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        {/*------- No Orders yet ---------- */}
        {orders?.length === 0 && (
          <div className="text-center py-12">
            <FontAwesomeIcon
              icon={faBox}
              className="mb-4 text-6xl text-gray-300"
            />
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-gray-500">
                No orders found
              </h4>
              <p className="text-gray-400">You haven't placed any order yet</p>
              <button className="btn bg-[#16a34a] text-white hover:bg-[#15803d] rounded-md px-6 py-2">
                Start Shopping
              </button>
            </div>
          </div>
        )}
        {/*-------- with orders -----------*/}
        <div className="space-y-4">
          {orders?.map((order, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">
                      Order #{order.id}
                    </span>

                    {order.isPaid ? (
                      <span className="ml-2 rounded-full bg-green-50 text-green-700 text-xs py-1 px-2">
                        <FontAwesomeIcon icon={faCheck} className="mr-1" />
                        Paid
                      </span>
                    ) : (
                      <span className="ml-2 rounded-full bg-red-50 text-red-700 text-xs py-1 px-2">
                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                        Unpaid
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500">Placed on June 15,2023</p>
                </div>

                <div className="flex items-center gap-3 *:cursor-pointer mt-3 md:mt-0">
                  <div className="space-x-1 text-[#16a34a] hover:text-[#15803d] text-sm font-medium">
                    <FontAwesomeIcon icon={faRotateRight} />
                    <span>Reorder</span>
                  </div>

                  <div className="space-x-1 hover:text-[#16a34a] text-sm font-medium">
                    <FontAwesomeIcon icon={faEye} />
                    <span>View Details</span>
                  </div>
                </div>
              </div>

              <hr className="w-full h-0.5 text-gray-300" />

              <div className="bg-white p-4 flex flex-col md:flex-row items-start gap-4">
                {/*--- imgs -------- */}
                <div className="flex shrink-0 items-center gap-2 mb-4 md:mb-0 md:mr-4">
                  {order.cartItems.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="relative size-16 overflow-hidden rounded "
                    >
                      <img
                        src={item.product.imageCover}
                        className="w-full h-full object-cover"
                        alt="product"
                      />
                      <div className="absolute top-0 right-0 size-6 rounded-bl-sm  bg-gray-800 text-white flex items-center justify-center">
                        {item.count}
                      </div>
                    </div>
                  ))}
                </div>

                {/*------ Total amount ------ */}
                <div className="flex-grow md:px-6 md:border-l md:border-r border-gray-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-2 md:mb-0">
                      <span className="text-sm text-gray-400">Items</span>
                      <h5 className="font-medium">
                        {order.cartItems.length} items
                      </h5>
                    </div>

                    <div className="mb-2 md:mb-0">
                      <span className="text-sm text-gray-400">
                        Total Amount
                      </span>
                      <h5 className="font-medium">{order.totalOrderPrice}</h5>
                    </div>

                    <div className="mb-2 md:mb-0">
                      <span className="text-sm text-gray-400">
                        Delivered to
                      </span>
                      <p className="font-medium font-cairo">
                        {order.shippingAddress.city}
                      </p>
                      <p className="text-xs text-green-600">
                        on {new Date(order.createdAt).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/*------ Buttons ------ */}
                <div className="flex flex-col md:items-end items-start mt-4 md:mt-0 space-y-2 w-full md:w-auto md:ml-4 ">
                  {order.isPaid ? (
                    <>
                      <button className="btn bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
                        <FontAwesomeIcon icon={faTruck} />
                        Track Order
                      </button>

                      <button className="btn bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 text-sm font-medium">
                        Cancel Order
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn bg-yellow-600 text-white hover:bg-yellow-700 text-sm font-medium">
                        <FontAwesomeIcon icon={faCreditCard} />
                        Complete Payment
                      </button>

                      <button className="btn bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-medium">
                        Reorder Items
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p>Showing 1-4 of 12 orders</p>
        </div>
      </div>
    </>
  );
}
