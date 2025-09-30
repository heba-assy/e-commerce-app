import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBox,
  faCreditCard,
  faGaugeHigh,
  faHeart,
  faLocationDot,
  faRightFromBracket,
  faStar,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../../components/Context/Auth.context";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function AccountLayout() {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <PageMetaData title="Account Page" description="FreshCart - Account Page" />
      <section className="py-8 bg-[#F9FAFB]">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-8">
            {/*----- Sidebar --------- */}
            <aside className="w-full md:w-1/4">
              <div className="shadow-sm rounded-lg p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-12 text-2xl rounded-full flex items-center justify-center bg-[#dcfce7] text-[#16a34a]">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>
                    <h3 className="font-medium ">{userInfo.name || "user"}</h3>
                    <p className="text-sm text-gray-500">
                      {userInfo.email || "user@example.com"}
                    </p>
                  </div>
                </div>

                <div className="text-gray-600 flex flex-col *:space-x-2 *:px-2 *:py-3 *:hover:bg-[#f0fdf4] *:hover:text-[#16a34a] duration-200 transition-colors">
                  <Link to={`/account/dashboard`}>
                    <FontAwesomeIcon icon={faGaugeHigh} />
                    <span>Dashboard</span>
                  </Link>
                  <Link to={`/account/orders`}>
                    <FontAwesomeIcon icon={faBox} />
                    <span>Orders</span>
                  </Link>
                  <Link to={`/account/wishlist`}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Wishlist</span>
                  </Link>
                  <Link to={`/account/favorites`}>
                    <FontAwesomeIcon icon={faStar} />
                    <span>Favorites</span>
                  </Link>
                  <Link to={`/account/addresses`}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>Addresses</span>
                  </Link>
                  <Link to={`/account/payment-methods`}>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span>Payment Methods</span>
                  </Link>
                  <Link to={`/account/account-details`}>
                    <FontAwesomeIcon icon={faUserPen} />
                    <span>Account Details</span>
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </aside>
            <div className="w-full md:w-3/4">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
