import { Icon } from "@iconify/react";

export default function EditButton({
  onClick,
  children = null,
  disabled = false,
  lockWidth = false,
  onlyIcon = false,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`bg-green-600 border border-green-600 text-white py-2 px-3 rounded flex items-center transition-all duration-300 hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:bg-green-700 disabled:bg-green-600 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-100 ${
        lockWidth ? "w-28 flex justify-center" : ""
      } ${onlyIcon && "w-16"} ${className}`}
    >
      <Icon
        icon="basil:edit-outline"
        className={`text-xl ${!onlyIcon ? "me-2" : "text-center w-full"} ${
          lockWidth && "shrink-0"
        }`}
      />
      {!onlyIcon && `${children || "Ubah"}`}
    </button>
  );
}
