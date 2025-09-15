import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRotateLeft,
  faCartShopping,
  faMinus,
  faPlus,
  faShareNodes,
  faTruckFast,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { calcDiscount } from "../../utils/discount";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext, useState } from "react";
import { CartContext } from "../Context/Cart.context";

export default function ProductInfo({ productDetails }) {
  const {
    id,
    category,
    description,
    images,
    brand,
    price,
    priceAfterDiscount,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    title,
  } = productDetails;

  const { handleAddingProduct, handleRemovingCartItem, isInCart } =
    useContext(CartContext);

  const [selectQuantity, setSelectQuantity] = useState(1);

  return (
    <>
      <section key={id} className="py-10 bg-[#F9FAFB]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images --> Left Side */}
            <div className="product-images lg:w-96">
              <ReactImageGallery
                showFullscreenButton={false}
                showNav={false}
                showPlayButton={false}
                items={images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })}
              />
            </div>
            {/*Right Side */}
            <div className="bg-white p-8 lg:w-3/5">
              <div className="space-y-5 mb-7">
                <div className="flex items-center justify-between">
                  <span
                    className={`${
                      quantity > 0
                        ? "bg-[#dcfce7] text-[#15803d]"
                        : "bg-red-100 text-red-700"
                    } py-1 px-2  rounded-md text-sm`}
                  >
                    {quantity > 0 ? "In Stock" : "Out Of Stock"}
                  </span>
                  <div className="text-gray-500 space-x-2 text-lg *:hover:text-[#16a34a] *:transition-colors *:duration-200">
                    <button>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold">{title}</h2>

                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="text-yellow-300">
                      <Rating rate={ratingsAverage} />
                    </div>
                    <span>{ratingsAverage}</span>
                    <span>({ratingsQuantity} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">
                    {priceAfterDiscount ? priceAfterDiscount : price} EGP
                  </span>

                  {priceAfterDiscount ? (
                    <>
                      <del className="text-xl text-gray-500">{price} EGP</del>

                      <span className="px-2 py-1 bg-[#FEE2E2] text-red-500 rounded-md">
                        Save {calcDiscount(price, priceAfterDiscount)}%
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="border-t border-b border-gray-400/20 pt-7 pb-7">
                <p className="text-gray-600 mb-6">{description}</p>

                <div className="space-y-3">
                  <div className="quantity flex items-center gap-5">
                    <span className="font-semibold">Quantity:</span>

                    <div className="border-1 border-gray-600  px-3 py-2 flex items-center gap-8">
                      <button
                        className="hover:text-[#16a34a]"
                        onClick={() =>
                          setSelectQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span> {selectQuantity} </span>
                      <button
                        className="hover:text-[#16a34a]"
                        onClick={() =>
                          setSelectQuantity((prev) =>
                            prev < quantity ? prev + 1 : prev
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>

                    <span>Only {quantity} items left in stock</span>
                  </div>

                  <div className="flex items-center w-full gap-3 mt-7 *:py-3 *:transition-colors *:duration-200">
                    <button
                      className={`btn w-1/2 flex items-center justify-center border text-white ${
                        isInCart
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-[#16a34a] hover:bg-[#15803d]"
                      }`}
                      onClick={() => {
                        if (isInCart) {
                          handleRemovingCartItem({ id });
                        } else {
                          handleAddingProduct({ id });
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={isInCart ? faTrash : faCartShopping}
                        />
                        <span>
                          {isInCart ? "Remove from cart" : "Add to cart"}
                        </span>
                      </div>
                    </button>

                    <button
                      className="btn w-1/2 flex items-center justify-center bg-transparent border border-gray-300 hover:bg-[#16a34a] hover:text-white hover:border-0"
                      onClick={() => {
                        handleAddingProduct({ id });
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span>Buy Now</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="flex items-center gap-4 pt-6">
                  <div className="size-12 bg-[#dcfce7] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-[#16a34a] text-xl"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="m-0 text-lg font-semibold">Free Delivery</h3>
                    <p className="text-sm text-gray-500">
                      Free shipping on orders over $50
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4  pt-6">
                  <div className="size-12 bg-[#dcfce7] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faArrowRotateLeft}
                      className="text-[#16a34a] text-xl"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="m-0 text-lg font-semibold">
                      30 Days Return
                    </h3>
                    <p className="text-sm text-gray-500">
                      Satisfaction guaranteed or money back
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
