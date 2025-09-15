import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products-service";

export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({});

      if (response.success) {
        setIsLoading(false);
        setProducts(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ Products, isLoading, isError }}>
      {children}
    </ProductsContext.Provider>
  );
}
