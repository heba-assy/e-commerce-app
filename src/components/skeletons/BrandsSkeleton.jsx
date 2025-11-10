import React from "react";

export default function BrandsSkeleton() {
  return (
    <>
      <main className="pt-10">
        <div className="container">
          <div className="text-center space-y-3 mb-10">
            <div className="mx-auto h-8 w-64 bg-gray-200 rounded animate-pulse" />
            <div className="mx-auto h-4 w-96 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="bg-[#F9FAFB] py-8">
          <div className="container">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-6" />

            {/* grid of skeleton brand cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[...Array(8)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 animate-pulse"
                >
                  <div className="rounded-full size-20 bg-gray-200" />
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center gap-2">
              <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
