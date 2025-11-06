export default function ChartSection({
  className = "",
  title = null,
  children,
}) {
  return (
    <div className={`rounded-lg border border-violet-600 h-max ${className}`}>
      <div className="rounded-t-md bg-violet-600 p-4">
        <p className="text-white font-semibold">Unduh</p>
      </div>

      <div className="p-4 bg-violet-50">
        <p className="text-violet-600 font-semibold text-3xl text-center">
          {title}
        </p>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
