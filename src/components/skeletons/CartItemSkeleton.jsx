export default function CartItemSkeleton() {
  return (
    <div className="cart flex items-center justify-between px-6 py-8 animate-pulse">
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
  );
}