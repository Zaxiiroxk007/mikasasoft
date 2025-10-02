export default function Loading() {
  return (
    <div className="min-h-screen bg-deep-midnight">
      {/* Hero Skeleton */}
      <div className="relative py-24 bg-gradient-to-b from-obsidian to-deep-midnight">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-graphite/50 rounded-lg w-48 mx-auto" />
            <div className="h-16 bg-graphite/50 rounded-lg w-3/4 mx-auto" />
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 bg-graphite/50 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
