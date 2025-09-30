import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import notFoundingImg from "../../assets/images/notFoundingImg.svg";
import {
  faAppleWhole,
  faBreadSlice,
  faComment,
  faDrumstickBite,
  faEgg,
  faEnvelope,
  faHome,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import PageMetaData from "../../components/PageMetaData/PageMetaData";
export default function NotFound() {
  return (
    <>
      <PageMetaData
        title="Not-Found Page"
        description="FreshCart - Not-Found Page"
      />
      <section id="not-found" className="py-20 bg-[#F9FAFB]">
        <div className="container max-w-2xl text-center">
          <img src={notFoundingImg} className="mb-8" />
          {/*------Error Message------- */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              The page you're looking for seems to have gone shipping!
            </p>
            <p className="text-gray-500">
              Dont't worry, our fresh products are still available for you.
            </p>
            {/*----Buttons */}
            <div className="space-x-3 mt-4 mb-8">
              <button className="btn px-8  bg-[#16a34a] hover:bg-[#15803d] text-white">
                <Link to={`/`} className="space-x-1">
                  <FontAwesomeIcon icon={faHome} />
                  <span>Back to Home</span>
                </Link>
              </button>

              <button className="btn px-8 space-x-1 border border-[#16a34a] hover:bg-[#16a34a] hover:text-white bg-white text-[#16a34a]">
                <Link to={`/search`} className="space-x-1">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search Products</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-5 font-bold text-lg">
              Or explore our popular categories
            </h3>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white shadow-sm text-center rounded-md">
                <span className="rounded-full size-12 mx-auto bg-[#dcfce7] mb-3  flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faAppleWhole}
                    className="text-[#16a34a] text-lg"
                  />
                </span>
                <h5>Fruits & Vegetables</h5>
              </div>

              <div className="p-3 bg-white shadow-sm text-center rounded-md">
                <span className="rounded-full size-12 mx-auto bg-[#dcfce7] mb-3  flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEgg}
                    className="text-[#16a34a] text-lg"
                  />
                </span>
                <h5>Dairy & Eggs</h5>
              </div>

              <div className="p-3 bg-white shadow-sm text-center rounded-md">
                <span className="rounded-full size-12 mx-auto bg-[#dcfce7] mb-3  flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBreadSlice}
                    className="text-[#16a34a] text-lg"
                  />
                </span>
                <h5>Bakery & Snacks</h5>
              </div>

              <div className="p-3 bg-white shadow-sm text-center rounded-md">
                <span className="rounded-full size-12 mx-auto bg-[#dcfce7] mb-3  flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faDrumstickBite}
                    className="text-[#16a34a] text-lg"
                  />
                </span>
                <h5>Meat & Seafood</h5>
              </div>
            </div>
          </div>

          <div className="bg-[#f0fdf4] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to assist you 24/7
            </p>
            <div className="flex items-center flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-700">
                <FontAwesomeIcon icon={faPhone} className="text-[#16a34a]" />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#16a34a]" />
                <a href="tel:+1 (800) 123-4567">support@freshcart.com</a>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <FontAwesomeIcon icon={faComment} className="text-[#16a34a]" />
                <span>Live Chat</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
