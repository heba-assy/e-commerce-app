import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import freshCartLogo from "../../assets/images/freshcart-logo.svg";
import freshCartMiniLogo from "../../assets/images/mini-logo.png";

export default function Footer() {
  return (
    <>
      <footer className="py-4 bg-white border-t border-gray-400/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-7 xl:grid-cols-5 py-8">
            <div className="xl:col-span-2 space-y-3">
              <img src={freshCartLogo} alt="fresh cart logo" />
              <p>
                FreshCart is a versatile e-commerce platform offering a wide
                range of products, from clothing to electronics. It provides a
                user-friendly experience for seamless shopping across diverse
                categories.
              </p>

              <ul className="flex items-center gap-4 text-lg *:text-[#22c55e] *:hover:text-[#16a34a] *:transition-colors *:duration-200">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Categories</h2>

              <ul className="space-y-3 *:hover:text-[#16a34a] *:transition-colors *:duration-200">
                <li>
                  <Link to={``}>Men's Fashion</Link>
                </li>

                <li>
                  <Link to={``}>Women's Fashion</Link>
                </li>

                <li>
                  <Link to={``}>Baby & Toys</Link>
                </li>

                <li>
                  <Link to={``}>Beauty & Health</Link>
                </li>

                <li>
                  <Link to={``}>Electronics</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>

              <ul className="space-y-3 *:hover:text-[#16a34a] *:transition-colors *:duration-200">
                <li>
                  <Link to={`/about`}>About Us</Link>
                </li>

                <li>
                  <Link to={`/contact`}>Contact Us</Link>
                </li>

                <li>
                  <Link to={`/privacy-policy`}>Privacy Policy</Link>
                </li>

                <li>
                  <Link to={`/terms`}>Terms of Service</Link>
                </li>

                <li>
                  <Link to={`/shipping-policy`}>Shipping Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Customer Service</h2>

              <ul className="space-y-3 *:hover:text-[#16a34a] *:transition-colors *:duration-200">
                <li>
                  <Link to={`/account`}>My Account</Link>
                </li>

                <li>
                  <Link to={`/orders`}>My Orders</Link>
                </li>

                <li>
                  <Link to={`/wishlist`}>WishList</Link>
                </li>

                <li>
                  <Link to={`/returns-and-refunds`}>Returns & Refunds</Link>
                </li>

                <li>
                  <Link to={`/help-center`}>Help Center</Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex items-center justify-between py-5 border-t border-gray-400/20">
            <p>
              &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
            </p>
            <img src={freshCartMiniLogo} className="w-8" alt="fresh cart mini logo" />
          </div>
        </div>
      </footer>
    </>
  );
}
