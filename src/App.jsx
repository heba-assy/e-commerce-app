import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Brands from "./pages/Brands/Brand";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Checkout from "./pages/Checkout/Checkout";
import Favourites from "./pages/Favourites/Favourites";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Orders from "./pages/Orders/Orders";
import SearchProducts from "./pages/SearchProducts/SearchProducts";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import WishList from "./pages/WishList/WishList";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import ProductsProvider from "./components/Context/Products.contex";
import CategoriesProvider from "./components/Context/Caregories.context";
import AuthProvider from "./components/Context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./components/Context/Cart.context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "favourites",
          element: (
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          ),
        },
        {
          path: "forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "Product/:id",
          element: <ProductDetails />,
        },
        {
          path: "search-product",
          element: <SearchProducts />,
        },
        {
          path: "verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <RouterProvider router={router} />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                closeButton={false}
                closeOnClick={true}
              />
            </ProductsProvider>
          </CategoriesProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
