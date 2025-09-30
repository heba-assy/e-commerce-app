export default function CartSkeleton() {
  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Side */}
            <div className="lg:col-span-2 shadow-sm border border-gray-200 rounded-lg ">
              <div className="p-6 space-y-1 border-b border-gray-200">
                <div className="h-7 w-48 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
              {/* Skeleton cart items */}
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="border-b border-gray-200">
                  <div className="flex items-center justify-between px-6 py-8 animate-pulse">
                    {/* Left Side */}
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-200 rounded-md size-20" />
                      <div className="space-y-2">
                        <div className="space-y-1 text-start">
                          <div className="h-5 w-32 bg-gray-200 rounded" />
                          <div className="h-3 w-20 bg-gray-200 rounded" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-16 bg-gray-200 rounded" />
                          <div className="h-4 w-6 bg-gray-200 rounded" />
                        </div>
                      </div>
                    </div>
                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                      <div className="counter w-25 flex items-center rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-gray-200 rounded" />
                        <div className="h-8 w-8 bg-gray-200 rounded mx-1" />
                        <div className="h-8 w-8 bg-gray-200 rounded" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <div className="h-5 w-16 bg-gray-200 rounded" />
                      </div>
                      <div className="h-6 w-6 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side ==> Order Summary Skeleton */}
            <div className="lg:col-span-1">
              <div className="p-6 shadow-sm border border-gray-200 rounded-lg sticky top-24">
                <div className="border-b border-gray-200 pb-6">
                  <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-6" />
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-32 bg-gray-200 rounded" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 bg-gray-200 rounded" />
                      <div className="h-4 w-12 bg-gray-200 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                      <div className="h-4 w-10 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between py-5">
                  <div className="h-6 w-20 bg-gray-200 rounded" />
                  <div className="h-6 w-24 bg-gray-200 rounded" />
                </div>
                <div className="w-full flex flex-col gap-3 mt-3">
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-gray-200 rounded" />
                      <div className="h-4 w-32 bg-gray-200 rounded" />
                    </div>
                    <div className="h-4 w-48 bg-gray-200 rounded" />
                  </div>
                  <div className="p-4 bg-[#f0fdf4] border border-[#86efac] rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-gray-200 rounded" />
                      <div className="h-4 w-32 bg-gray-200 rounded" />
                    </div>
                    <div className="h-4 w-48 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}