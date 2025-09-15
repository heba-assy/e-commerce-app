import { useEffect, useState } from "react";
import ProductDetailsTab from "./ProductDetailsTab";
import ReviewTab from "./ReviewTab";
import ShippingTab from "./ShippingTab";

export default function ProductTabs({productDetails}) {
  const [activeTab, setActiveTab] = useState("details");

  function getActiveTab() {
    switch (activeTab) {
      case "details":
        return <ProductDetailsTab productDetails={productDetails}/>;
      case "review":
        return <ReviewTab />;
      case "shipping":
        return <ShippingTab />;
      default:
        return <ProductDetailsTab />;
    }
  }

  return (
    <>
      <section className="product-details-tabs">
        <div className="container">
          <div className="bg-white rounded-lg">
            <div className="border-b border-gray-200">
              <div className="flex items-center">
                <button
                  className={`px-6 py-4 font-medium ${
                    activeTab === "details"
                      ? "text-[#16a34a] border-b-2 border-[#16a34a]"
                      : "text-gray-600 hover:text-[#16a34a]"
                  }`}
                  onClick={() => setActiveTab("details")}
                >
                  Product Details
                </button>
                <button
                  className={`px-6 py-4 font-medium ${
                    activeTab === "review"
                      ? "text-[#16a34a] border-b-2 border-[#16a34a]"
                      : "text-gray-600 hover:text-[#16a34a]"
                  }`}
                  onClick={() => setActiveTab("review")}
                >
                  reviews (149)
                </button>
                <button
                  className={`px-6 py-4 font-medium ${
                    activeTab === "shipping"
                      ? "text-[#16a34a] border-b-2 border-[#16a34a]"
                      : "text-gray-600 hover:text-[#16a34a]"
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  Shipping &amp; Returns
                </button>
              </div>
            </div>

            <div className="p-6">{getActiveTab()}</div>
          </div>
        </div>
      </section>
    </>
  );
}
