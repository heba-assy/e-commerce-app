import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router";
import freshCartLogo from "../../assets/images/freshcart-logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Auth.context";
import { CartContext } from "../Context/Cart.context";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function Navbar() {
  const isOnline = useOnlineStatus()

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { logOut, token } = useContext(AuthContext);

  const { cartInfo, isLoading } = useContext(CartContext);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <header>
        <div className="container">
          {/* Top Nav */}
          <div className="hidden lg:flex py-2 text-sm items-center justify-between border-b border-gray-300/30">
            <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
              <li className="px-2">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>

              {isOnline && (
                <li className="text-[#16a34a]">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Online</span>
                </li>
              )}
            </ul>

            <ul className="flex gap-5 items-center">
              <li>
                <Link to={`track-order`}>Track Order</Link>
              </li>
              <li>
                <Link to={`about`}>About</Link>
              </li>
              <li>
                <Link to={`contact`}>Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>SAR</option>
                  <option>AED</option>
                </select>
              </li>
              <li>
                <select>
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Main Navigation */}
          <nav className="flex py-5 items-center justify-between">
            <h1>
              <NavLink to={`/`}>
                <img src={freshCartLogo} alt="fresh cart logo" />
              </NavLink>
            </h1>

            <search className="hidden lg:block relative">
              <input
                type="text"
                className="form-control min-w-96"
                placeholder="Search for products"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 -translate-1/2"
              />
            </search>

            <ul className="hidden lg:flex items-center gap-8 * *:transition-colors *:duration-200">
              <li>
                <NavLink
                  to={`wishlist`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } flex flex-col hover:text-[#16a34a] items-center gap-2`;
                  }}
                >
                  <FontAwesomeIcon className={`text-lg`} icon={faHeart} />
                  <span className="text-sm">WishList</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`cart`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } flex flex-col hover:text-[#16a34a] items-center gap-2`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      className="text-xl"
                      icon={faCartShopping}
                    />
                    <span className="absolute right-0 top-0 -translate-y-1/2 flex items-center justify-center bg-[#16a34a] rounded-full size-5 text-white text-sm">
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        cartInfo?.numOfCartItems ?? 0
                      )}
                    </span>
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`account`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } flex flex-col hover:text-[#16a34a] items-center gap-2`;
                  }}
                >
                  <FontAwesomeIcon className="text-lg" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li>

              {!token ? (
                <>
                  <li>
                    <NavLink
                      to={`sign-up`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[#16a34a]" : ""
                        } flex flex-col hover:text-[#16a34a] items-center gap-2`;
                      }}
                    >
                      <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                      <span className="text-sm">Sign Up</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`login`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[#16a34a]" : ""
                        } flex hover:text-[#16a34a] flex-col items-center gap-2`;
                      }}
                    >
                      <FontAwesomeIcon
                        className="text-lg"
                        icon={faAddressCard}
                      />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li
                  className="cursor-pointer hover:text-[#16a34a] flex flex-col items-center gap-2"
                  onClick={logOut}
                >
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faRightFromBracket}
                  />
                  <span className="text-sm">LogOut</span>
                </li>
              )}
            </ul>

            <button
              className="lg:hidden btn bg-[#16a34a] hover:bg-[#22c55e] text-white"
              onClick={toggleMenu}
            >
              {isOpenMenu ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>

        {/* Categories Navigation */}
        <nav className="hidden lg:block bg-gray-100 py-4 ">
          <div className="container flex items-center gap-8">
            <div className="relative group">
              <button className="btn flex items-center gap-2 bg-[#16a34a] text-white hover:bg-[#16a34a]/95">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className="hidden group-hover:block absolute top-10 min-w-60 d-none bg-white shadow *:p-3 *:hover:bg-gray-100 *:transition-colors *: duration-300 divide-y-2 divide-gray-300/20 rounded-lg ">
                <li>
                  <Link className=" flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faPerson}
                      className="text-[#16a34a] text-xl"
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>

                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faPersonDress}
                      className="text-[#16a34a] text-xl"
                    />
                    <span>Women's Fashion</span>
                  </Link>
                </li>

                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faBabyCarriage}
                      className="text-[#16a34a] text-xl"
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>

                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faSuitcaseMedical}
                      className="text-[#16a34a] text-xl"
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>

                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="text-[#16a34a] text-xl"
                    />
                    <span>Electronics</span>
                  </Link>
                </li>

                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="text-[#16a34a] text-xl"
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>

            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  to={`/`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } hover:text-[#16a34a] transition-colors duration-200`;
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/recently-added`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } hover:text-[#16a34a] transition-colors duration-200`;
                  }}
                >
                  Recently Added
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/featured-products`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } hover:text-[#16a34a] transition-colors duration-200`;
                  }}
                >
                  Featured Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/offers`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } hover:text-[#16a34a] transition-colors duration-200`;
                  }}
                >
                  Offers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/brands`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#16a34a]" : ""
                    } hover:text-[#16a34a] transition-colors duration-200`;
                  }}
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* OffCanvas */}
        {isOpenMenu && (
          <>
            <div
              className="background cursor-pointer fixed z-30 inset-0 bg-black/50"
              onClick={toggleMenu}
            ></div>
            <div className="offCanvas space-y-5 fixed z-40 bg-white top-0 bottom-0 p-5 animate-slide-in">
              <div className="flex items-center justify-between border-b border-gray-300/50 pb-4">
                <img src={freshCartLogo} alt=" fresh card logo" />
                <button className="btn rounded-full" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <search className="relative">
                <input
                  type="text"
                  className="form-control min-w-64"
                  placeholder="Search for products"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-2 top-1/2 -translate-1/2"
                />
              </search>

              <div>
                <h2 className="text-xl font-bold">Main Menu</h2>

                <ul className="*:hover:bg-gray-100 *:transition-colors *:duration-200 space-y-2 mt-3">
                  <li>
                    <NavLink
                      to={`wishlist`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[#16a34a] bg-[#dcfce7]" : ""
                        } flex items-center gap-2 py-2 px-3`;
                      }}
                    >
                      <FontAwesomeIcon className={`text-lg`} icon={faHeart} />
                      <span className="text-sm">WishList</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`cart`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[#16a34a] bg-[#dcfce7]" : ""
                        } flex items-center gap-2 py-2 px-3`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faCartShopping}
                        />
                        <span className="absolute right-0 top-0 -translate-y-1/2 flex items-center justify-center bg-[#16a34a] rounded-full size-4 text-white text-sm">
                          3
                        </span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`account`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[#16a34a] bg-[#dcfce7]" : ""
                        } flex items-center gap-2 py-2 px-3`;
                      }}
                    >
                      <FontAwesomeIcon className="text-lg" icon={faUser} />
                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="border-t-1 border-gray-300/50 pt-5">
                <h2 className="text-xl font-bold">Account</h2>
                <ul className="*:hover:bg-gray-100 *:transition-colors *:duration-200 space-y-2 mt-3">
                  {!token ? (
                    <>
                      <li>
                        <NavLink
                          to={`sign-up`}
                          className={({ isActive }) => {
                            return `${
                              isActive ? "text-[#16a34a] bg-[#dcfce7]" : ""
                            } flex items-center gap-2 py-2 px-3`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-lg"
                            icon={faUserPlus}
                          />
                          <span className="text-sm">Sign Up</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to={`login`}
                          className={({ isActive }) => {
                            return `${
                              isActive ? "text-[#16a34a] bg-[#dcfce7]" : ""
                            } flex items-center gap-2 py-2 px-3`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-lg"
                            icon={faAddressCard}
                          />
                          <span className="text-sm">Login</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li
                      className="cursor-pointer flex items-center gap-2 py-2 px-3"
                      onClick={logOut}
                    >
                      <FontAwesomeIcon
                        className="text-lg"
                        icon={faRightFromBracket}
                      />
                      <span className="text-sm">LogOut</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
