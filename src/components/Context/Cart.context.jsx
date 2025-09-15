import { createContext, useEffect, useState } from "react";
import {
  addProductToCart,
  getCartItems,
  removeCartItem,
  updateCart,
} from "../../services/cart-service";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  // Add Product to cart
  async function handleAddingProduct({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });

      if (response.success) {
        toast.success(response.data.message);
        setIsLoading(false);
        handleGettingCartItem();
       
        setIsInCart(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  // Get Cart Product
  async function handleGettingCartItem() {
    try {
      setIsLoading(true);
      const response = await getCartItems();
      if (response.success) {
        setIsLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  // Remove item from cart
  async function handleRemovingCartItem({ id }) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#333446",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const toastId = toast.loading("ًWe are deleting cart item");
        const response = await removeCartItem({ id });
        if (response.success) {
          toast.dismiss(toastId);
          setCartInfo(response.data);
          setIsInCart(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Update product quantity
  async function handleUpdatingQuantity({ id, count }) {
    try {
      const toastId = toast.loading("Updating Product Quantity");
      const response = await updateCart({ id, count });
      if (response.success) {
        toast.dismiss(toastId);
        setCartInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGettingCartItem();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        setCartInfo,
        isLoading,
        isError,
        error,
        handleAddingProduct,
        handleRemovingCartItem,
        isInCart,
        handleUpdatingQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
