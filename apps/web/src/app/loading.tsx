export default function Loading() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-neutral-200 w-1/3"></div>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[320px] bg-neutral-100 border border-neutral-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
