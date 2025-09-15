import { faArrowRotateLeft, faHeadset, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomeFeatures() {
  return (
    <>
      <div className="py-10">
        <div className="container grid grid-cols-4 space-x-6">
            <div className="flex items-center p-4 gap-4 rounded-xl border-1 border-gray-100 space-y-3">
                <div className="size-12 bg-[#dcfce7] rounded-full flex items-center justify-center mb-0">
                    <FontAwesomeIcon icon={faTruck} className="text-[#16a34a] text-xl"/>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">Free Delivery</h3>
                    <p className="text-sm text-gray-500">Orders $50 or more</p>
                </div>
            </div>

            <div className="flex items-center p-4 gap-4 rounded-xl border-1 border-gray-100 space-y-3">
                <div className="size-12 bg-[#dcfce7] rounded-full flex items-center justify-center mb-0">
                    <FontAwesomeIcon icon={faArrowRotateLeft} className="text-[#16a34a] text-xl"/>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">30 Days Return</h3>
                    <p className="text-sm text-gray-500">Satisfaction guaranteed</p>
                </div>
            </div>

            <div className="flex items-center p-4 gap-4 rounded-xl border-1 border-gray-100 space-y-3">
                <div className="size-12 bg-[#dcfce7] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-[#16a34a] text-xl"/>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">Secure Payment</h3>
                    <p className="text-sm text-gray-500">100% protected checkout</p>
                </div>
            </div>

            <div className="flex items-center p-4 gap-4 rounded-xl border-1 border-gray-100 space-y-3">
                <div className="size-12 bg-[#dcfce7] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeadset} className="text-[#16a34a] text-xl"/>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">24/7 Support</h3>
                    <p className="text-sm text-gray-500">Ready to help antytime</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
