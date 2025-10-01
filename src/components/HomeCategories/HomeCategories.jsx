import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import HomeCategoriesSkeleton from "../skeletons/HomeCategoriesSkeleton";

export default function HomeCategories() {
  const {categories, isLoading} = useCategories()

  if (isLoading) {
    return <HomeCategoriesSkeleton/>;
  }
  
  return (
    <>
      <section className=" bg-[#F9FAFB] pt-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">Shop by Category</h2>

            <Link
              to={`/categories`}
              className="space-x-2 text-[#16a34a] hover:text-[#15803d] transition-colors duration-200"
            >
              <span>View All Categories</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link to={`/category/${category._id}`} key={category._id} className="cart cursor-pointer bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-center p-4 space-y-2 rounded-xl">
                <img
                  src={category.image}
                  alt="music image"
                  className="rounded-full size-16 mx-auto object-cover"
                />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
