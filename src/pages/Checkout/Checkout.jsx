import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightLong,
  faChevronLeft,
  faCircleInfo,
  faLock,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../components/Context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { createOrder } from "../../services/payments-services";
import { toast } from "react-toastify";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Checkout() {
  const { cartInfo, isLoading, setCartInfo } = useContext(CartContext);
  const navigate = useNavigate();

  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;

  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment Method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("Details is required"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(phoneRegex, "Phone number is invalid"),
      city: yup.string().required("City is required"),
    }),
  });

  async function handleCreatingOrder(values) {
    try {
      const response = await createOrder({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });
      if (response.success) {
        if (response.data.session) {
          toast.loading(
            "You'll be directed to stripe to complete payment proccess"
          );
          setTimeout(() => {
            location.href = response.data.session.url;
          }, 3000);
        }

        toast.success("Your order has been created successfully");
        setCartInfo({
          numOfCartItems: 0,
          data: {
            products: [],
            totalCartPrice: 0,
          },
        });
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreatingOrder,
  });

  if (isLoading || !cartInfo || !cartInfo.data) {
    return <Loading />;
  }

  const { cartId, numOfCartItems, data } = cartInfo;
  const { totalCartPrice, products } = data;

  return (
    <>
      <PageMetaData
        title="Checkout Page"
        description="FreshCart - Checkout Page"
      />
      <section className="bg-gray-50">
        <div className="container max-w-6xl py-6">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="payment-method space-y-6 *:p-6 lg:col-span-8">
                <div className="payment-options bg-white shadow-sm rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div className="space-y-5">
                    <label
                      htmlFor="cod"
                      className={`${
                        formik.values.paymentMethod === "cod"
                          ? "border-[#22c55e] bg-[#f0fdf4]/60"
                          : "border-gray-200"
                      } flex gap-4 border hover:border-[#22c55e] hover:transition-colors hover:duration-200 rounded-lg p-4`}
                    >
                      <input
                        type="radio"
                        id="cod"
                        name="payment-method"
                        value={`cod`}
                        onChange={() => {
                          formik.setFieldValue("paymentMethod", "cod");
                        }}
                        checked={formik.values.paymentMethod === "cod"}
                        className="size-4"
                      />

                      <div className="w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faMoneyBill1Wave}
                              className="text-2xl text-[#16a34a]"
                            />
                            <div>
                              <h3 className="font-semibold">
                                Cash on Delivery
                              </h3>
                              <p className="text-gray-500 text-sm">
                                Pay when your order arrives
                              </p>
                            </div>
                          </div>
                          <span className="text-[#16a34a] text-sm">
                            No extra charges
                          </span>
                        </div>

                        <div
                          className={`${
                            formik.values.paymentMethod === "cod"
                              ? "flex"
                              : "hidden"
                          } ml-10 mt-3 items-center text-[#16a34a] border border-[#16a34a]/50 p-2 gap-2 rounded-md`}
                        >
                          <FontAwesomeIcon icon={faCircleInfo} />
                          <p className="text-sm">
                            Please keep exact change ready for hassle-free
                            delivery
                          </p>
                        </div>
                      </div>
                    </label>

                    <label
                      htmlFor="online"
                      className={`${
                        formik.values.paymentMethod === "online"
                          ? "border-[#22c55e] bg-[#f0fdf4]/60"
                          : "border-gray-200"
                      } flex gap-4 border hover:border-[#22c55e] hover:transition-colors hover:duration-200 rounded-lg p-4`}
                    >
                      <input
                        type="radio"
                        id="online"
                        name="payment-method"
                        value={`online`}
                        onChange={() => {
                          formik.setFieldValue("paymentMethod", "online");
                        }}
                        checked={formik.values.paymentMethod === "online"}
                        className="size-4"
                      />

                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="text-2xl text-[#16a34a]"
                            />
                            <div>
                              <h3 className="font-semibold">Online Payment</h3>
                              <p className="text-gray-500 text-sm">
                                Pay securely with card or digital wallet
                              </p>
                            </div>
                          </div>
                          <span className="text-[#16a34a] text-sm">
                            Recommended
                          </span>
                        </div>

                        <div
                          className={`${
                            formik.values.paymentMethod === "online"
                              ? "flex"
                              : "hidden"
                          } ml-10 mt-3 items-center text-blue-500 border bg-blue-50 border-blue-600/50 p-2 gap-2 rounded-md`}
                        >
                          <FontAwesomeIcon icon={faCircleInfo} />
                          <p className="text-sm">
                            You will be redirected to secure payment gateway to
                            complete your transaction
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="shipping-address bg-white shadow-sm rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">
                    Shipping Address
                  </h2>
                  <div className="address">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="addressDetails" className="text-sm">
                        Address Details *
                      </label>
                      <textarea
                        id="addressDetails"
                        placeholder="Enter your full address details"
                        name="shippingAddress.details"
                        value={formik.values.shippingAddress.details}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control min-h-28 max-h-50"
                      ></textarea>
                      {formik.touched.shippingAddress?.details &&
                        formik.errors.shippingAddress?.details && (
                          <p className=" text-sm text-red-500">
                            *{formik.errors.shippingAddress?.details}
                          </p>
                        )}
                    </div>

                    <div className="flex gap-3 mt-3 *:grow-1 ">
                      <div className="phone flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-sm">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="0109751482"
                          name="shippingAddress.phone"
                          value={formik.values.shippingAddress.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-control"
                        />

                        {formik.touched.shippingAddress?.phone &&
                          formik.errors.shippingAddress?.phone && (
                            <p className=" text-sm text-red-500">
                              *{formik.errors.shippingAddress?.phone}
                            </p>
                          )}
                      </div>

                      <div className="city flex flex-col space-y-2">
                        <label htmlFor="city" className="text-sm">
                          City
                        </label>
                        <input
                          id="city"
                          placeholder="Egypt"
                          name="shippingAddress.city"
                          value={formik.values.shippingAddress.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-control"
                        />

                        {formik.touched.shippingAddress?.city &&
                          formik.errors.shippingAddress?.city && (
                            <p className=" text-sm text-red-500">
                              *{formik.errors.shippingAddress?.city}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-summary lg:col-span-4 p-6 shadow-sm rounded-lg bg-white lg:sticky lg:top-24 h-fit">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <div className="cart-ietms max-h-48 overflow-auto px-3 space-y-3 py-6 border-b border-gray-500/20 ">
                  {products.map((product) => (
                    <Link
                      to={`/product/${product.product.id}`}
                      key={product._id}
                      className="item flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={product.product.imageCover}
                          className="size-12 object-cover rounded-md"
                        />
                        <div>
                          <h3>{product.product.title}</h3>
                          <span className="text-gray-500 ">
                            Qty:{product.count}
                          </span>
                        </div>
                      </div>

                      <span>{product.price} EGP</span>
                    </Link>
                  ))}
                </div>

                <ul className="space-y-4 mt-6 *:flex *:items-center *:justify-between">
                  <li>
                    <span>Subtotal</span>
                    <span>{totalCartPrice} EGP</span>
                  </li>

                  <li>
                    <span>Delivery</span>
                    <span>{numOfCartItems === 0 ? 0 : 70} EGP</span>
                  </li>

                  <li>
                    <span>Tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </li>

                  <li className="font-bold text-xl py-3 border-t border-gray-500/20">
                    <span>Total</span>
                    <span>
                      {Math.trunc(
                        totalCartPrice +
                          (numOfCartItems === 0 ? 0 : 70) +
                          totalCartPrice * 0.14
                      )}{" "}
                      EGP
                    </span>
                  </li>
                </ul>

                <div className="btn-group space-y-4 *:py-3 *:w-full *:rounded-lg mt-3">
                  <button
                    type="submit"
                    className="bg-[#16a34a]  text-white hover:bg-[#15803d] hover:transition-colors hover:duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Proceed to payment</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>

                  <Link
                    to={`/cart`}
                    className="bg-transparent  border text-gray-500/90 hover:bg-[#16a34a] hover:text-white hover:transition-colors hover:duration-200 border-gray-200 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Previous Step</span>
                  </Link>
                </div>

                <div className="my-4 space-y-1">
                  <h3>Secure Checkout</h3>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-[#16a34a] text-sm"
                    />
                    <p className="text-sm text-gray-400">
                      Your payment information is secure
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-4 gap-2 *:text-2xl">
                  <FontAwesomeIcon icon={faCcVisa} className="text-blue-800" />
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="text-red-600"
                  />
                  <FontAwesomeIcon icon={faCcAmex} className="text-blue-500" />
                  <FontAwesomeIcon
                    icon={faCcPaypal}
                    className="text-blue-800"
                  />
                  <FontAwesomeIcon icon={faCcApplePay} className="text-black" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
