export default function DashboardContainer({
  whiteBackground = false,
  className = "",
  children,
}) {
  return (
    <div
      className={`h-full overflow-x-hidden overflow-y-auto p-8 pb-16 ${
        whiteBackground ? "bg-white" : "bg-gray-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
