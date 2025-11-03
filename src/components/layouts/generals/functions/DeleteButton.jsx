import { Icon } from "@iconify/react";

export default function DeleteButton({
  onClick,
  children = null,
  disabled = false,
  lockWidth = false,
  onlyIcon = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-red-600 border border-red-600 text-white py-2 px-3 rounded flex items-center transition-all duration-300 hover:bg-red-500 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:bg-red-700 disabled:bg-red-600 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-100 ${
        lockWidth ? "w-28 flex justify-center" : ""
      } ${onlyIcon && "w-16"} ${className}`}
    >
      <Icon
        icon="material-symbols:delete-outline"
        className={`text-xl ${!onlyIcon ? "me-2" : "text-center w-full"} ${
          lockWidth && "shrink-0"
        }`}
      />
      {!onlyIcon && `${children || "Hapus"}`}
    </button>
  );
}
