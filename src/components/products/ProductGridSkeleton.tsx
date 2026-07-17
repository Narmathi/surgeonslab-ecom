const ProductGridSkeleton = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border-gray-200  p-4"
        >
          <div className="h-52 rounded-xl bg-gray-200" />

          <div className="mt-4 h-4 w-24 rounded bg-gray-200" />

          <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />

          <div className="mt-3 h-4 w-full rounded bg-gray-200" />

          <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />

          <div className="mt-6 h-10 rounded-xl bg-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default ProductGridSkeleton;
