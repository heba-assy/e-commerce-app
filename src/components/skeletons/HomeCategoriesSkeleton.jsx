export default function HomeCategoriesSkeleton() {
  return (
    <>
      <section className="bg-[#F9FAFB] pt-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="cart cursor-pointer bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-center p-4 space-y-2 rounded-xl animate-pulse"
              >
                <div className="rounded-full size-16 mx-auto bg-gray-200" />
                <div className="h-5 w-24 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}