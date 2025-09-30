export default function ProductCartSkeleton() {
  return (
    <div className="card relative rounded-xl overflow-hidden shadow-lg bg-white mb-5 animate-pulse">
      <div>
        <div className="h-60 w-full bg-gray-200" />
      </div>

      <div className="p-4">
        <div className="cart-content space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-40 bg-gray-200 rounded" />
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-8 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="space-x-2 flex items-center">
            <div className="h-6 w-20 bg-gray-200 rounded" />
            <div className="h-5 w-12 bg-gray-200 rounded" />
          </div>
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
        </div>
      </div>

      <div className="actions absolute top-4 right-4 gap-4 flex flex-col">
        <div className="h-8 w-8 bg-gray-200 rounded-full" />
        <div className="h-8 w-8 bg-gray-200 rounded-full" />
        <div className="h-8 w-8 bg-gray-200 rounded-full" />
      </div>

      <div className="badge absolute top-4 left-4 px-4 py-2 bg-gray-200 rounded-md w-16 h-6" />
    </div>
  );
}