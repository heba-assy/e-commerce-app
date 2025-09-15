import { createContext, useEffect, useState } from "react";
import { getAllCategories } from "../../services/categories-services";

export const CategoriesContext = createContext(null);

export default function CategoriesProvider({children}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  async function fetchCategories() {
    try {
      setIsLoading(true);
      const response = await getAllCategories();
      if (response.success) {
        setIsLoading(false);
        setCategories(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error)
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return <CategoriesContext.Provider value={{categories, isLoading, error}}>
    {children}
  </CategoriesContext.Provider>;
}
