export default function HomeDealsSkeleton() {
  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-8 w-56 bg-gray-200 rounded animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="counter flex items-center gap-2">
                  <div className="size-7 rounded-md bg-gray-200 animate-pulse" />
                  <span className="text-gray-300">:</span>
                  <div className="size-7 rounded-md bg-gray-200 animate-pulse" />
                  <span className="text-gray-300">:</span>
                  <div className="size-7 rounded-md bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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