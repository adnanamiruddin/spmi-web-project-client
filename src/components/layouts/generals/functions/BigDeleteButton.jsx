import { Icon } from "@iconify/react";

export default function BigDeleteButton({
  onClick,
  children = null,
  disabled = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-red-600 border border-red-600 text-white py-3 w-[50%] rounded flex flex-col justify-center items-center transition-all duration-300 hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:bg-red-700 disabled:bg-red-600 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-100 ${className}`}
    >
      <Icon icon="material-symbols:delete-outline" className="text-2xl" />
      {children || "Hapus"}
    </button>
  );
}
