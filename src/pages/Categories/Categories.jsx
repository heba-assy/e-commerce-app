import PageMetaData from "../../components/PageMetaData/PageMetaData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import CategoryCart from "../../components/CategoryCart/CategoryCart";
import { useCategories } from "../../hooks/useCategories";
import {
  faAppleWhole,
  faBreadSlice,
  faCarrot,
  faCheck,
  faCheese,
  faFish,
  faListUl,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import testImg from "../../assets/images/test.png"

export default function Categories() {
  const { categories, isLoading, error } = useCategories();

  return (
    <>
      <PageMetaData
        title="Shop by Categories | Fresh & Quality Products"
        desc="Browse our wide selection of fresh products across all categories. Find everything from groceries to household essentials in one place."
      />

      <main className="py-16">
        <div className="container">
          {/* Top ---> Filteration*/}
          <div className="flex flex-col text-cente md:text-start md:flex-row md:justify-between md:items-center pb-4">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Shop by Categories
              </h2>
              <p className="text-gray-500 mb-3 md:mb-0">
                Browse our wide selection of fresh products by category
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label id="sort" className="text-gray-500 mr-2">
                sort by:{" "}
              </label>
              <select className="border border-gray-300 rounded-md pr-20 pl-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>Featured</option>
              </select>

              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button className="p-2 bg-green-500 text-white">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className="text-lg"
                  />
                </button>
                <button className="p-2 bg-white text-gray-600">
                  <FontAwesomeIcon icon={faListUl} className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFB] py-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories?.map((category) => (
                <CategoryCart
                  key={category._id}
                  img={category.image}
                  categoryTitle={category.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-4">
              Popular Subcategories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-5">
              <div className="bg-[#F9FAFB] rounded-lg text-center py-5">
                <FontAwesomeIcon
                  icon={faAppleWhole}
                  className="p-6 rounded-full bg-[#dcfce7] text-[#16a34a] text-2xl"
                />
                <h5 className="text-lg font-semibold mt-2">Fresh Fruits</h5>
                <span className="text-gray-500">42 items</span>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg text-center py-5">
                <FontAwesomeIcon
                  icon={faCarrot}
                  className="p-6 rounded-full bg-[#dcfce7] text-[#16a34a] text-2xl"
                />
                <h5 className="text-lg font-semibold mt-2">Fresh Vegetables</h5>
                <span className="text-gray-500">38 items</span>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg text-center py-5">
                <FontAwesomeIcon
                  icon={faCheese}
                  className="p-6 rounded-full bg-[#dcfce7] text-[#16a34a] text-2xl"
                />
                <h5 className="text-lg font-semibold mt-2">Cheese</h5>
                <span className="text-gray-500">24 items</span>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg text-center py-5">
                <FontAwesomeIcon
                  icon={faBreadSlice}
                  className="p-6 rounded-full bg-[#dcfce7] text-[#16a34a] text-2xl"
                />
                <h5 className="text-lg font-semibold mt-2">Bread</h5>
                <span className="text-gray-500">28 items</span>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg text-center py-5">
                <FontAwesomeIcon
                  icon={faFish}
                  className="p-6 rounded-full bg-[#dcfce7] text-[#16a34a] text-2xl"
                />
                <h5 className="text-lg font-semibold mt-2">Sea Food</h5>
                <span className="text-gray-500">19 items</span>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg text-center py-5">
                <FontAwesomeIcon
                  icon={faWineBottle}
                  className="p-6 rounded-full bg-[#dcfce7] text-[#16a34a] text-2xl"
                />
                <h5 className="text-lg font-semibold mt-2">Juices</h5>
                <span className="text-gray-500">22 items</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 bg-[#F9FAFB]">
          <div className="container py-5">
            <div className="bg-[#f0fdf4] flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-md overflow-hidden">
              <div className="px-8 space-y-5">
                <div className="space-y-2">
                  <span className="text-[#16a34a] font-semibold pt-5 md:pt-0">Featured Category</span>
                  <h3 className="text-3xl font-semibold">Organic Fruits & Vegetables</h3>
                </div>

                <p className="text-gray-500 text-lg">Discover our wide range of organic produce, sourced from local farms and delivered fresh to your doorstep.</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-[#16a34a]"/>
                    <p>100% Certified Organic</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-[#16a34a]"/>
                    <p>Locally sourced when availble</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-[#16a34a]"/>
                    <p>No Pesticides or Harmful Chemicals</p>
                  </div>
                </div>

                <button className="btn bg-[#16a34a] text-white">Explore Category</button>
              </div>

              <img src={testImg} className=""/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
