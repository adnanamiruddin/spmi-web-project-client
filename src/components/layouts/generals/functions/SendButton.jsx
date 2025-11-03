import { Icon } from "@iconify/react";

export default function SendButton({
  onClick,
  disabled,
  children = null,
  loading = false,
  lockWidth = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-green-900 border-[1.5px] border-green-900 text-white font-semibold py-1 px-3 rounded flex items-center transition-all duration-300 hover:bg-green-800 hover:border-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50 focus:bg-green-950 disabled:bg-green-900 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-100 ${
        lockWidth ? "w-28 flex justify-center" : ""
      } ${className}`}
    >
      {children || "Kirim"}
      {!loading ? (
        <Icon
          icon="material-symbols:send-rounded"
          className={`text-2xl ms-1.5 ${lockWidth && "shrink-0"}`}
        />
      ) : (
        <span className="loading loading-spinner loading-md ms-1.5"></span>
      )}
    </button>
  );
}
