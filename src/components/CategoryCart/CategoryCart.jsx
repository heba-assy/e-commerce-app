import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CategoryCart({img, categoryTitle}) {
  return (
    <>
      <div className="rounded-md overflow-hidden shadow-sm cursor-pointer">
        <div className="relative h-48">
          <img src={img} className="w-full h-full object-cover" />
          {/* الـ layer */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="absolute bottom-4 left-5">
            <h4 className="text-2xl font-semibold text-white">
              {categoryTitle}
            </h4>
            <span className="text-gray-200">86 items</span>
          </div>
        </div>

        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <span className="bg-[#dcfce7] text-[#15803d] py-1 px-2 text-sm rounded-md">
              High Quality
            </span>
            <span className="bg-[#dcfce7] text-[#15803d] py-1 px-2 text-sm rounded-md">
              Premium
            </span>
            <span className="bg-[#dcfce7] text-[#15803d] py-1 px-2 text-sm rounded-md">
              Great
            </span>
          </div>

          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#16a34a] text-lg cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
