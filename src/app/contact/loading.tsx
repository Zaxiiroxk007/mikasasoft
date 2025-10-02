export default function Loading() {
  return (
    <div className="min-h-screen bg-deep-midnight">
      {/* Hero Skeleton */}
      <div className="relative py-24 bg-gradient-to-b from-obsidian to-deep-midnight">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-16 bg-graphite/50 rounded-lg w-3/4 mx-auto" />
            <div className="h-6 bg-graphite/50 rounded-lg w-1/2 mx-auto" />
          </div>
        </div>
      </div>

      {/* Contact Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="h-[600px] bg-graphite/30" />
          <div className="h-[600px] bg-graphite/50" />
        </div>
      </div>
    </div>
  );
}
