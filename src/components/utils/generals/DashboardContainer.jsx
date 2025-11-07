export default function DashboardContainer({
  whiteBackground = false,
  className = "",
  title = "",
  pageAddressList = [],
  children,
}) {
  return (
    <div
      className={`h-full overflow-x-hidden overflow-y-auto p-8 pb-16 ${
        whiteBackground ? "bg-white" : "bg-gray-100"
      } ${className}`}
    >
      {title && (
        <div className="mb-8 flex justify-between items-center">
          <p className="text-4xl font-bold">{title}</p>
          {pageAddressList.length > 0 && (
            <p className="font-medium">
              {(() => {
                const breadcrumb =
                  pageAddressList.length > 0 && pageAddressList[0] === "Beranda"
                    ? pageAddressList
                    : ["Beranda", ...pageAddressList];
                return breadcrumb.map((label, i) => {
                  const isLast = i === breadcrumb.length - 1;
                  return (
                    <span
                      key={i}
                      className={isLast ? "text-black" : "text-gray-400"}
                    >
                      {label}
                      {!isLast && <span className="mx-1"> &gt; </span>}
                    </span>
                  );
                });
              })()}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
