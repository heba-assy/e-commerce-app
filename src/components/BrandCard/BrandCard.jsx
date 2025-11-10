import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgTest from "../../assets/images/test.png";

export default function BrandCard({brandTitle, img}) {
  return (
    <>
      <div className="rounded-md overflow-hidden shadow-sm">
        <div className="relative h-48">
          <img src={img} className="w-full h-full object-cover" />
          {/* layer */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-4 left-5">
            <h4 className="text-2xl font-semibold text-white">{brandTitle}</h4>
            <span className="text-gray-200">Premium organic produce</span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-gray-600 mb-2">
            Bringing the freshest organic fruits and vegetables from farm to
            table since 1995
          </p>

          <div className="flex items-center justify-between">
            <span className="text-gray-500">124 Products</span>

            <button className="flex items-center gap-1 text-[#16a34a]">
              <span>View Products</span>

              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
