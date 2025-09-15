import Rating from "../Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../Context/Cart.context";

export default function CartItem({ productInfo }) {
  const { count, price, product } = productInfo;
  const { title, category, ratingsAverage, id, _id } = product;
  const [isUpdating, setIsUpdating] = useState(false);

  const { handleRemovingCartItem, handleUpdatingQuantity } = useContext(CartContext);

  async function handleUpdating({id, count}){
    setIsUpdating(true)
    await handleUpdatingQuantity({id, count})
    setIsUpdating(false)
  }
  return (
    <>
      <div className={`cart flex items-center justify-between px-6 py-8 ${isUpdating && "opacity-70"}`}>
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img
            src={product.imageCover}
            alt=""
            className="object-cover size-20"
          />
          <div className="space-y-2">
            <div className="space-y-1 text-start">
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="text-gray-600 text-sm">{category?.name}</p>
            </div>

            <div className="rating flex items-center gap-2 *:text-yellow-300">
              <Rating rate={ratingsAverage} />
              <span>{ratingsAverage}</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="counter w-25 flex items-center rounded-lg border border-gray-300 ">
            <button
              className="py-2 w-1/3 px-1 border-r border-gray-300"
              onClick={() => {
                handleUpdating({ count: count - 1, id });
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="p-2 w-2/3 text-center">{count}</span>
            <button
              className="py-2 w-1/3 px-1 border-l border-gray-300"
              onClick={() => {
                handleUpdating({ count: count + 1, id });
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="price flex flex-col space-y-1">
            <span className="font-bold text-xl">{price * count} EGP</span>
          </div>

          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-500 text-lg cursor-pointer hover:text-red-600"
            onClick={() => {
              handleRemovingCartItem({ id: id || _id });
            }}
          />
        </div>
      </div>
    </>
  );
}
