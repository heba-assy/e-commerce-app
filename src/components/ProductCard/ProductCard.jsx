import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCompare,
  faEye,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { calcDiscount } from "../../utils/discount";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../Context/Cart.context";

export default function ProductCard({ productInfo }) {
  const {
    id,
    category,
    imageCover,
    title,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
  } = productInfo;

  const { handleAddingProduct } = useContext(CartContext);

  return (
    <>
      <div className="card relative rounded-xl overflow-hidden shadow-lg bg-white mb-5">
        <div>
          <Link to={`/product/${id}`} className="block">
            <img src={imageCover} alt="" className="h-60 mx-auto" />
          </Link>
        </div>

        <div className="p-4">
          <div className="cart-content space-y-2">
            <span className="text-sm text-gray-500">{category.name}</span>
            <h2 className="font-semibold min-h-[3rem]">
              <Link to={`/product/${id}`}>{title}</Link>
            </h2>
            <div className="rating flex items-center gap-2 *:text-yellow-300">
              <Rating rate={ratingsAverage} />

              <span>{ratingsAverage}</span>
              <span>({ratingsQuantity})</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="price space-x-2">
              <span className="text-lg text-[#16a34a] font-bold">
                {priceAfterDiscount ? priceAfterDiscount : price} EGP
              </span>
              {priceAfterDiscount && (
                <del className="text-gray-500">{price} EGP</del>
              )}
            </div>

            <button
              className="btn bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full p-0 size-8"
              onClick={()=>{
                handleAddingProduct({id})
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <div className="actions absolute top-4 right-4 gap-4 flex flex-col *:text-gray-500 *:hover:text-[#16a34a] *:transition-colors *:duration-200">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCodeCompare} />
          </button>
          <button>
            <Link to={`/product/${id}`}>
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </button>
        </div>

        {priceAfterDiscount && (
          <span className="badge absolute top-4 left-4 px-2 py-1 bg-red-500 text-white rounded-md text-sm">
            -{calcDiscount(price, priceAfterDiscount)}%
          </span>
        )}
      </div>
    </>
  );
}
