export default function FeaturedProductsSkeleton() {
  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="h-8 w-56 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-4 space-y-3 animate-pulse"
              >
                <div className="h-32 w-full bg-gray-200 rounded" />
                <div className="h-5 w-24 bg-gray-200 rounded mx-auto" />
                <div className="h-4 w-16 bg-gray-200 rounded mx-auto" />
                <div className="h-6 w-20 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}