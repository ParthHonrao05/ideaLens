export default function SkeletonLoader() {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3 mb-7">
        <div className="skeleton h-4 w-40 rounded-lg" />
        <div className="skeleton h-4 w-24 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-[22px] p-6"
            style={{ background: "var(--bg3)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="skeleton h-5 w-5 rounded-md" />
              <div className="skeleton h-4 w-28 rounded-lg" />
              <div className="skeleton h-5 w-14 rounded-full ml-auto" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="skeleton h-3 w-full rounded" />
              <div className="skeleton h-3 w-5/6 rounded" />
              <div className="skeleton h-3 w-4/5 rounded" />
              <div className="skeleton h-3 w-full rounded" />
            </div>
          </div>
        ))}
        <div
          className="rounded-[22px] p-6 sm:col-span-2"
          style={{ background: "var(--bg3)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="skeleton h-5 w-5 rounded-md" />
            <div className="skeleton h-4 w-32 rounded-lg" />
            <div className="skeleton h-5 w-12 rounded-full ml-auto" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="skeleton h-3 w-full rounded" />
            <div className="skeleton h-3 w-11/12 rounded" />
            <div className="skeleton h-3 w-4/5 rounded" />
          </div>
        </div>
        {[3, 4].map((i) => (
          <div
            key={i}
            className="rounded-[22px] p-6"
            style={{ background: "var(--bg3)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="skeleton h-5 w-5 rounded-md" />
              <div className="skeleton h-4 w-28 rounded-lg" />
              <div className="skeleton h-5 w-14 rounded-full ml-auto" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="skeleton h-3 w-full rounded" />
              <div className="skeleton h-3 w-4/5 rounded" />
              <div className="skeleton h-3 w-full rounded" />
              <div className="skeleton h-3 w-3/4 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
