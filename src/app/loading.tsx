export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-obsidian via-deep-midnight to-deep-midnight flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-survey-corps-emerald/20" />
          <div className="absolute inset-0 rounded-full border-4 border-t-survey-corps-emerald animate-spin" />
        </div>
        <p className="text-platinum font-medium">Loading...</p>
      </div>
    </div>
  );
}
